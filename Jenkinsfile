pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Get code from GitHub repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm packages
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                bat 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                withCredentials([string(credentialsId: 'RENDER_DEPLOY_HOOK_URL', variable: 'RENDER_DEPLOY_HOOK_URL')]) {
                    bat 'curl -X POST %RENDER_DEPLOY_HOOK_URL%'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
