import React, { useState } from "react";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import "./Shop.css";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

import TextField from "@mui/material/TextField";

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const ShopPage = () => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const docRef = await addDoc(collection(db, "playersCollection"), {
      player: "Lionel Messi",
      number: 10,
      position: "forward",
      img: "https://firebasestorage.googleapis.com/v0/b/afa-players.appspot.com/o/Forward%2Fmessi.png?alt=media&token=c2fc8b97-2238-418a-8aaf-525a1f0a9abd",
    });
    console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1 style={{ color: "white" }}>Shop</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          value={values.name}
          name="name"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          value={values.lastName}
          name="lastName"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400 }}
          value={values.city}
          name="city"
          onChange={handleOnChange}
        />
        <button className="btnASendAction">Send</button>
      </form>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default ShopPage;
