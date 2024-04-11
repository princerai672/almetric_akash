import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { putItem } from '../dynamodb/dynamoHelper';

export async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
        // Parse the request body
        if (!event.body) {
            throw new Error('Request body is empty');
        }
        const body = JSON.parse(event.body);

        // Store data in DynamoDB
        await putItem(body);

        // Return success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data stored successfully' })
        };
    } catch (error) {
        // Return error response
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error storing data', error })
        };
    }
}
