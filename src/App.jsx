import Button from "./Components/Button";
import useCheck from "./Components/useCheck";

const App = () => {
  const {
    table,
    handleButtonClick,
    handlePlayerNames,
    currentName,
    gameOn,
    winner,
    player1Color,
    player1,
    player2,
    player2Color,
    displayable,
    currentColor,
    getColor,
    updateWinner,
  } = useCheck();

  return (
    <div className="page-container">
      <div className="header">
        <h1>Welcome to Connect Four!</h1>
        <p className="p1">
          The objective of this game is to connect four of your chips in a row!
        </p>
        <p>Let's get started!</p>
        {displayable && (
          <button
            className="names-button"
            onClick={handlePlayerNames}
            disabled={gameOn}
          >
            Enter Player Names
          </button>
        )}
        <p className="text">
          {gameOn ? `${currentName}'s (${currentColor}) turn!` : ""}
        </p>
      </div>
      {winner !== "" ? (
        <marquee>
          <p className={winner === 1 ? "blue-text" : "red-text"}>
            {winner === 1
              ? `${player1} (Blue) has won!`
              : `${player2} (Red) has won!`}
          </p>
        </marquee>
      ) : null}
      <table align="center" className="board">
        {table.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                <Button
                  onClick={() => handleButtonClick(colIndex)}
                  color={getColor(cell)}
                  updateWinner={updateWinner}
                />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
