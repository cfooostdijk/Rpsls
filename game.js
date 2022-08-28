const options = document.querySelectorAll(".options");
      let pScore = 0;
      let cScore = 0;
  
      options.forEach((option) => {
        option.addEventListener("click", function () {
          const pInput = this.value;
  
          const cOptions = ["rock", "paper", "scissors", "lizard", "spock"];
          const cInput = cOptions[Math.floor(Math.random() * 5)];
          
          updateMoves(pInput, cInput);
          compareInputs(pInput, cInput);
          updateScore();
          if(checkWinner()){
            pScore = cScore= 0;
            updateScore();
          }
        });
      });
  
      function updateMoves(pInput, cInput){
        document.getElementById("p-move").src = `./images/${pInput}.jpg`;
        document.getElementById("c-move").src = `./images/${cInput}.jpg`;
      }
  
  
      function compareInputs(pInput, cInput) {
        const currentMatch = `${pInput} vs ${cInput}`;
        if (pInput === cInput) {
          alert(`${currentMatch} is a Tie`);
          return;
        }
        //Check for Rock
        if (pInput === "Rock") {
          if (cInput === "Scissors") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else if (cInput === "Lizard" ){
              alert(`${currentMatch} = You Win`);
              pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
        //Check for Paper
        else if (pInput === "Paper") {
          if (cInput === "Rock") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else if (cInput === "Spock" ){
              alert(`${currentMatch} = You Win`);
              pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
        //Check for Scissors
        else if (cInput === "Scissors") {
          if (cInput === "Paper") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else if (cInput === "Lizard" ){
              alert(`${currentMatch} = You Win`);
              pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
        //Check for Lizard
        else if (cInput === "Lizard") {
          if (cInput === "Paper") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else if (cInput === "Spock" ){
              alert(`${currentMatch} = You Win`);
              pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
        //Check for Spock
        else {  
          if (cInput === "Scissors") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else if (cInput === "Rock" ){
              alert(`${currentMatch} = You Win`);
              pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
      }
  
      function updateScore() {
        document.getElementById("p-score").textContent = pScore;
        document.getElementById("c-score").textContent = cScore;
      }
  
      function checkWinner() {
        if (pScore === 5 || cScore === 5) {
          const winner =
            pScore === 5
              ? "You win the game! Congratulations!"
              : "Computer wins the game! Try again next time!";
          alert(winner);
          return true;
        }
        return false;
      }