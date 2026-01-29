pipeline {
    agent any

    environment {
        KIND_CLUSTER_NAME = "my-cluster"
    }

    stages {

        // 1️⃣ Créer le cluster Kind
        stage('Create Kind Cluster') {
            steps {
                echo "Création du cluster Kind..."
                sh "kind create cluster --name ${KIND_CLUSTER_NAME}"
                sh "kubectl cluster-info --context kind-${KIND_CLUSTER_NAME}"
            }
        }

        // 2️⃣ Build Database Docker image
        stage('Build Database') {
            steps {
                dir('database') {
                    sh 'docker build -t devsecops-mysql .'
                }
            }
        }

        // 3️⃣ Build Backend Docker image
        stage('Build Backend') {
            steps {
                dir('Backend') {
                    sh 'docker build -t devsecops-backend .'
                }
            }
        }

        // 4️⃣ Build Frontend Docker image
        stage('Build Frontend') {
            steps {
                dir('Front') {
                    sh 'docker build -t devsecops-front .'
                }
            }
        }

        // 5️⃣ Load Docker images into Kind
        stage('Load Docker Images into Kind') {
            steps {
                sh "kind load docker-image devsecops-mysql --name ${KIND_CLUSTER_NAME}"
                sh "kind load docker-image devsecops-backend --name ${KIND_CLUSTER_NAME}"
                sh "kind load docker-image devsecops-front --name ${KIND_CLUSTER_NAME}"
            }
        }

        // 6️⃣ Deploy Database in Kubernetes
        stage('Deploy Database') {
            steps {
                sh "kubectl apply -f k8s/database-deployment.yaml"
                sh "kubectl apply -f k8s/database-service.yaml"
            }
        }

        // 7️⃣ Deploy Backend in Kubernetes
        stage('Deploy Backend') {
            steps {
                sh "kubectl apply -f k8s/backend-deployment.yaml"
                sh "kubectl apply -f k8s/backend-service.yaml"
            }
        }

        // 8️⃣ Deploy Frontend in Kubernetes
        stage('Deploy Frontend') {
            steps {
                sh "kubectl apply -f k8s/frontend-deployment.yaml"
                sh "kubectl apply -f k8s/frontend-service.yaml"
            }
        }

        // 9️⃣ Verify pods and services
        stage('Verify Deployment') {
            steps {
                sh "kubectl get pods"
                sh "kubectl get svc"
            }
        }
    }

    post {
        always {
            echo "Pipeline terminé."
        }
        success {
            echo "✅ Déploiement Kubernetes réussi !"
            echo "Frontend: NodePort exposé ou via port-forward"
            echo "Backend: NodePort exposé ou via port-forward"
            echo "Database: accessible via cluster service"
        }
        failure {
            echo "❌ Échec du pipeline."
        }
        cleanup {
            echo "Suppression du cluster Kind..."
            sh "kind delete cluster --name ${KIND_CLUSTER_NAME}"
        }
    }
}
