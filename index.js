/*
 * Name: Adam Nicewarner
 * Date: May 19, 2020
 * Section: CSE 154 AJ
 *
 * This is the JS to implement the UI
 */
"use strict";
(function() {

  window.addEventListener("load", starter);
  const text = '{ "games" : [' +
  '{ "gameName":"Battleship" , "description":"The infamous 2-player guessing game" ,"minPlayers":"2"' +
  ', "maxPlayers":"2", "link":"https://papergames.io/en/battleship/", "image":"battleship" },' +
  '{ "gameName":"Secret Hitler" , "description":"A social deduction game where you hunt facists" ,"minPlayers":"5"' +
  ', "maxPlayers":"10", "link":"https://secret-hitler.com/", "image":"secret-hitler" },' +
  '{ "gameName":"Jackbox 1: Drawful" , "description":"Hilarious drawing and deception game" ,"minPlayers":"3"' +
  ', "maxPlayers":"8", "link":"jackbox", "image":"drawful" },' +




  '{ "gameName":"Avalon" , "description":"Knight-themed Social Deduction game" ,"minPlayers":"5"' +
  ', "maxPlayers":"10", "link":"https://netgames.io/games/avalon/", "image":"avalon" } ]}'
      ;
  const gameArray = JSON.parse(text);


  /**
   * This function is the starter function for everything that I want
   * to fire when the HTML page loads
   * no parameters, no returns
   */
  function starter() {
    
    console.log(text);
    console.log(gameArray);
    for (let i = 0; i < gameArray.games.length; i++) {
      console.log(i);
      addGames(i);
    }
    let enterButton = document.getElementById("enter");
    enterButton.addEventListener("click", clickEnter);
    let homeButton = document.getElementById("home");
    homeButton.addEventListener("click", homeButton);
  }

  function addAllGames(gameArray, players){
    id("all-games").innerHTML = "";
    players = parseInt(players);
    for (let i = 0; i < gameArray.games.length; i++) {
      let min = parseInt(gameArray.games[i].minPlayers);
      let max = parseInt(gameArray.games[i].maxPlayers);
      console.log("external "+i);
      if(players >= min && players <= max){
        console.log("internal "+i);
        addGames(i);
      }
    }
  }

  function addGames(i){
    console.log(i);
    let link = document.createElement("a");
    if(gameArray.games[i].link !== "jackbox"){
      link.href = gameArray.games[i].link;
    } else {
      link.href = "https://www.jackboxgames.com/games/";
    }
    let div = document.createElement("div");
    let gameName = gameArray.games[i].gameName;
    let text = document.createElement("p");
    text.innerHTML = gameName + ":" +"<br>" + gameArray.games[i].description;
    let image = document.createElement("img");
    image.src = "images/" + gameArray.games[i].image + ".jpg";
    div.id = gameName;
    image.alt = gameName;
    image.id = "pic_" + gameName;
    image.classList.add("sprite");
    link.appendChild(div);
    div.appendChild(image);
    div.appendChild(text);
    id("all-games").appendChild(link);
  }

  function clickEnter(){
    console.log("player input value:" + id("players").value);  

    addAllGames(gameArray, id("players").value);
    

  }

  function homeButton(){

  }

  /**
   * This function adds the text of errors to the display box for them/**
   */
  function processData() {
    id("err-text").classList.remove("hidden");
    id("book-data").classList.add("hidden");
    id("home").removeEventListener("click", homeButton);

  }

  /**
   * This function runs in the starter, it gets all the books and displays them
   */
  function getAllBooks() {
    fetch("/bestreads/books", {method: "GET"})
      .then(checkStatus)
      .then(response => response.json())
      .then(createBooks)
      .catch(processData);
  }

  /**
   * This function runs when the home button is pressed, and switches to the all books view
   * @param {json} data - all the books that are in the book database
   */
  function createBooks(data) {
    for (let i = 0; i < data.books.length; i++) {
      let div = document.createElement("div");
      let bookId = data.books[i].book_id;
      let title = data.books[i].title;
      let text = document.createElement("p");
      text.innerHTML = title;
      let image = document.createElement("img");
      image.src = "covers/" + bookId + ".jpg";
      div.id = bookId;
      image.alt = bookId;
      image.id = "pic_" + bookId;
      image.classList.add("sprite");
      div.appendChild(image);
      div.appendChild(text);
      div.classList.add("selectable");
      div.addEventListener("click", bookClicked);
      id("all-books").appendChild(div);
    }
  }

  /**
   * This function runs when a book is clicked, and switches to the view for that individual book
   * it also adds all the relevant info for that book(title, author, reviews, description, etc)
   */
  function bookClicked() {
    id("all-books").classList.add("hidden");
    id("single-book").classList.remove("hidden");
    id("book-cover").src = "covers/" + this.id + ".jpg";
    fetch("/bestreads/info/" + this.id, {method: "GET"})
      .then(checkStatus)
      .then(response => response.json())
      .then(replaceInfo)
      .catch(processData);
    fetch("/bestreads/description/" + this.id, {method: "GET"})
      .then(checkStatus)
      .then(response => response.text())
      .then(replaceDesc)
      .catch(processData);
    fetch("/bestreads/reviews/" + this.id, {method: "GET"})
      .then(checkStatus)
      .then(response => response.json())
      .then(replaceReviews)
      .catch(processData);
  }

  /**
   * helper function for bookClicked, handles the info fetch request
   * @param {json} data - requested data, contains the title and author of the requested book
   */
  function replaceInfo(data) {
    id("book-title").innerHTML = data.title;
    id("book-author").innerHTML = data.author;
  }

  /**
   * helper function for bookClicked, handles the description fetch request
   * @param {json} data - requested data, contains the description of the requested book
   */
  function replaceDesc(data) {
    id("book-description").innerHTML = data;
  }

  /**
   * helper function for bookClicked, handles the review fetch request
   * @param {json} data - requested data, contains the reviews of the requested book
   */
  function replaceReviews(data) {
    id("book-reviews").innerHTML = "";
    let overallRating = 0;
    for (let i = 0; i < data.length; i++) {
      overallRating += data[i].rating;
      let name = document.createElement("h3");
      let rating = document.createElement("h4");
      let text = document.createElement("p");
      rating.innerHTML = "rating: " + data[i].rating.toFixed(1);
      name.innerHTML = data[i].name;
      text.innerHTML = data[i].text;
      id("book-reviews").appendChild(name);
      id("book-reviews").appendChild(rating);
      id("book-reviews").appendChild(text);
    }
    overallRating = overallRating / data.length;
    id("book-rating").innerHTML = overallRating.toFixed(1);
  }

  /**
   * This function is the default id function
   * @param {string} id - an id string used by html
   * @return {element} element gotten by getElementById
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
      throw Error("Error in request: " + response.statusText);
    }
  }

})();