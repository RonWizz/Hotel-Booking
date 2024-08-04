// PaymentForm.js
import React from 'react';
import * as _utils from "./utils";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import _styles from'./payment.module.css';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Send payment method ID to your server to process payment
      const paymentMethodId = result.paymentMethod.id;
      // Here you would send paymentMethodId to your backend for further processing
      console.log(paymentMethodId);
    }
  };

  return (
    <form className={_utils.cx(_styles, "payment-form")} onSubmit={handleSubmit}>
      <div className={_utils.cx(_styles, "card-element")}>
        <CardElement />
      </div>
      <button className={_utils.cx(_styles, "button")} type="submit" disabled={!stripe}>
        Pay
      </button>
      <div className={_utils.cx(_styles, "error")} role="alert"></div>
    </form>
  );
};

export default PaymentForm;
