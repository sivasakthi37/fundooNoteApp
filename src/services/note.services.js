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
        
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function updateTitle(url,data) {
        
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function updateDescription(url,data) {
        
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}



export function updatePin(url,data) {
    
    return axios(url, {
        method: "PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function setReminder(url,data){
    return axios(url,{
        method:"PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function isTrashed(url,data){
    return axios(url,{
        method:"PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function updateArchiveStatus(url,data){
    return axios(url,{
        method:"PUT",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}

export function deleteNoteForever(url,data) {
    return axios(url, {
        method: "POST",
        headers: {
            "access-token": localStorage.getItem("token")
        },
        data:data
    })
}



export function otherArray(notesData){
    let otherArr = [];
    for (let i = 0; i < notesData; i++) {
        if (!notesData[i].note.pinned && !notesData[i].note.archive && !notesData[i].note.trash) {
            otherArr.push(notesData[i]);
        }
    }
    return otherArr;
}