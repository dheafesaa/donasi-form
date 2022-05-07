import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const Quotes = () => {
  const [qod, setQod] = useState([]);

  const getQod = () => {
    axios.get("https://quotes.rest/qod").then((response) => {
      console.log(response);
      const myQod = response.data;
      setQod(myQod);
      console.log("QOD", myQod);
    });
  };

  useEffect(() => getQod(), []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" style={{ marginBottom: 20 }}>
        Quotes of the day:
      </Typography>
      {qod?.contents?.quotes.map((index, qods) => (
        <Typography
          key={index}
          style={{
            maxWidth: 350,
            textAlign: "center",
            color: "#0061A7",
          }}
        >
          "{qods.quote}"
        </Typography>
      ))}
    </div>
  );
};

export default Quotes;
