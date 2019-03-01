import axios from 'axios';

function userLogin(data) {
    console.log("data in user services-->",data);
    
    return axios.post('/Login', data);
}

function userRegister(data) {
    console.log("data in user services-->",data);
    
    return axios.post('/Register', data);
}

function verfyemail(data){


return axios.post('/forgetpassword',data);

}

function resetpassword(data,token){

    return axios.post(`/reset/${token}`,data,{headers:{'token':token }})
}



export {

    userLogin,
    userRegister,
    verfyemail,
    resetpassword
}