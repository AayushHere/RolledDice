var score,dice,activeplayer,roundscore, gameplaying;
init();
var lastdice;
dice= Math.floor(Math.random()* 6)+1;
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function()
{

    
    if(gameplaying)
    {
        var dice;
        dice= Math.floor(Math.random()* 6)+1
      
        var diceDOM=  document.querySelector('.dice')
        diceDOM.style.display= 'block';
        diceDOM.src= 'images/dice-' + dice + '.png';  // great technique

    // we can write in both way the 1st way is above three line and the another technique is below two line, the output is same in both the cases
    
        // document.querySelector('.dice').style.display = 'block';
        // document.querySelector('.dice').src = 'dice-' + dice + '.png';

           

        if(dice === 6 && lastdice === 6)
        {
            score[activeplayer]=0;
            document.querySelector('#score-'+ activeplayer).textContent= '0';
            nextplayer();
        }
    
        if(dice!==1)
       {
      roundscore+=dice;
      document.querySelector('#current-' + activeplayer).textContent=roundscore;

       }
       else{
            nextplayer();


       }
    }
    lastdice=dice;
});

document.querySelector('.btn-hold').addEventListener('click',function()
{
    if(gameplaying)
    {
        score[activeplayer] += roundscore;
        document.querySelector('#score-'+ activeplayer).textContent= score[activeplayer];

        var input = document.querySelector('.final-score').value;
        var winningscore;
        if(input)
        {
            winningscore=input;

        }
        else{
            winningscore=100;
        }
        
        if(score[activeplayer]>=winningscore)
        {
            document.querySelector('#name-' + activeplayer ).textContent = 'Winner!!!';
            document.querySelector('.dice').style.display= 'none';
        
            document.querySelector('.player-'+ activeplayer + '-panel').classList.add('winner');  // in this we add a class winner which is not their, it is defined in css so that's why we add 
            document.querySelector('.player-'+ activeplayer + '-panel').classList.remove('active');  // this class is their in html so we remove this class
            gameplaying=false;
        
        }
        else{
            nextplayer();
        }
    }
});

function nextplayer()
{
   
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        roundscore = 0;
        document.getElementById('current-0').textContent= '0';
        document.getElementById('current-1').textContent= '0';
        /*
        if(activeplayer===0)
        {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        }
        else{
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }*/

        // we change the player in both way , 1st by using if else and another technique is by using toggle method in class list the below two line perform the same functionality as by if else above which is in comment

             
        document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');

         document.querySelector('.dice').style.display= 'none';  // this line help when the value of dice is 1 then the dice will not show and will disapear 


}
document.querySelector('.btn-new').addEventListener('click',init)
function init()
{
 score = [0,0];
 dice;
 activeplayer = 0;
 roundscore = 0;
 gameplaying=true;
 document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent='player 1';
document.getElementById('name-1').textContent='player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

