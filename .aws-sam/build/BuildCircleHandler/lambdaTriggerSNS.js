var AWS = require('aws-sdk');

var sns = new AWS.SNS({ region: process.env.GB_REGION });


var params= { 
    TargetArn: process.env.TOPIC_ARN,
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