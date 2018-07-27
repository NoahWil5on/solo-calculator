"use strict";


function doCalculate(){
    var kills = document.getElementById('kills').value;
    var place = document.getElementById('place').value;

    var myKillScore = 0;
    var myPlaceScore = 25;
    var score = 0;

    var output = document.getElementById('output');


    //sanatize input
    if(!kills || kills == "" ||
        !place || place == ""){
        output.innerHTML = "You need to actually enter a value for both kills and placement";
        return;
    }else if(kills < 0 || kills > 99){
        output.innerHTML = "How about you enter an amount of kills that's even possible";
        return;
    }else if(place > 100 || place < 1){
        output.innerHTML = "How about you enter a placement that's even possible";
        return;
    }else if(Math.floor(place) != place || Math.floor(kills) != kills){
        output.innerHTML = "We don't accept decimals here";
        return;
    }else if((Number(place) + Number(kills)) > 100){
        var myNum = Number(place) + Number(kills);
        output.innerHTML = `So what you're trying to tell us is there were at least <span class="special">${myNum}</span> people in you lobby? Nope. Try entering realistic numbers.`;
        return;
    }

    //get kill score
    myKillScore = kills * 6;

    //get place score
    if(place > 75){
        myPlaceScore = 25;
    }else if(place > 50){
        myPlaceScore = 30;
    }else if(place > 40){
        myPlaceScore = 35;
    }else if(place > 30){
        myPlaceScore = 40;
    }else if(place > 20){
        myPlaceScore = 45;
    }else if(place > 15){
        myPlaceScore = 50;
    }else if(place > 10){
        myPlaceScore = 55;
    }else if(place == 10){
        myPlaceScore = 60;
    }else if(place == 9){
        myPlaceScore = 65;
    }else if(place == 8){
        myPlaceScore = 70;
    }else if(place == 7){
        myPlaceScore = 75;
    }else if(place == 6){
        myPlaceScore = 80;
    }else if(place == 5){
        myPlaceScore = 75;
    }else if(place == 4){
        myPlaceScore = 88;
    }else if(place == 3){
        myPlaceScore = 91;
    }else if(place == 2){
        myPlaceScore = 94; 
    }else if(place == 1){
        myPlaceScore = 100;
    }

    score = myKillScore + myPlaceScore;

    if(score <= 40){
        output.innerHTML = "That's pathetic.";
        setTimeout(() => {
            output.innerHTML = `You scored <span class="special">${score}</span> points.`;
        }, 1000);
        return;
    }else if(score >= 110){
        output.innerHTML = "Hey that's not bad!";
        setTimeout(() => {
            output.innerHTML = `Congratulations! you scored <span class="special">${score}</span> points!`;
        }, 1000);
        return;
    }

    output.innerHTML = `Congratulations! you scored <span class="special">${score}</span> points!`;
}