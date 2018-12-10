var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
module.exports = async function (context, myQueueItem) {

    context.log('JavaScript queue trigger function processed work item: ', myQueueItem);

    context.log('myQueueItem.message: ' + myQueueItem.message);
    context.log('Sending to: ' + myQueueItem.phoneNumber);

    client.messages
        .create({
            body: myQueueItem.message,
            to: myQueueItem.phoneNumber,  
            from: process.env.TWILIO_PHONE
        })
        .then((message) => console.log(message))
        .done();
};