/**
 * notetaker.js implements the functionality of the note taker application:
 * - Tracks an array with the current notes
 * - Displays the notes on the web page
 * - Adds notes entered by the user
 * - Removes notes selected by the user 
 */

let arrayOfNotes = ["Justin", "Savannah", "Emily"];

document.getElementById("add").addEventListener("click", addNote);
document.getElementById("delete").addEventListener("click", deleteNote);

function updatePageContent() {
    if (arrayOfNotes.length == 0) {
        document.getElementById("display-notes").classList.remove('display-notes');
        document.getElementById("delete-note").classList.remove('delete-note');
    } else {
        document.getElementById("display-notes").classList.add('display-notes');
        document.getElementById("delete-note").classList.add('delete-note');

        let noteList = document.getElementById('notelist');
        let noteSelection = document.getElementById('noteselection');
        noteList.innerHTML = "";
        noteSelection.innerHTML = "";
        for (let index = 0; index < arrayOfNotes.length; index++) {
            noteList.innerHTML += "<li>" + arrayOfNotes[index] + "</li>";
            noteSelection.innerHTML += "<option value=" + index + ">" + arrayOfNotes[index] + "</option>";
        }
    }
}

function addNote() {
    arrayOfNotes.push(document.getElementById("newnote").value);
    document.getElementById("newnote").value = "";
    updatePageContent();
}

function deleteNote() {
    arrayOfNotes.splice(document.getElementById("noteselection").value, 1);
    updatePageContent();
}