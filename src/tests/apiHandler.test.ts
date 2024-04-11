import { handler } from '../lambda';
import * as dynamoHelper from '../dynamodb/dynamoHelper';

describe('API Handler', () => {
    test('Should store data in DynamoDB', async () => {
        // Mock DynamoDB putItem method
        jest.spyOn(dynamoHelper, 'putItem').mockResolvedValueOnce();

        // Test input data
        const testData = { id: '123', name: 'John Doe' };

        // Call the API handler function
        const result = await handler({ body: JSON.stringify(testData) } as any);

        // Assert response
        expect(result.statusCode).toEqual(200);
        expect(JSON.parse(result.body)).toEqual({ message: 'Data stored successfully' });
    });
});
