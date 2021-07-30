var AWS = require('aws-sdk');

var sns = new AWS.SNS({ region: "eu-west-2" });

var params= { 
    TargetArn: "arn:aws:sns:eu-west-2:952749416031:SNSBuildCircleTopic",
    Message: "Hello from SNS",
    Subject: "TestSNS"
};

// The key to the whole thing is this

sns.publish(params , function(error, data) {
    if (error) {
        console.log("ERROR: " + error.stack);
    }
    else {
        console.log("data: " + JSON.stringify(data));
    }
});