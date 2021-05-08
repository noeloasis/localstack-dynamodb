import {
	DynamoDbSchema,
	DynamoDbTable,
} from '@aws/dynamodb-data-mapper';

class SurveyResultsModel {
	// partitionKey: string;
	// sortKey: string;
}

Object.defineProperties(SurveyResultsModel.prototype, {
	[DynamoDbTable]: {
		value: 'SurveyResults'
	},
	[DynamoDbSchema]: {
		value: {
			partitionKey: {
				type: 'String',
				keyType: 'HASH'
			},
			sortKey: {
				type: 'String',
				keyType: 'RANGE'
			}
		},
	},
});
