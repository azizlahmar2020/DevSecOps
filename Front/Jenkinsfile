pipeline {
    agent any

    environment {
        APP_NAME = "mini-projet"
        IMAGE_NAME = "angular-foyer:latest"
    }

    stages {

        stage('Checkout') {
            steps {
                // Jenkins fait déjà checkout SCM normalement, mais ici pour être sûr
                checkout scm
            }
        }

        stage('Check Node & Docker') {
            steps {
                sh '''
                    which node
                    node -v
                    npm -v
                    docker --version
                    kubectl version --client
                    kind version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci --legacy-peer-deps'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'npm run build -- --configuration production'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Load Image into kind') {
            steps {
                sh '''
                    kind load docker-image $IMAGE_NAME
                '''
            }
        }

        stage('Deploy to kind') {
            steps {
                // Par exemple, appliquer les manifests Kubernetes ici (à adapter selon ton projet)
                sh 'kubectl apply -f k8s/'
            }
        }

    }

    post {
        always {
            echo "Pipeline terminé."
        }
        success {
            echo "Build et déploiement réussis."
        }
        failure {
            echo "Échec du pipeline."
        }
    }
}
