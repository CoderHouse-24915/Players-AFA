import React, { useState, createContext } from "react";

export const PlayersContext = createContext();

const initialState = () => [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/afa-players.appspot.com/o/Midfielder%2Ffernandez.png?alt=media&token=1c506da5-e37d-4abb-ad12-2fb18ddf4c35",
    number: 10,
    player: "Lionel Messi",
    position: "GOAT",
  },
];

export const PlayersProvider = ({ children }) => {
  const [items, setItems] = useState([initialState]);

  return (
    <PlayersContext.Provider value={[items, setItems]}>
      {children}
    </PlayersContext.Provider>
  );
};
