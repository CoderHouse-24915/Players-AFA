import React, { useState, useEffect } from "react";
// REACT ROUTER DOM
import { useParams } from "react-router-dom";
// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

import "./PlayerPosition.css";

// COMPONENTS
import CardPlayer from "../../components/CardPlayer/CardPlayer";

const PlayerPositionPage = () => {
  const [playerData, setPlayerData] = useState([]);

  const { position } = useParams();

  console.log(position);

  useEffect(() => {
    const getPlayerData = async () => {
      const q = query(
        collection(db, "playersCollection"),
        where("position", "==", position)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPlayerData(docs);
    };
    getPlayerData();
  }, [position]);

  return (
    <div className="PositionContainer">
      {playerData.map((data) => {
        return (
          <div key={data.id}>
            <CardPlayer player={data} key={data.id} />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerPositionPage;
