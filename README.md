## localstack-dynamodb

## preparation

* npm

        $ npm install -g typescript
        $ npm install -g @babel/cli
        $ npm install
        $ cd 02_dynamodb; npm install; cd ../

* AWS

        $ aws configure --profile localstack
        AWS Access Key ID [None]: dummy
        AWS Secret Access Key [None]: dummy
        Default region name [None]: ap-northeast-1
        Default output format [None]: json

* Docker 

    https://docs.docker.com/

* localstack

    https://github.com/localstack/localstack  
    clone another directory

    * up
    
            docker-compose up -d

        http://localhost:4566/health
    
    * down
    
            docker-compose down

## development
* setup
    
        ./bin/setup
        ./bin/update_lambda_01
        ./bin/update_lambda_02

* run

        ./bin/run_lambda_01
        ./bin/run_lambda_02

## tools

* NoSQL Workbench

    https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/workbench.settingup.html

    * How to Use
        1. select 'Operation builder'
        2. click 'Add Connection'
        3. select 'DynamoDB local' tab
        4. Input the following params and click 'Connect'
            * Default AWS Region:　ap-northeast-1
            * Access key ID: dummy
            * Session token: dummy