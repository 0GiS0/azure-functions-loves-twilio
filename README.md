# Azure functions loves Twilio

These serverless APIs sends and receives SMS using Twilio and Azure Functions. It is based on three functions:
* HandleMessage, which receives the message that you want to send.
* SendSMS, which sends the message to Twilio.
* SMSReceived, the SMS sent by the user to a specific Twilio mobile number is received.

## Quick Deploy to Azure

[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2F0GiS0%2Fazure-functions-loves-twilio%2Fmaster%2Fazure.deploy.json)

## More Information

I wrote a post explaining the whole process on my blog [return(GiS);](https://www.returngis.net/2018/12/enviar-y-recibir-sms-con-twilio-desde-azure-functions/)
