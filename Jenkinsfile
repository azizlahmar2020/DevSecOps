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

        stage('Security Scan') {
            steps {
                echo '🔒 Analyse de sécurité des images Docker...'
                sh '''
                    # Exemple avec Trivy (à installer au préalable)
                    # trivy image ${DB_IMAGE}
                    # trivy image ${BACKEND_IMAGE}
                    # trivy image ${FRONTEND_IMAGE}
                    echo "Security scan à configurer avec Trivy ou autre outil"
                '''
            }
        }

        stage('Push Images to Registry') {
            when {
                branch 'main'
            }
            steps {
                echo '📤 Push des images vers le registry Docker...'
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", "${DOCKER_CREDENTIALS_ID}") {
                        sh '''
                            docker push ${DB_IMAGE}
                            docker push ${BACKEND_IMAGE}
                            docker push ${FRONTEND_IMAGE}
                        '''
                    }
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo '🚀 Déploiement de l\'application...'
                sh '''
                    # Option 1: Déploiement avec Docker Compose
                    # docker-compose up -d
                    
                    # Option 2: Déploiement sur Kubernetes
                    # kubectl apply -f k8s/
                    
                    # Option 3: Chargement dans kind pour test local
                    kind load docker-image ${DB_IMAGE} || echo "kind non disponible"
                    kind load docker-image ${BACKEND_IMAGE} || echo "kind non disponible"
                    kind load docker-image ${FRONTEND_IMAGE} || echo "kind non disponible"
                    
                    echo "Déploiement effectué"
                '''
            }
        }
    }

    post {
        always {
            echo '🧹 Nettoyage...'
            sh '''
                # Nettoyage des images dangling
                docker image prune -f || true
            '''
        }
        success {
            echo '✅ Pipeline exécuté avec succès!'
            // Notifications (email, Slack, etc.)
        }
        failure {
            echo '❌ Le pipeline a échoué!'
            // Notifications d'erreur
        }
        unstable {
            echo '⚠️ Le pipeline est instable!'
        }
    }
}
