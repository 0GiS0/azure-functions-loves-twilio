# Azure functions loves Twilio

These serverless APIs sends and receives SMS using Twilio and Azure Functions. It is based on three functions:
* HandleMessage, which receives the message that you want to send.
* SendSMS, which sends the message to Twilio.
* SMSReceived, the SMS sent by the user to a specific Twilio mobile number is received.

## Quick Deploy to Azure

[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://azuredeploy.net/)

#More Information

I wrote a post explaining the whole process [!here](https://www.returngis.net/2018/12/enviar-y-recibir-sms-con-twilio-desde-azure-functions/)