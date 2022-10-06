let homeScore = document.getElementById("home-score")
let hS=0
let guestScore = document.getElementById("guest-score")
let gS=0
let leadPara = document.getElementById("leading-team")

function hadd1Point(){
    hS += 1
    homeScore.textContent = hS;
    lead()
}

function hadd2Point(){
    hS += 2
    homeScore.textContent = hS;
    lead()
}

function hadd3Point(){
    hS += 3
    homeScore.textContent = hS;
    lead()
}

function gadd1Point(){
    gS += 1
    guestScore.textContent = gS;
    lead()
}

function gadd2Point(){
    gS += 2
    guestScore.textContent = gS;
    lead()
}

function gadd3Point(){
    gS += 3    
    guestScore.textContent = gS;
    lead()
}

function lead(){
    if(hS < gS){
        leadPara.textContent = "Guest Team Leads!"
    }
    else{
        leadPara.textContent = "Home Team Leads!"
    }
}