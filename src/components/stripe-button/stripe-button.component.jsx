import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HrZSIHpA0Pkr67bS16diTPSi9IBbKwTqNMq6InhZFJdvGCvLKUz6lduz5NEb6S4PWrsxc1JrtL85IRfoOAclffh00CdGk9mhD";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Processed");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="fethr"
      billingAdress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
