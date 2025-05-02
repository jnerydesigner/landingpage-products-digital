pipeline {
    agent any
    tools {
        nodejs 'NodeJS_22'
    }
    stages {
        stage('Check Node Version') {
            steps {
                script {
                    def nodeVersion = sh(script: 'node -v', returnStdout: true).trim()
                    echo "Node.js version: ${nodeVersion}"
                }
            }
        }
        stage("Verificar Instalações") {
            steps {
                sh 'which node'
                sh 'which yarn'
                sh 'which pm2'
            }
        }
        stage('Deploy com PM2') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'SSH_PASSWORD', variable: 'SSH_PASSWORD')]) {
                        sh """
                            sshpass -p '${SSH_PASSWORD}' ssh -o StrictHostKeyChecking=no 191.101.78.119'
                                export PATH=/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NodeJS_22/bin:$PATH

                                node -v
                                yarn -v

                                cd /var/lib/jenkins/workspace/LandingPageLinks

                                yarn install
                                yarn build

                                pm2 update landing-page-links || true
                                pm2 start ecosystem.config.cjs --update-env || pm2 restart ecosystem.config.cjs
                            '
                        """
                    }
                }
            }
        }
    }
}