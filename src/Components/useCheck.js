import React, { useState } from "react";

export default () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1Color] = useState("blue");
  const [player2Color] = useState("red");
  const [gameOn, setGameOn] = useState(false);
  const [displayable, setDisplayable]=useState(true);
  const [currentName, setCurrentName] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [winner, setWinner] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(1);

    const createEmptyTable = () => {
        const table = [];
        for (let row = 0; row < 6; row++) {
        const rows = [];
        for (let col = 0; col < 7; col++) {
            rows.push(0);
        }
        table.push(rows);
        }
        return table;
    };

  const [table, setTable] = useState (createEmptyTable());

    const handlePlayerNames = () => {
        const name1 = prompt(
          "Player One ---> Enter your name: Your Color will be blue"
        );
        const name2 = prompt(
          "Player Two ---> Enter your name: Your Color will be red"
        );
        setPlayer1(name1);
        setPlayer2(name2);
        setCurrentName(name1);
        setCurrentColor(player1Color);
        setGameOn(true);
        setDisplayable(false);
      };
    
      const handleButtonClick = (col) => {
        if (!gameOn) return;
    
        for (let row = 5; row >= 0; row--) {
          if (!table[row][col]) {
            table[row][col] = currentPlayer;
            setTable([...table]);
    
            if (checkForWin(row, col)) {
              setGameOn(false);
              setWinner(currentPlayer);
              return;
            }
    
            setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
            setCurrentName(currentPlayer === 1 ? player2 : player1);
            setCurrentColor(currentPlayer === 1 ? player2Color : player1Color);
            return;
          }
        }
      };

      const getColor = (cell) => {
        if (cell === 1) {
          return player1Color;
        } else if (cell === 2) {
          return player2Color;
        } else {
          return "rgb(128, 128, 128)";
        }
      };

    const checkForWin = (row, col) => {
        return (
          horzWinCheck(row, col) || vertWinCheck(row, col) || diagWinCheck(row, col)
        );
      };
    
      const horzWinCheck = (row, col) => {
        for (let c = 0; c <= 3; c++) {
          if (
            table[row][c] === currentPlayer &&
            table[row][c + 1] === currentPlayer &&
            table[row][c + 2] === currentPlayer &&
            table[row][c + 3] === currentPlayer
          ) {
            return true;
          }
        }
        return false;
      };
    
      const vertWinCheck = (row, col) => {
        for (let r = 0; r <= 2; r++) {
          if (
            table[r][col] === currentPlayer &&
            table[r + 1][col] === currentPlayer &&
            table[r + 2][col] === currentPlayer &&
            table[r + 3][col] === currentPlayer
          ) {
            return true;
          }
        }
        return false;
      };
    
      const diagWinCheck = (row, col) => {
        for (let r = 0; r <= 2; r++) {
          for (let c = 0; c <= 3; c++) {
            if (
              table[r][c] === currentPlayer &&
              table[r + 1][c + 1] === currentPlayer &&
              table[r + 2][c + 2] === currentPlayer &&
              table[r + 3][c + 3] === currentPlayer
            ) {
              return true;
            }
          }
        }
        for (let r = 0; r <= 2; r++) {
          for (let c = 3; c <= 6; c++) {
            if (
              table[r][c] === currentPlayer &&
              table[r + 1][c - 1] === currentPlayer &&
              table[r + 2][c - 2] === currentPlayer &&
              table[r + 3][c - 3] === currentPlayer
            ) {
              return true;
            }
          }
        }
        return false;
      };
      
      const updateWinner = (player) => {
        setWinner(player);
      };


    return{
        checkForWin:checkForWin,
        horzWinCheck:horzWinCheck,
        vertWinCheck:vertWinCheck,
        diagWinCheck:diagWinCheck,
        handlePlayerNames:handlePlayerNames,
        handleButtonClick:handleButtonClick,
        updateWinner:updateWinner,
        getColor:getColor,
        displayable:displayable,
        table:table,
        gameOn:gameOn,
        player1:player1,
        player1Color:player1Color,
        player2:player2,
        player2Color:player2Color,
        currentName:currentName,
        currentColor:currentColor,
        winner:winner
    }
}