shownotes();
let btn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    notesObj = JSON.parse(notes);
    if(notesObj === null) notesObj= []; // This sets it to an empty array initially
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    shownotes();
});
function shownotes(){
    
    let notes = localStorage.getItem("notes");
    notesObj = JSON.parse(notes);
    if(notesObj === null) notesObj= [];
    let html="";
    notesObj.forEach(function(element,index){
        html+=` <div class="noteCard card my-2  mx-2" style="width: 18rem;">
    
        <div class="card-body ">
        <h5 class="card-title">Notes ${index+1}</h5>
          <p class="card-text"> ${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
        </div>
      </div>`
    });
    let notesElm=document.getElementById("notes");
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`nothing to show! use "add a note" section above to add note`;
 }

    }
function deleteNote (index){
    let notes = localStorage.getItem("notes");
    notesObj = JSON.parse(notes);
    if(notesObj === null) notesObj= [];
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();

}
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
   // console.log("input event fired",inputval);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerHTML;
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        //console.log(cardTxt);
    })
});