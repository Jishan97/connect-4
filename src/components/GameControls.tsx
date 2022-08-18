import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { boardState, gameOverState, playerState, isNameSetState } from "state";

const GameControls: FC = () => {
  const board = useRecoilValue(boardState);
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);
  const restName = useResetRecoilState(isNameSetState);
  const isNameSet = useRecoilValue(isNameSetState);

  const handleReset = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
    restName();
  };

  return (
    <div>
      {
        (isNameSet) && (
          <Button onClick={handleReset} isDisabled={!board.some((col) => col.length)}>
            Reset
          </Button>
        )

      }
    </div>
  );
};

export default GameControls;
