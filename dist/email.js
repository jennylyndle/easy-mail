"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
var myEmail;
(function (myEmail) {
    class email {
        constructor(user_id, server, secure) {
            this.user_id = user_id;
            this.version = "NPM.1.5";
            this.secure = true;
            this.server = "api.emailjs.com";
            this.server = this.server || server;
            this.secure = this.secure || secure;
        }
        send(service_id, template_id, template_params, user_id) {
            var protocol = this.secure ? "https:" : "http:";
            var url = [protocol, '', this.server, "api/v1.0/email/send"].join('/');
            return new Promise((resolve, reject) => {
                var send_params = {
                    lib_version: this.version,
                    user_id: user_id || this.user_id,
                    service_id: service_id,
                    template_id: template_id,
                    template_params: template_params
                };
                request.post({ method: 'POST',
                    uri: url,
                    json: true,
                    headers: {
                        'Content-type': 'application/json;charset=UTF-8'
                    },
                    body: send_params
                }, (error, response, body) => {
                    if (response.statusCode == 200 || (typeof (response.statusCode) == 'undefined' && body == 'OK')) {
                        resolve({ status: response.statusCode, text: body });
                    }
                    else {
                        reject({ status: response.statusCode, text: body });
                    }
                });
            }); // promise
        }
    }
    myEmail.email = email;
})(myEmail = exports.myEmail || (exports.myEmail = {}));
