import { boardCols } from "const";
import { atom } from "recoil";
import { Board, Player } from "types";



export const localStorageEffect = (key: string) => ({
  setSelf,
  onSet }: {
      setSelf: Function,
      onSet: Function,
  }) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: object, _: object, isReset: boolean) => {
      isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
  });
};




export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
  effects: [
    localStorageEffect('boardState'),
  ]
});

export const playerState = atom<Player>({
  key: "playerState",
  default: 1,
  effects: [
    localStorageEffect('playerState'),
  ]
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
});

export const playerNameState = atom({
  key: "playerNameState",
  default: {1: "Player 1", 2:"Player 2"},

  
  effects: [
    localStorageEffect('playerNameState'),
  ]
  
});

export const playerColorState = atom({
  key: "playerColorState",
  default: {1: "#273c75", 2: "#353b48",},

  effects: [
    localStorageEffect('playerColorState'),
  ]
}); 

export const isNameSetState = atom<boolean>({
  key: "isNameSetState",
  default: false,
  effects: [
    localStorageEffect('isNameSetState'),
  ]
  
});
