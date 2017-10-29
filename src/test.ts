import {easyEmail} from './email';

let em = new easyEmail.email("user_nKlkPH84fcI41ygq33HkZ");
let uid = 'your user id';
let obj = {from_name:'name',from_email:'email_id_to_return',from_msg:'message'};
em.send("gmail", "contactstemplate",obj, uid).
then((response)=>{console.log(`success`);},(err)=>{console.log(err);});;