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
  let gameArray = TEXT;
  console.log(TEXT);


  /**
   * This function is the starter function for everything that I want
   * to fire when the HTML page loads
   * no parameters, no returns
   */
  function starter() {

    //reader.onload = function(){
      //var dataURL = reader.result;
      //var output = document.getElementById('output');
      //output.src = dataURL;
    //};
    //reader.readAsDataURL(input.files[0]);


    id("all-games").innerHTML = "";
    for (let i = 0; i < gameArray.length; i++) {
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
    console.log(players);
    for (let i = 0; i < gameArray.length; i++) {
      let min = gameArray[i].min;
      let max = gameArray[i].max;
      console.log(id("inc_jackbox").checked);
      let jackbox = gameArray[i].genre == "JACKBOX";
      console.log("min: " + min + "max: " + max);
      console.log("external "+i);
      if(players >= min && players <= max && !id("inc_jackbox").checked){
        console.log("internal "+i);
        addGames(i);
      } else if(players >= min && players <= max && id("inc_jackbox").checked) {
        if(jackbox){
          console.log("internal "+i);
          addGames(i);
        }
      }
    }
  }

  function addGames(i){
    console.log(i);
    let link = document.createElement("a");
    if(gameArray[i].link !== "jackbox"){
      link.href = gameArray[i].link;
    } else {
      link.href = "https://www.jackboxgames.com/games/";
    }
    let div = document.createElement("div");
    let gameName = gameArray[i].gamename;
    let text = document.createElement("p");
    text.innerHTML = gameName + ":" +"<br>" + gameArray[i].description;
    let image = document.createElement("img");
    image.src = "images/" + gameArray[i].image + ".jpg";
    div.id = gameName;
    image.alt = gameName;
    image.id = "pic_" + gameName;
    link.appendChild(div);
    div.appendChild(image);
    div.appendChild(text);
    id("all-games").appendChild(link);
  }

  function clickEnter(){
    console.log("player input value:" + id("players").value);  
    addAllGames(gameArray, id("players").value);
    

  }

  /**
   * This function is the default id function
   * @param {string} id - an id string used by html
   * @return {element} element gotten by getElementById
   */
  function id(id) {
    return document.getElementById(id);
  }


})();