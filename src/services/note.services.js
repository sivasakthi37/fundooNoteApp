import axios from 'axios'
export function createnote(data) {
    console.log("create note call",data);
    
    return axios.post('/createNote', data,{headers: {'token': localStorage.getItem('token')}}
    )
}

