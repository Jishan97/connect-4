import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { gameOverState, playerState, playerNameState, isNameSetState } from "state";

const GameProgress: FC = () => {
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);
  const [playerName, setPlayerName] = useRecoilState(playerNameState);
  const isPlayer = useRecoilValue(isNameSetState);
  const name = playerName[player];

  return (

    <div>
      {

        (isPlayer) && (

          <Heading as="h3" size="lg">
            {gameOver ? `${name} wins!` : `${name}'s turn`}
          </Heading>
        )
      }
    </div>
  );
};

export default GameProgress;
