// Day 7 : Objects
// Activity 1 : Object Creation and Access

// Task 1 :
let book = {
    title : "Self Esteem",
    author : "own",
    year : "2000"
}
console.log(book);

// Task 2 :
console.log(book.title);  

console.log(book['author']);

let {year} = book;
console.log(year);

// Activity 2 : Object Methods 

// Task 3 :
book.getDetails = function(){
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());
console.log(book);

// Task 4 :
book.updateYear = function(newYear){
    this.year = newYear;
}
book.updateYear(2024);
console.log(book.year);
console.log(book);

// Activity 3: Nested Loop

// Task 5 :
let library = {
  name: "central library",
  book: [
    {
      title: "some1",
      author: "A",
      year: 2020,
    },
    {
      title: "some2",
      author: "B",
      year: 2021,
    },
    {
      title: "some3",
      author: "C",
      year: 2022,
    },
  ],
};
console.log(library);

// Task 6 :
console.log("library name: " , library.name);
console.log("book title");
library.book.forEach((book)=>{
    console.log(book.title);
})

// Activity 4 : this Keyword

// Task 7 :
let newBook = {
    title : "five point someone",
    author : "chetan bhagat",
    year : 2004
}
newBook.getinfo = function(){
    return `${this.title} is launched in ${this.year}`
}
console.log(newBook.getinfo());

// Activity 5 : Object Iteration

// Task 8 :
let randomBook = {
    title : "the secret",
    author : "rhonda byrne",
    year : "2006"
}
for(let book in randomBook){
    console.log(`${book} : ${randomBook[book]}`);
}

// Task 9 :
console.log("object key :", Object.keys(randomBook));
console.log("object values :", Object.values(randomBook));

// Day 7 completed ...<3