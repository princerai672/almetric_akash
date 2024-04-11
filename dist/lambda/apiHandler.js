"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const dynamoHelper_1 = require("../dynamodb/dynamoHelper");
function handler(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Parse the request body
            if (!event.body) {
                throw new Error('Request body is empty');
            }
            const body = JSON.parse(event.body);
            // Store data in DynamoDB
            yield (0, dynamoHelper_1.putItem)(body);
            // Return success response
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Data stored successfully' })
            };
        }
        catch (error) {
            // Return error response
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Error storing data', error })
            };
        }
    });
}
exports.handler = handler;
