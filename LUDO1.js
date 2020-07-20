      ludogame = () => {
      const play1 = Math.floor(Math.random() * 6) +1;
      const play1dice = "C:/Users/AJEET/Desktop/images/dice"+play1+".png";
      document.getElementById('box1').setAttribute('src',play1dice);

      const play2 = Math.floor(Math.random() * 6) +1;
      const play2dice = "C:/Users/AJEET/Desktop/images/dice"+play2+".png";
      document.getElementById('box2').setAttribute('src',play2dice);

      if(play1>play2){
         document.querySelector('h1').innerHTML="Player 1 won :)";
        }
      else if (play1<play2){
        document.querySelector('h1').innerHTML="Player 2 won :)";
        }
      else{
        document.querySelector('h1').innerHTML="DRAW";
        }
      }
 
