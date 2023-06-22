import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import "./PlayerDetail.css";
import CardPlayer from "../../components/CardPlayer/CardPlayer";
import Spinner from "../../components/Spinner/Spinner";

const PlayerDetail = () => {
  const [playerData, setPlayerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  // console.log(id);

  useEffect(() => {
    const getPlayerData = async () => {
      const q = query(
        collection(db, "playersCollection"),
        where(documentId(), "==", id)
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
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [id]);

  return (
    <div className="DetailContainer">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        playerData.map((data) => {
          return <CardPlayer player={data} />;
        })
      )}
    </div>
  );
};

export default PlayerDetail;
