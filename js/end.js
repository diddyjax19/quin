 const username = document.querySelector('#username');
 const saveScorebtn = document.querySelector('#saveScoreBtn');

 //  get locally stored high score or return an empty array
 //  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

 const generalHighScores = JSON.parse(localStorage.getItem("generalHighScores")) || [];
 const sportsHighScore = JSON.parse(localStorage.getItem("sportsHighScore")) || [];
 const historyHighScore = JSON.parse(localStorage.getItem("historyHighScore")) || [];
 //  console.log(highScores)
 const MAX_HIGH_SCORES = 5;

 const finalScore = document.querySelector('#finalScore');
 const mostRecentScore = localStorage.getItem('mostRecentScore');
 finalScore.innerText = mostRecentScore;

 //Keypress that activates when some text is entered in the text box
 username.addEventListener('keyup', () => {
     //sets the button to disabled and enables it if some value is in the text box
     saveScorebtn.disabled = !username.value;
 })
 saveHighScore = e => {
     e.preventDefault();
     const score = {
         // score: mostRecentScore,
        //  score: Math.floor(Math.random() * 100),
        score: mostRecentScore,
         name: username.value
     }

     const category = localStorage.getItem('Category');
     console.log(category);


     //push and sort highScores
     if (category == "General Knowledge") {
         generalHighScores.push(score);

         generalHighScores.sort((a, b) => {
             b.score - a.score;
         });


         generalHighScores.splice(5);
         localStorage.setItem("generalHighScores", JSON.stringify(generalHighScores));
     } else if (category == "History") {
         historyHighScore.push(score);

         historyHighScore.sort((a, b) => {
             b.score - a.score;
         });

         historyHighScore.splice(5);
         localStorage.setItem("historyHighScore", JSON.stringify(historyHighScore));
     } else if (category == "Sports") {
         sportsHighScore.push(score);

         sportsHighScore.sort((a, b) => {
             b.score - a.score;
         });

         sportsHighScore.splice(5);
         localStorage.setItem("sportsHighScore", JSON.stringify(sportsHighScore));
     }




     window.location.assign("highScores.html");
     //  window.location.assign('/')


 }