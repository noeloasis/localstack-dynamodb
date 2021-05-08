const AWS = require("aws-sdk")
import {
	DynamoDbSchema,
	DynamoDbTable,
	DataMapper
} from '@aws/dynamodb-data-mapper';

AWS.config.update({
	credentials: new AWS.Credentials(
		"dummy",
		"dummy"
	),
	region: "ap-northeast-1",
	endpoint: `http://${process.env.LOCALSTACK_HOSTNAME}:4566`
});

const client = new AWS.DynamoDB({apiVersion: "2012-08-10"});
const mapper = new DataMapper({ client: client });

class SurveyResultsModel {}

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

exports.handler = async (event) => {
	try {
		// DynamoDBにgetでアクセス
		const surveyResultsObj = new SurveyResultsModel();
		const result = await mapper.get(Object.assign(surveyResultsObj, { partitionKey: '001', sortKey: '1' }));

		// 正常に取得できたらその値を返す
		return {
			statusCode: 200,
			body: JSON.stringify(result),
		};
	} catch (error) {
		// エラーが発生したらエラー情報を返す
		return {
			statusCode: error.statusCode,
			body: error.message,
		};
	}
};