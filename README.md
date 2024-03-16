# handson-apigw-lambda-dynamodb
 uri: "arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${LambdaFunctionAPI.Arn}/invocations"
       ver esse->https://medium.com/hackernoon/serverless-and-lambdaless-scalable-crud-data-api-with-aws-api-gateway-and-dynamodb-626161008bb2
Baseado:
https://docs.aws.amazon.com/pt_br/apigateway/latest/developerguide/http-api-dynamo-db.html

       ver esse -rimeiro->https://github.com/mecsantos/aws-sam-swagger-apigateway-lambda-starter/blob/master/template.yaml


       https://github.com/mecsantos/aws-sam-swagger-apigateway-lambda-starter/blob/master/template.yaml
       https://github.com/mecsantos/aws-sam-swagger-apigateway-lambda-starter/blob/master/swagger.yaml


       curl -X "PUT" -H "Content-Type: application/json" -d "{\"id\": \"1234\", 
       \"create_date\": \"2001-01-01\",\"street\": \"av.floriano\", \"city\": \"Uberlandia\",\"state\": \"MG\",\"zip\": \"38400000\" }" https://0lod6pip2e.execute-api.us-east-1.amazonaws.com/addresses

       curl -X "GET" https://0lod6pip2e.execute-api.us-east-1.amazonaws.com/addresses
        curl -X "GET" https://0lod6pip2e.execute-api.us-east-1.amazonaws.com/addresses/1

        curl -X "DELETE" https://0lod6pip2e.execute-api.us-east-2.amazonaws.com/items/123


        https://whatibroke.com/2022/01/25/adding-a-custom-domain-name-aws-sam/
        https://whatibroke.com/2022/01/25/adding-a-custom-domain-name-aws-sam/


        https://stackoverflow.com/questions/36544011/how-to-fetch-the-aws-route53-hosted-zone-id

        aws route53 list-resource-record-sets \
--hosted-zone-id "/hostedzone/ABCDEF12345678"

aws route53 list-hosted-zones-by-name | 
jq --arg name "example.com." \
-r '.HostedZones | .[] | select(.Name=="\($name)") | .Id'

https://rhuaridh.co.uk/blog/aws-sam-custom-domain.html# cadastro-cliente
