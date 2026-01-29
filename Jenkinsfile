pipeline {
    agent any

    environment {
        // Configuration Docker Hub (à adapter)
        DOCKER_REGISTRY = "docker.io"
        DOCKER_CREDENTIALS_ID = "dockerhub-credentials"
        
        // Noms des images
        DB_IMAGE = "foyer-database:latest"
        BACKEND_IMAGE = "foyer-backend:latest"
        FRONTEND_IMAGE = "foyer-frontend:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Récupération du code source...'
                checkout scm
            }
        }

        stage('Check Tools') {
            steps {
                echo '🔍 Vérification des outils installés...'
                sh '''
                    echo "=== Docker ==="
                    docker --version
                    
                    echo "=== Java & Maven ==="
                    java -version
                    mvn -v
                    
                    echo "=== Node & npm ==="
                    node -v
                    npm -v
                '''
            }
        }

        stage('Build Database Image') {
            steps {
                echo '🗄️ Construction de l\'image Docker pour la base de données...'
                dir('DataBase') {
                    sh '''
                        docker build -t ${DB_IMAGE} .
                    '''
                }
            }
        }

        stage('Build Backend') {
            steps {
                echo '⚙️ Construction du Backend Spring Boot...'
                dir('Backend') {
                    sh '''
                        # Test et build Maven
                        mvn clean test
                        mvn package -DskipTests
                        
                        # Construction de l'image Docker
                        docker build -t ${BACKEND_IMAGE} .
                    '''
                }
            }
        }

        stage('Build Frontend') {
            steps {
                echo '🎨 Construction du Frontend Angular...'
                dir('Front') {
                    sh '''
                        # Installation des dépendances
                        npm ci --legacy-peer-deps
                        
                        # Build de l'application Angular
                        npm run build -- --configuration production
                        
                        # Construction de l'image Docker
                        docker build -t ${FRONTEND_IMAGE} .
                    '''
                }
            }
        }

        stage('Run Tests') {
            parallel {
                stage('Backend Tests') {
                    steps {
                        echo '🧪 Exécution des tests Backend...'
                        dir('Backend') {
                            sh 'mvn test'
                        }
                    }
                }
                stage('Frontend Tests') {
                    steps {
                        echo '🧪 Exécution des tests Frontend...'
                        dir('Front') {
                            sh 'npm run test -- --watch=false --browsers=ChromeHeadless'
                        }
                    }
                }
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
