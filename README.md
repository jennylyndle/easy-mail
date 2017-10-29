# easy-mail
--> EmailJS(https://www.emailjs.com) provides us an easy way to send emails from client side.
--> Follow the docs to connect your email services and create the desired email templates.
--> This simple npm package provides the type definitions to access the library.
--> npm install easy-mail
--> import {easyEmail} from 'directory'
--> let em = new easyEmail.email()
--> let obj = {from_name:'jen',from_email:'njfnrnj',from_msg:'jbchrbf'};
--> em.send("email service name", "template name",obj, your user id) will return a promise which can be used to add callbacks for success and failure
--> please take a look at the test file for an example.

