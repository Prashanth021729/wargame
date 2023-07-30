import React, { useState } from 'react';

const CardGame = () => {
  const cardImages = [
    'card2.png',
    'card3.png',
    'card4.png',
    'card5.png',
    'card6.png',
    'card7.png',
    'card8.png',
    'card9.png',
    'card10.png',
    'card11.png',
    'card12.png',
    'card13.png',
    // Add the remaining card image filenames here
  ];

  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);
  const [winner, setWinner] = useState('');
  const [card1FacingUp, setCard1FacingUp] = useState(false);
  const [card2FacingUp, setCard2FacingUp] = useState(false);

  const handlePlay = () => {
    const randomNum1 = Math.floor(Math.random() * cardImages.length);
    const randomNum2 = Math.floor(Math.random() * cardImages.length);

    setCard1FacingUp(true);
    setCard2FacingUp(true);

    if (randomNum1 > randomNum2) {
      setPoint1(point1 + 1);
    } else if (randomNum2 > randomNum1) {
      setPoint2(point2 + 1);
    }

    if (point1 + 1 === 10 || point2 + 1 === 10) {
      const winner = point1 > point2 ? 'Player 1' : 'Player 2';
      setWinner(winner);
      setPoint1(0);
      setPoint2(0);
      setCard1FacingUp(false);
      setCard2FacingUp(false);
    }
  };

  return (
    <div className="grid">
      <img src="warlogo.png" alt="war logo" className="war_logo" />

      <p className="playernames"><span>Player 1 </span>  
        <span>Player 2 </span>
      </p>
        
      <div className="images" >
        <img class="card"
          src={card1FacingUp ? cardImages[Math.floor(Math.random() * cardImages.length)] : 'back.png'}
          alt="Card 1"
        />
        <img class="card"
          src={card2FacingUp ? cardImages[Math.floor(Math.random() * cardImages.length)] : 'back.png'}
          alt="Card 2"
        />
      </div>

      <div className="labels">
        <p>
          <u>score</u><span>{point1}</span>  &nbsp;     &nbsp;  &nbsp;  &nbsp;  &nbsp;    &nbsp;     
          &nbsp;  &nbsp;  &nbsp;  &nbsp;   &nbsp;     &nbsp;  &nbsp;  &nbsp;  &nbsp;                 
          <u>score:</u><span>{point2}</span> 
        </p>
      </div>

      <button onClick={handlePlay}>Play</button>

      {winner && (
        <div className="alert">
          <p>The winner is {winner}!</p>
          <button onClick={() => setWinner('')}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CardGame;
