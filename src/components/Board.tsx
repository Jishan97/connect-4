import { Circle, Container, Flex } from "@chakra-ui/react";
import { boardRows } from "const";
import { usePlayPiece } from "hooks";
import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardState, gameOverState, playerState, isNameSetState, playerColorState } from "state";
import { Player } from "types";
import PlayerProfile from "./PlayerProfile";

const padCol = (col: number[]): number[] =>
  col.join("").padEnd(boardRows, "0").split("").map(Number);

const Board: FC = () => {
  const play = usePlayPiece();
  const isSetState = useRecoilValue(isNameSetState);
  const board = useRecoilValue(boardState);
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);

  const [playerColor, setPlayerColor] = useRecoilState(playerColorState); 

  return (

    <Container>
      {
        !isSetState && (<PlayerProfile />)
      }

      <Flex justify="center">
        {isSetState && board.map((col, i) => (
          <Flex
            key={i}
            role="group"
            onClick={() => play(i)}
            flexDirection="column-reverse"
            cursor={gameOver ? "auto" : "pointer"}
          >
            {padCol(col).map((p, j) => (
              <Circle
                m={1}
                size="40px"
                key={`${i}-${j}`}
                boxShadow="inner"
                bg={playerColor[p as Player] || "gray.300"}
              />
            ))}
            <Circle
              m={1}
              size="40px"
              boxShadow="base"
              visibility="hidden"
              bg={playerColor[player]}
              _groupHover={{
                visibility: gameOver ? "hidden" : "visible",
              }}
            />
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default Board;
