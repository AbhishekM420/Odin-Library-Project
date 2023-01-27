let myLibrary =[]; // array for books




// book creation
function book (title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    /*this.info = () =>{
        return (title + " by " + author +" " + page + " pages " + read )
    }*/

}



function addBook(title, author, page, read){
    let booke = new book(title, author, page, read );
    myLibrary.push(booke);
}


function displayBook(){
    const display = document.querySelector(".display");

    for ( let i =0; i < myLibrary.length; i++){
   
    var cards = document.createElement("div")
    cards.className =("caard");
    display.append(cards)
    const dltbtn = document.createElement("button");
    dltbtn.className = "DeleteBtn";
    dltbtn.textContent = "Delete";
    dltbtn.value = i;
    dltbtn.addEventListener("click", DeleteBook,false);
    cards.appendChild(dltbtn);
    
    //console.log(dltbtn.value);
    

    for( const [key, value] of Object.entries(myLibrary[i])){
        let para = document.createElement("p");
        para.textContent = `${key} : ${value}`;
        cards.append(para);
        console.log(`${key} : ${value}`);

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
    let Read = document.getElementById("Read").value
    let Pages = document.getElementById("Pages").value

    if( Title == "" || Author == "" || Read == "" ||Pages == "")
    return;
    else
    addBook(Title, Author, Pages, Read);
    document.getElementById("diisplay").innerHTML = "";
    document.querySelector(".bookForm").style.display = "none";
    displayBook();
    document.getElementById("addBook").reset();
}

//addBook("Huckleberry Finn", "Mark Twain", "150", "read");
//addBook("Tom Sawyer", "Mark Twain", "150", "read");

//displayBook();

function displayNewBook(){
    const display = document.querySelector(".display")
    var cards = document.createElement("div")
    cards.className =("caard");
    display.append(cards)
    const dltbtn = document.createElement("button");
    dltbtn.className = "DeleteBtn";
    dltbtn.textContent = "Delete";
    cards.appendChild(dltbtn);
   

    for( const [key, value] of Object.entries(myLibrary[myLibrary.length - 1])){
        let para = document.createElement("p");
        para.textContent = `${key} : ${value}`;
        cards.append(para);
        
        
}}
const resetbtn =document.querySelector(".reset")
resetbtn.addEventListener("click",resett =() =>{document.getElementById("addBook").reset()} )

