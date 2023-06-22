import React, { useState, useEffect } from "react";

import CardPlayer from "../CardPlayer/CardPlayer";
import { Link } from "react-router-dom";

import "./ListPlayer.css";
import Spinner from "../Spinner/Spinner";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardList = () => {
  const [playersData, setPlayersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPlayers = async () => {
      const q = query(collection(db, "playersCollection"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setPlayersData(docs);
    };
    getPlayers();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="PlayersListContainer">
          {playersData.map((data) => {
            return (
              <Link
                to={`details/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <CardPlayer player={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardList;
