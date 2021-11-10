var games = [];

window.onload = function(){
    console.log("Getting storage...")
    games = localStorage.getItem("games");
    console.log(games);
}

function addGame(game){
    games.push(game);
    localStorage.setItem("games", games);
}

function showGames(){
    console.log(games[0].place + ": " + games[0].people[0] + ", " + games[0].people[1]);
}