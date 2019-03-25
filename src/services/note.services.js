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
export function  setReminder(data){

    return axios.put('/reminder', data, {
        headers: { 'token': localStorage.getItem('token') }

    })
}


export function  isTrashed(data){

    return axios.put('/isTrash', data, {
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

export function otherArray(notesData) {
    let otherArr = [];
    for (let i = 0; i < notesData.length; i++) {
        if (!notesData[i].pinned && !notesData[i].archive && !notesData[i].trash) {
            otherArr.push(notesData[i]);
        }
    }
    return otherArr;
}
