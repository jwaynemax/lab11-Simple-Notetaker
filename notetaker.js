/**
 * notetaker.js implements the functionality of the note taker application:
 * - Tracks an array with the current notes
 * - Displays the notes on the web page
 * - Adds notes entered by the user
 * - Removes notes selected by the user 
 */

let arrayOfNotes = [];

updatePageContent();

document.getElementById("add").addEventListener("click", addNote);
document.getElementById("delete").addEventListener("click", deleteNote);

function updatePageContent() {
    if (arrayOfNotes.length == 0) {
        document.getElementById("display-notes").classList.add('display-none');
        document.getElementById("delete-note").classList.add('display-none');
        document.getElementById("validation").classList.add('display-none');
    } else {
        document.getElementById("display-notes").classList.remove('display-none');
        document.getElementById("delete-note").classList.remove('display-none');

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
    if (document.getElementById("newnote").value == "") {
        validation();
    } else {
        document.getElementById("validation").classList.add('display-none');
        arrayOfNotes.push(document.getElementById("newnote").value);
        document.getElementById("newnote").value = "";
        updatePageContent();
    }
}

function deleteNote() {
    document.getElementById("validation").classList.add('display-none')
    let removeIndex = document.getElementById("noteselection").value;
    arrayOfNotes.splice(removeIndex, 1);
    updatePageContent();
}

function validation() {
    document.getElementById("validation").classList.remove('display-none');
}