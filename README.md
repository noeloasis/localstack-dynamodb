## localstack-dynamodb

## preparation

* Docker 

    https://docs.docker.com/

* localstack

    https://github.com/localstack/localstack  
    clone another directory

    * up
    
            docker-compose up -d
    
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
