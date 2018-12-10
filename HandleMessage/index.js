const azure = require('azure-storage');
const QueueMessageEncoder = azure.QueueMessageEncoder;

module.exports = async function (context, req) {
    context.log('Notification Queue is processing a request.', req.body);

    var queueSvc = azure.createQueueService(process.env.smsqueueing_STORAGE);
    queueSvc.messageEncoder = new QueueMessageEncoder.TextBase64QueueMessageEncoder();

    queueSvc.createQueueIfNotExists(process.env.QUEUE_NAME, function (error, results, response) {
        if (!error) {
            queueSvc.createMessage(process.env.QUEUE_NAME, JSON.stringify(req.body), function (error, result, resp) {
                if (!error) {
                    context.res = {
                        status: 200,
                        body: 'notifications queued'
                    };
                }
                else {
                    context.res = {
                        status: 500,
                        body: error
                    };
                }
            });
        } else {
            context.res = {
                status: 500,
                body: error
            };
        }
    });
};