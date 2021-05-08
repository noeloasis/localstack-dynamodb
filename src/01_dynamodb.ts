const AWS = require("aws-sdk")

AWS.config.update({
	credentials: new AWS.Credentials(
		"dummy",
		"dummy"
	),
	region: "ap-northeast-1",
	endpoint: `http://${process.env.LOCALSTACK_HOSTNAME}:4566`
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
	const params = {
		TableName: 'SurveyResults',
	};

	try {
		// DynamoDBにscanでアクセス
		const result = await dynamodb.scan(params).promise();
		
		// 正常に取得できたらその値を返す
		return {
			statusCode: 200,
			body: JSON.stringify(result.Items),
		};
	} catch (error) {
		// エラーが発生したらエラー情報を返す
		return {
			statusCode: error.statusCode,
			body: error.message,
		};
	}
};