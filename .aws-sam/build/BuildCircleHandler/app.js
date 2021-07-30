let response;

exports.buildCircleHandler = async (event, context) => {
    let message = event.Records[0].Sns.Message
    console.log(event)
    console.log(message)
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: message,
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
