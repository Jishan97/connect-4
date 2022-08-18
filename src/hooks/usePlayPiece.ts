import { boardRows } from "const";
import { useRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";

const testWin = (arr: number[]): boolean => /1{4}|2{4}/.test(arr.join(""));

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [player, setPlayerTurn] = useRecoilState(playerState);
  const [gameOver, setGameOver] = useRecoilState(gameOverState);

  return (col: number) => {
    // Prevent adding a piece when the game is over
    if (gameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;
    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, player] : column
    );

    function winDiagonally(down: boolean = false): number[] {
      

      let positionX = col - 3;
      let positionY = down ? row + 3 : row - 3;
      
      const result: number[] = [];

      for (let i = 0; i <= 6; i++) {

        if(positionX >=0 && positionX < 7 && positionY >=0 && positionY <6)
        result.push(newBoard[positionX][positionY]);
        positionX++;
        positionY = down ? positionY - 1 : positionY + 1;
      }
      return result;
    }
    const row = newBoard[col].length - 1;

    if (
      testWin(newBoard[col]) || // Did win vertically
      testWin(newBoard.map((col) => col[row] || 0)) || // Did win horizontally
      // TODO: Did win diagonally

      testWin(winDiagonally()) || // upwards
      testWin(winDiagonally(true)) // down
    ) {
      setGameOver(true);
    } else {
      setPlayerTurn(player === 1 ? 2 : 1);
    }

    setBoard(newBoard);
  };
};

export default usePlayPiece;
