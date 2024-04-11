import * as AWS from 'aws-sdk';

// Initialize AWS SDK
const dynamodb = new AWS.DynamoDB();
const tableName = 'MyTable';

export async function putItem(data: any): Promise<void> {
    const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
        TableName: tableName,
        Item: {
            id: { S: data.id },
            // Add other attributes as needed
        }
    };

    await dynamodb.putItem(params).promise();
}