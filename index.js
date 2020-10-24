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
  let packArray = [true, true, true, true, true, true, true];


  /**
   * This function is the starter function for everything that I want
   * to fire when the HTML page loads
   * no parameters, no returns
   */
  function starter() {
    /**
     * what options do I want to add:
     * sort/filter by jackbox party pack number
     * something that shows player num/range and party pack number in the textbox
   */
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
    packArray = [id("box_1").checked,id("box_2").checked,id("box_3").checked,id("box_4").checked,id("box_5").checked,id("box_6").checked,id("box_7").checked]
    id("all-games").innerHTML = "";
    players = parseInt(players);
    console.log(players);
    for (let i = 0; i < gameArray.length; i++) {
      let min = gameArray[i].min;
      let max = gameArray[i].max;
      if(players >= min && players <= max){
        addGames(i);
      }
    }
  }

  function addGames(i){
    console.log(i);
    console.log(packArray[gameArray[i].pack]-1);
    if(packArray[gameArray[i].pack-1]){
      console.log(i);
      let link = document.createElement("a");
      let div = document.createElement("div");
      let gameName = gameArray[i].gamename;
      let text = document.createElement("p");
      text.innerHTML = gameName + ":" +"<br>" + gameArray[i].description ;
      let range = document.createElement("p");
      range.innerHTML =  "range: " + gameArray[i].min + "-" + gameArray[i].max + "p";
      range.classList.add("ranges");
      let pack_num = document.createElement("p");
      pack_num.innerHTML = "Party Pack: " + gameArray[i].pack;
      pack_num.classList.add("pack_num");
      let image = document.createElement("img");
      image.src = "images/" + gameArray[i].image + ".jpg";
      div.id = gameName;
      image.alt = gameName;
      image.id = "pic_" + gameName;
      link.appendChild(div);
      div.appendChild(image);
      text.appendChild(pack_num);
      text.appendChild(range);
      div.appendChild(text);
      id("all-games").appendChild(link);
    }
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