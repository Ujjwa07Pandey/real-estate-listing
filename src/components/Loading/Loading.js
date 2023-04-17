import React from "react";
import { CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CircularProgress size={50} />
      <Typography style={{ marginTop: "1rem" }} variant={"body1"}>
        Getting your things ready . . .
      </Typography>
    </div>
  );
};

export default Loading;
