import axios from 'axios'
export function createnote(data) {
    console.log("create note call",data);
    
    return axios.post('/createNote', data,{headers: {'token': localStorage.getItem('token')}}
    )
}

export function getNotes() {
    return axios.get('/getnotes', { headers: {  'token': localStorage.getItem('token')}
    })
   
}   

export function updateColor(url,data) {
        
    return axios(url,{ method: "PUT",headers: { "access-token": localStorage.getItem("token")},
        data:data
    })
}

