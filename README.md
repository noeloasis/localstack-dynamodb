## localstack-dynamodb

## preparation

* AWS

```
$ aws configure --profile localstack
AWS Access Key ID [None]: dummy
AWS Secret Access Key [None]: dummy
Default region name [None]: ap-northeast-1
Default output format [None]: json
```

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
