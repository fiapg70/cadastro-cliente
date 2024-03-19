const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    switch (event.routeKey) {
      case "DELETE /clients/{id}":
        await dynamo
          .delete({
            TableName: "clients",
            Key: {
              id: event.pathParameters.id
            }
          })
          .promise();
        body = `Deleted item ${event.pathParameters.id}`;
        break;
      case "GET /clients/{id}":
        body = await dynamo
          .get({
            TableName: "clients",
            Key: {
              id: event.pathParameters.id
            }
          })
          .promise();
        break;
      case "GET /clients":
        body = await dynamo.scan({ TableName: "addresses" }).promise();
        break;
      case "PUT /clients":
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            TableName: "clients",
            Item: {
              id: requestJSON.id,
              create_date: requestJSON.create_date,
              street: requestJSON.street,
              city: requestJSON.city,
              state: requestJSON.state,
              zip: requestJSON.zip,
            }
          })
          .promise();
        body = `Put item ${requestJSON.id}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};
