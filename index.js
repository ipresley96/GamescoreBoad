let homeScoreboard = document.getElementById('homeScoreBoard')
let awayScoreBoard = document.getElementById('awayScoreBoard')
let homeScore = 0;
let awayScore = 0;



function oneHome(){
    homeScore += 1
    homeScoreboard.textContent = homeScore
    console.log(homeScore)
}


function twoHome(){
    homeScore += 2
    homeScoreboard.textContent = homeScore
    console.log(homeScore)
}


function threeHome(){
    homeScore += 3
    homeScoreboard.textContent = homeScore
    console.log(homeScore)
}

// Away Score Functions
function oneAway(){
    awayScore += 1
   awayScoreBoard.textContent = awayScore
    console.log(awayScore)
}


function twoAway(){
    awayScore += 2
    awayScoreBoard.textContent = awayScore
    console.log(awayScore)
}


function threeAway(){
    awayScore += 3
    awayScoreBoard.textContent = awayScore
    console.log(awayScore)
}