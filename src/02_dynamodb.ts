

exports.handler = async (event) => {
	try {
		return {
			statusCode: 200,
			body: "hello world"
		};
	} catch (error) {
		// エラーが発生したらエラー情報を返す
		return {
			statusCode: error.statusCode,
			body: error.message,
		};
	}
};