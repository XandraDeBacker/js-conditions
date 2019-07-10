    let play = document.getElementById("play");
    play.addEventListener("click", playGame);
    let players = document.getElementById("players");
    players.addEventListener("change", changeGame);
    let p1choice = document.getElementById("p1choice");
    let p2choice = document.getElementById("p2choice");
    let choices = ["rock", "paper", "scissors"];
    for (choice of choices) {
        let element = document.createElement("option");
        element.value = choice;
        element.innerHTML = choice;
        p1choice.append(element);
    }
    for (choice of choices) {
        let element = document.createElement("option");
        element.value = choice;
        element.innerHTML = choice;
        p2choice.append(element);
    }
    function playGame(event){
        let p1value = p1choice.value;
        let p2value;
        let outcome;

        if (p2choice.disabled === false) {
            p2value = p2choice.value;
        }
        else {
            p2value = choices[Math.floor(Math.random()*choices.length)];
        }

        if (p1value === "rock"){
          if (p2value === "rock"){
            outcome = "Tie";
            document.getElementById("result").innerHTML = outcome;
            console.log(outcome);

          }else if (p2value === "paper"){
            outcome = "Player 2 wins";
            document.getElementById("result").innerHTML = outcome;
            console.log(outcome);
        }else{
            outcome = "Player 1 wins";
            document.getElementById("result").innerHTML = outcome;
            console.log(outcome);
        }
      }else if (p1value === "paper"){
        if (p2value === "rock"){
            outcome = "Player 1 wins";
            document.getElementById("result").innerHTML = outcome;
            console.log(outcome);

        }else if (p2value === "scissors"){
          outcome = "Player 2 wins";
          document.getElementById("result").innerHTML = outcome;
          console.log(outcome);

        }else {
            outcome = "Tie";
            document.getElementById("result").innerHTML = outcome;
            console.log(outcome);
        }
      }else if (p1value === "scissors"){
        if (p2value === "rock"){
          outcome = "Player 2 wins";
          document.getElementById("result").innerHTML = outcome;
          console.log(outcome);

        }else if (p2value === "paper"){
          outcome = "Player 1 wins";
          document.getElementById("result").innerHTML = outcome;
          console.log(outcome);

        }else {
          outcome = "Tie";
          document.getElementById("result").innerHTML = outcome;
          console.log(outcome);
        }
      }
    }













    function changeGame(event){
        if (players.value === "1") {
            p2choice.disabled = true;
        }

        else {
            p2choice.disabled = false;
        }
    }
