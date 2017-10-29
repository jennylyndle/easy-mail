"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("./email");
let em = new email_1.myEmail.email("user_nKlkPH84fcI41ygq33HkZ");
let uid = 'user_nKlkPH84fcI41ygq33HkZ';
let obj = { from_name: 'jen', from_email: 'njfnrnj', from_msg: 'jbchrbf' };
let obj2 = { "from_name": "jen", "from_email": "njfnrnj", "from_msg": "jbchrbf" };
console.log(JSON.stringify(obj));
console.log(obj2);
em.send("gmail", "contactstemplate", obj, uid).
    then((response) => { console.log(`success`); }, (err) => { console.log(err); });
;
