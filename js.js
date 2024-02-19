const gameBoard = (() => {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(cells());
    }
  }

  const getBoard = () => board;

  const printBoard = () => {
    const boardWithCellvals = board.map((row) =>
      row.map((cell) => cell.getValue())
    );
    console.log(boardWithCellvals);
  };

  return {
    getBoard,
    printBoard,
  };
})();

function cells() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => {
    return value;
  };

  return { addToken, getValue };
}

function GameController(playerOne = "Player One", playerTwo = "Player Two") {
  const board = gameBoard();

  const players = [
    {
      name: playerOne,
      token: "X",
    },
    {
      name: playerTwo,
      token: "O",
    },
  ];

  // Should be fixed, so the current player is chosen by the user
  let currentPlayer = players[0];
}
