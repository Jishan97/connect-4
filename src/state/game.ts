import { boardCols } from "const";
import { atom } from "recoil";
import { Board, Player } from "types";

export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
});

export const playerState = atom<Player>({
  key: "playerState",
  default: 1,
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
});

export const playerNameState = atom({
  key: "playerNameState",
  default: {1: "Player 1", 2:"Player 2"},
});

export const playerColorState = atom({
  key: "playerColorState",
  default: {1: "#273c75", 2: "#353b48",},
}); 

export const isNameSetState = atom<boolean>({
  key: "isNameSetState",
  default: false,
});
