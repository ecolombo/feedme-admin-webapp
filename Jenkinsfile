pipeline { 

    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Source checkout') {
            steps {
                echo 'Cloning source code is finished.'
            }
        }

        stage('Test') {
            steps {
                echo 'Cloning source test is finished.'
            }
        }

        stage('Docker build') {
            steps {
                echo 'Build docker image'
                sh ''' docker image build -t feedme-admin-webapp .'''
            }
        }

        stage('Docker deploy') {
            steps {
                echo '----------------- This is a docker deployment phase ----------'
                sh '''
                (if  [ $(docker ps -a | grep feedme-admin-webapp-container | cut -d " " -f1) ]; then \
                        echo $(docker rm -f feedme-admin-webapp-container); \
                        echo "---------------- successfully removed feedme-admin-webapp ----------------"
                     else \
                    echo OK; \
                 fi;);
                docker container run --network feedme-webapp-network --restart always --name feedme-admin-webapp-container -p 4500:81 -d feedme-admin-webapp
            '''
            }
        }
    }
}
