import axios from 'axios'
export function createnote(data) {
    console.log("create note call", data);

    return axios.post('/createNote', data, { headers: { 'token': localStorage.getItem('token') } }
    )
}

export function getNotes() {
    return axios.get('/getnotes', {
        headers: { 'token': localStorage.getItem('token') }
    })

}

export function updateColor(data) {

    return axios.put('/updateColor', data, {
        headers: { 'token': localStorage.getItem('token') }

    })
}

export function updateArchiveStatus(data) {

    return axios.put('/isArchived', data, {
        headers: { 'token': localStorage.getItem('token') }

    })

}
export function setReminder(data) {

    return axios.put('/reminder', data, {
        headers: { 'token': localStorage.getItem('token') }

    })
}


export function isTrashed(data) {

    return axios.put('/isTrash', data, {
        headers: { 'token': localStorage.getItem('token') }

    })
}

export function deleteNote(data) {
  //  console.log("hai data", data);

    return axios.post('/deleteNote', data, {
        headers: { 'token': localStorage.getItem('token') }

    })
}

export function  updateTitle(data) {
    console.log("hai data", data);

    return axios.put('/editTitle', data, {
        headers: { 'token': localStorage.getItem('token') }

    })
}

export function  updateDescription(data) {
    //console.log("hai data", data);

    return axios.put('/editDescription', data, {
        headers: { 'token': localStorage.getItem('token') }

    })
}

export function  updatePin(data) {
    //console.log("hai data", data);

    return axios.put('/updatePin', data, {
        headers: { 'token': localStorage.getItem('token') }

    })
}






/******************************************************************* */
export function archiveArray(notesData) {
    let archiveArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (notesData[i].archive) {
            archiveArr.push(notesData[i]);
        }
    }
    return archiveArr;
}
export function remiderArray(notesData) {
    let reminderArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (notesData[i].reminder!=="" && !notesData[i].trash) {
            reminderArr.push(notesData[i]);
        }
    }
    
    return reminderArr;
}
export function otherArray(notesData) {
    let otherArr = [];
    for (let i = 0; i < notesData.length; i++) {
       // console.log("!notesData"+i+".archive",!notesData[i].archive);
        
        if (!notesData[i].pinned && !notesData[i].archive && !notesData[i].trash) {
            otherArr.push(notesData[i]);
        }
    }
    return otherArr;
}
export function trashArray(notesData) {
    let trashArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (notesData[i].trash) {
            trashArr.push(notesData[i]);
        }
    }
    return trashArr;
}

export function pinArray(notesData) {
    let pinArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (notesData[i].pinned) {
            pinArr.push(notesData[i]);
        }
    }
    return pinArr;
}