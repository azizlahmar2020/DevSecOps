pipeline {
    agent any

    stages {

        stage('Build Database') {
            steps {
                dir('database') {
                    sh 'docker build -t devsecops-mysql .'
                }
            }
        }

        stage('Run Database') {
            steps {
                sh '''
                docker rm -f mysql || true
                docker run -d \
                  --name mysql \
                  -p 3306:3306 \
                  devsecops-mysql
                '''
            }
        }

        stage('Build Backend') {
            steps {
                dir('Backend') {
                    sh 'docker build -t devsecops-backend .'
                }
            }
        }

        stage('Run Backend') {
            steps {
                sh '''
                docker rm -f backend || true
                docker run -d \
                  --name backend \
                  --link mysql:mysql \
                  -p 8089:8089 \
                  devsecops-backend
                '''
            }
        }

        stage('Build Frontend') {
            steps {
                dir('Front') {
                    sh 'docker build -t devsecops-front .'
                }
            }
        }

        stage('Run Frontend') {
            steps {
                sh '''
                docker rm -f frontend || true
                docker run -d \
                  --name frontend \
                  -p 4200:80 \
                  devsecops-front
                '''
            }
        }
    }

    post {
        always {
            echo "Pipeline terminé."
        }
        success {
            echo "✅ Déploiement réussi !"
            echo "Frontend: http://localhost:4200"
            echo "Backend: http://localhost:8089/foyer"
            echo "Database: localhost:3306"
        }
        failure {
            echo "❌ Échec du pipeline."
        }
    }
}
