const btnsave =
document.getElementById('btnSave');
let notes = "";
Init();

function Init()
{
  let out ="";
  let noteArray =
  JSON.parse(localStorage.getItem('noteData'));

  if(noteArray != null && noteArray !=""){
    noteArray =
    JSON.parse(localStorage.getItem('noteData'));

     for(let x = 0; x < noteArray.length; x++)
     {
       out += "<option value=" +x + ">";
       out += noteArray[x].title;
       out += "</option>";

        document.getElementById('noteMaster').innerHtml = out;
     }

      document.getElementById(btnWrite).addEventListener('click', function(e){
       writeNote();
      });

      document.getElementById('noteMaster').addEventListener('click', function(e){
        displayNote(e.target.value);
      });

      readNotes();
  } else
  {
    writeNote();
  }
}
function writeNote()
{
  document.getElementById('read').style.display="block";

  document.getElementById('write').style.display="none";
}

function displayNote(note)
{
   let noteArray =
   JSON.parse(localStorage.getItem('noteData'));
   let  out = "<h2>" + noteArray[note].title +"</h2>";
   out += "<h4>Date: " + new
   Date(noteArray[note].date).toDateString() + "</h4>";
   out +="<p>" + noteArray[note].body + "</p>";
   out += "<button id='btnDelete'>Delete</button>"

   document.getElementById('noteDisplay').innerHTML = out;

   document.getElementById('btnDelete').onclick = function(){
     noteArray.splice(note,1)
     localStorage.setitem('noteData', JSON.stringify(noteArray));
     Init();
   }
}

btnsave.onclick = fuction(){
  const NoteDate = new Date();
  const noteTitle =
  document.getElementById('noteTitle').value;
  const noteBody =
  document.getElementById('noteBody').value;
  const theNote = new Note(noteDate, noteTitle, noteBody);
  saveNotes(theNote);
}
function saveNotes(note)
{
  let noteArray =
  JSON.parse(localstorage.getItem('noteData'));
  if (noteArray == null)
  {
    noteArray = new Array();
    noteArray.push(note);
  } else
  {
    noteArray.push(note);
  }
  localstorage.setItem('noteData', JSON.stringify(noteArray));
  readNotes();
  init();
}