pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.49.1-noble' } }
   stages {
      stage('smoke-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test'
         }
      }
   }
   
   post{
       always{
            publishHTML([
                            reportName : 'Playwright Report',
                            reportDir: 'playwright-report',
                            reportFiles: 'index.html',
                            keepAll:     true,
                            alwaysLinkToLastBuild: true,
                            allowMissing: false
                        ])
       }
   }
}