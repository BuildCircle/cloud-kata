# Serverless Cloud Kata

Our client wants us to deploy some serverless infrastructure ahead of the development team who will be building a new worker next sprint. We have to implement the following architecture in either AWS or Azure. The infrastructure has to be deployed in the United Kingdom. Additionally write a small console application to publish messages to the topic.

![Screenshot from 2021-07-08 09-25-27](https://user-images.githubusercontent.com/1591497/124888961-81456d80-dfce-11eb-8ec7-149d3eb2939d.png)

For our MVP we want to deploy a serverless function that is triggered by a message being published to a topic. At this stage the function should simply log that it has been called to the relevent cloud logging solution. Finally we want to create an alert that fires from those logs being written. The function itself doesn't have to do any real work or contai any business logic, the developers will pick that up later. 

For this test you can't use the web console to deploy resources, we expect you to use the CLI or some infrastructure as code tool such as teraform. Please be sure to delete all resources once the test is completed.
