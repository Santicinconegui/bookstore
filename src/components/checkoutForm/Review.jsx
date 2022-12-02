import React from "react";
import { List, Typography } from "@mui/material";
// import { getCartTotal } from "../../redux/reducers/handleCart";
import { useDispatch, useSelector } from "react-redux";

const Review = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);
  console.log(state);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Orden Summary
      </Typography>
      <List disablePadding></List>
    </>
  );
};

export default Review;
