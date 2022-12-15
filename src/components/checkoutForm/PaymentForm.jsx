import React from "react";
import Review from "./Review";
import { Button, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CARD_ELEMENT_OPTION } from "./CardOptions";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51M8t5ZGNOAckjmF1In9ulCfFRDuU481l98IezhsvbOtW5Jb5nFR2qyQCha4O30BSV9N0TJ88ToK3zw2y9CupejvU00AaFFOFJ1"
);

const CheckoutForm = ({ backStep, nextStep }) => {
  const cart = useSelector((state) => state);
  const total = cart.reduce(
    (acc, book) => (acc += Number(parseInt(book.price.slice(1))) * book.qty),
    0
  );
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    // console.log(paymentMethod);

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/checkout",
          {
            id,
            amount: total * 100,
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTION} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}>
        <Button variant="outlined" onClick={backStep}>
          Back
        </Button>{" "}
        <Button
          variant="contained"
          color="primary"
          onClick={nextStep}
          type="submit">
          Pay ${total}
        </Button>
      </div>
    </form>
  );
};

const PaymentForm = ({ backStep, nextStep }) => {
  return (
    <>
      <div className="container py-3">
        <Review />
        <Divider />
        <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
          Payment Method
        </Typography>
        <Elements stripe={stripePromise}>
          <CheckoutForm backStep={backStep} />
        </Elements>
      </div>
    </>
  );
};

export default PaymentForm;
