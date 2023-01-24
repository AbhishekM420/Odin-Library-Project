let myLibrary =[]; // array for books




// book creation
function book (title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
   /* this.info = () =>{
        return (title + " by " + author +" " + page + " pages " + read )
    }*/

}



function addBook(title, author, page, read){
    let booke = new book(title, author, page, read );
    myLibrary.push(booke);
}

 //let boook = new book("Huckleberry Finn", "Mark Twain", "150", "read");
//console.log(huckFinn.info());




//cards.textContent = "hello world";
function displayBook(){
    const display = document.querySelector(".display");

    for ( let i =0; i < myLibrary.length; i++){
   
    var cards = document.createElement("div")
    cards.className =("caard");
    display.append(cards)

    for( const [key, value] of Object.entries(myLibrary[i])){
        let para = document.createElement("p");
        para.textContent = `${key} : ${value}`;
        cards.append(para);
        console.log(`${key} : ${value}`);

    }

}
}















   /* const display = document.querySelector(".display");

        for ( let i = 0; i < myLibrary.length; i++ ){
            const cards = document.createElement("div");
                cards.className = "cards"
                display.appendChild(cards);
                myLibrary.forEach(myfun);
                    
                } }
                
        
        
         
       
       function myfun(item, index){
            for(var key in item){
                const card = document.querySelector(".cards")
               // const details = document.createElement("para");
               // details.className ="details";
               // card.appendChild(details);
                card.textContent = "" +`${key} : ${item[key]}` ;
                //console.log(`${key} : ${item[key]}`);
                console.log(item, index);
                
            }
        }*/

       /* const display = document.querySelector(".display");
     const cards = document.createElement("div");
     cards.className = "cards"
     display.appendChild(cards);
     //cards.textContent = "hi";
     /*for( let key in myLibrary){
        const details = document.createElement("para");
        details.className ="details";
        console.log( `${key} : ${myLibrary[key]} `);
       // details.textContent = "hello";
        cards.appendChild(details);*/
      
    

    /*myLibrary.forEach[myLibrary => {
        console.log("f");

     const display = document.querySelector(".display");
     const cards = document.createElement("div");
     cards.className = "cards"
     display.appendChild(cards);

     for( let key in myLibrary){
        //const details = document.createElement("para");
        //details.className ="details";
        console.log("f");
        //details.textContent = ( ${key} : ${myLibrary[key]});
        //cards.appendChild(details);
     }

}]*/

addBook("Huckleberry Finn", "Mark Twain", "150", "read");
addBook("Tom Sawyer", "Mark Twain", "150", "read");
addBook("Treasure Island","R L Stevenson","250","unread");
displayBook();
//console.log(myLibrary);