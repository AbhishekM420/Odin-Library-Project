let myLibrary =[]; // array for books




// book creation
function book (title, author, page ){
    this.Title = title;
    this.Author = author;
    this.Pages = page;
    this.read = "Unread";
    /*this.info = () =>{
        return (title + " by " + author +" " + page + " pages " + read )
    }*/

}



function addBook(title, author, page ){
    let booke = new book(title, author, page );
    myLibrary.push(booke);
}


function displayBook(){
    const display = document.querySelector(".display");

    for ( let i =0; i < myLibrary.length; i++){
   
    var cards = document.createElement("div")
    cards.className =("caard");
    display.append(cards)
    var buttoons = document.createElement("div");
    buttoons.className = "buttoons"
    cards.appendChild(buttoons)
    const dltbtn = document.createElement("button");
    dltbtn.className = "DeleteBtn";
    dltbtn.textContent = "Delete";
    dltbtn.value = i;
    dltbtn.addEventListener("click", DeleteBook,false);
    buttoons.appendChild(dltbtn);
    const readbtn = document.createElement("button");
    readbtn.className = "read";
    readbtn.textContent = myLibrary[i].read;
    readbtn.value = i;
    buttoons.appendChild(readbtn);
    readbtn.addEventListener("click",readUnread,false);
    
    //console.log(dltbtn.value);
    

    for( const [key, value] of Object.entries(myLibrary[i])){
     if(key != "read"){
        let para = document.createElement("p");
        para.textContent = `${key} : ${value}`;
        cards.append(para);
        console.log(`${key} : ${value}`);
     }

    }}
}

function DeleteBook(){
    myLibrary.splice(this.value,1);
    document.getElementById("diisplay").innerHTML = ""; //clear the contents of the div
    console.log(this.value);
    displayBook();
}



const addNewbook = document.querySelector(".AddNew")
addNewbook.addEventListener("click", displayform)


function displayform(){
    document.querySelector(".bookForm").style.display = "";

}

const submitbtn = document.querySelector(".submit")
submitbtn.addEventListener("click", intakeData)


function intakeData(){
    let Title = document.getElementById("Title").value
    let Author = document.getElementById("Author").value
  
    let Pages = document.getElementById("Pages").value

    if( Title == "" || Author == "" || Pages == "")
    return;
    else
    addBook(Title, Author, Pages);
    document.getElementById("diisplay").innerHTML = "";
    document.querySelector(".bookForm").style.display = "none";
    displayBook();
    document.getElementById("addBook").reset();
}

const resetbtn =document.querySelector(".reset")
resetbtn.addEventListener("click",resett =() =>{document.getElementById("addBook").reset()} )

function readUnread(){      // toggles the value between read and unread with default value of unread
  if( this.textContent == "Read")
  {
    this.textContent ="Unread";
    myLibrary[this.value].read ="Unread"        
  }
  else
  {
    this.textContent = "Read";
    myLibrary[this.value].read = "Read";
  }

}