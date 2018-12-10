const qs = require("querystring");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body) {
        const formValues = qs.parse(req.body);
        console.log('message received', formValues.Body);

        context.res = {
            status: 200,
            body: "Message received:  " + formValues.Body
        };
    }
    else {
        context.res = {
            status: 500,
            body: "Something bad happened :-("
        };
    }
};