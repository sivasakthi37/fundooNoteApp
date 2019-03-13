import axios from 'axios'
export function createnote(data) {
    console.log("create note call",data);
    
    return axios('/createNote',{ method: "POST", 
 headers: {'token': localStorage.getItem('token')},
        data:data
    })
}

