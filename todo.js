let notesList = JSON.parse(localStorage.getItem("braindump")) || [];

function saveNewNote() {
    let title = document.getElementById('headingNote').value
    let content = document.getElementById('contentNote').value
    let note = { title, content }
    // console.log(note)
    notesList.push(note);
    localStorage.setItem("braindump", JSON.stringify(notesList))
    // console.log(notesList)
    loadNotes();
}

function loadNotes() {
    document.getElementById("notes").innerHTML=""
    let noteList = JSON.parse(localStorage.getItem("braindump")) || []
    notesList.forEach(every=>{
        let hr = document.createElement("hr");
        let noteDiv = document.createElement("div")
        noteDiv.classList.add("note")
        let titleDiv = document.createElement("div")
        titleDiv.classList.add("title")
        titleDiv.innerText = every.title;
        let contentDiv = document.createElement("div")
        contentDiv.classList.add("description")
        contentDiv.innerText = every.content;
        noteDiv.appendChild(titleDiv)
        noteDiv.appendChild(hr)
        noteDiv.appendChild(contentDiv)
        document.getElementById("notes").appendChild(noteDiv);})
    }
loadNotes();
    // let NOTE=JSON.parse(localStorage.getItem("braindump"))

// let noteDiv=document.createElement("div")
// noteDiv.classList.add("note")
// let titleDiv=document.createElement("div")
// titleDiv.classList.add("title")
// titleDiv.innerText=NOTE.title;
// let contentDiv=document.createElement("div")
// contentDiv.classList.add("description")
// contentDiv.innerText=NOTE.content;
// noteDiv.appendChild(titleDiv)
// noteDiv.appendChild(contentDiv)

// document.getElementById("notes").appendChild(noteDiv);
function clearPOPUP(){
    document.getElementById("contentNote").value=""
    document.getElementById("headingNote").value=""
}