let players = [];

function addScore(){

    let name = document.getElementById("name").value;
    let score = document.getElementById("score").value;

    if(name === "" || score === ""){
        alert("Enter Name and Score");
        return;
    }

    players.push({
        name:name,
        score:Number(score)
    });

    players.sort((a,b)=>b.score-a.score);

    displayLeaderboard();

    document.getElementById("name").value="";
    document.getElementById("score").value="";
}

function displayLeaderboard(){

    let board = document.getElementById("leaderboard");
    board.innerHTML="";

    players.forEach((player,index)=>{

        let li = document.createElement("li");

        if(index===0) li.classList.add("gold");
        if(index===1) li.classList.add("silver");
        if(index===2) li.classList.add("bronze");

        li.innerHTML = `
            <span>${index+1}. ${player.name}</span>
            <span>${player.score}</span>
        `;

        board.appendChild(li);
    });

}
