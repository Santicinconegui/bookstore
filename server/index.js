const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();

const stripe = new Stripe(
  "sk_test_51M8t5ZGNOAckjmF1vRvnmUOIgfVKlV3iRixNSjIETaoNIoL38Hu6uAP1HPOVgcSW7MbuY3r0moElfLc8WmWVeZsb005l2ooU3g"
);

//middleware

app.use(cors({ origin: "http://localhost:3000" })); //peticion para que sean aceptados los datos enviados desde el puerto 3000

app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  console.log(req.body);
  res.send("recibido");
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Basket of products",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    return res.status(200).json({ message: "succesful payment" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => console.log("server listening in PORT", 3001, ":#"));
