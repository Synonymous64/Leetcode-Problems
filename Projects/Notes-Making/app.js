console.log('====================================');
console.log("This is App.Js Testing Purpose");
console.log('====================================');
showNotes();

//! If user add it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    if(addTxt.textLength == 0){
        alert("Empty note is invalid");
    } else {
        let addTxt = document.getElementById("addTxt");
        let addTitle = document.getElementById("addTitle");
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        let myObj = {
            title : addTitle.value, 
            text : addTxt.value,
        }
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        addTitle.value = "";
        console.log(notesObj);
        showNotes();
    }
})
//! Function to show element from local storage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += 
            `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete item</button>
                </div>
            </div>`;
    });
    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Click on add note to create your first note`
    }
}
//! Function to delete a note
function deleteNote(index){
    // index = document.getElementById("index");
    console.log("deleted note", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
//! Function for searching element
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    let inputVal1 = search.value.toUpperCase();
    console.log("input event fired", inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal) ||cardTxt.includes(inputVal1) ){
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})