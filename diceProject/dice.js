var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

function getImage(num){
    if(num == 1){
        return "images/dice1.png";
    }
    else if(num==2){
        return "images/dice2.png";
    }
    else if(num==3){
        return "images/dice3.png";
    }
    else if(num==4){
        return "images/dice4.png";
    }
    else if(num==5){
        return "images/dice5.png";
    }
    else if(num==6){
        return "images/dice6.png";
    }
}



var img1 = getImage(randomNum1);
var img2 = getImage(randomNum2);

document.getElementById("img1").src = img1;
document.getElementById("img2").src = img2;


if(randomNum1 > randomNum2){
    document.getElementById("refresh").innerHTML= "Player 1 Wins";
}
else if(randomNum1 < randomNum2){
    document.getElementById("refresh").innerHTML= "Player 2 Wins";
}
else{
    document.getElementById("refresh").innerHTML= "Draw!";
}