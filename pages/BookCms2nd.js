"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as _Builtin from "../devlink/_Builtin";
import * as _interactions from "../devlink/interactions";
import * as _utils from "../devlink/utils";
import _styles from "../devlink/BookCms2nd.module.css";
import checkout from "./data/checkout.json"
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY');
const destiIdData = {};
checkout.forEach((item) => {
  destiIdData[item.id.toString()] = { 
    id: item.id.toString(),
    Select_your_destination: item.Select_your_destination,
    Destination_Image: item.Destination_Image,
  };
});

  
const _interactionsData = JSON.parse(
  '{"events":{"e-41":{"id":"e-41","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".pricing-card","originalId":"64e1e5ebf04dda99c88b3bf5|84cb1ac4-7784-38d4-6aaa-d3477dd9e262","appliesTo":"CLASS"},"targets":[{"selector":".pricing-card","originalId":"64e1e5ebf04dda99c88b3bf5|84cb1ac4-7784-38d4-6aaa-d3477dd9e262","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1578967604492},"e-42":{"id":"e-42","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".pricing-card","originalId":"64e1e5ebf04dda99c88b3bf5|84cb1ac4-7784-38d4-6aaa-d3477dd9e262","appliesTo":"CLASS"},"targets":[{"selector":".pricing-card","originalId":"64e1e5ebf04dda99c88b3bf5|84cb1ac4-7784-38d4-6aaa-d3477dd9e262","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1578967604493}},"actionLists":{"a-13":{"id":"a-13","title":"Card Hover","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":true,"id":"64e1e5ebf04dda99c88b3bf5|84cb1ac4-7784-38d4-6aaa-d3477dd9e262"},"yValue":-6,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1578967622032},"a-14":{"id":"a-14","title":"Card Hover [OUT]","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":true,"id":"64e1e5ebf04dda99c88b3bf5|84cb1ac4-7784-38d4-6aaa-d3477dd9e262"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1578967622032}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export default function BookCms2nd({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Hide notification after 2 seconds
  };

  const router = useRouter();
  const { student } = router.query;
  const id = student;
  if (!destiIdData[id]) {
    console.log('ID:', id, 'does not match any keys in destiIdData:');
    return <div>CMS content not found</div>;
  }
  const { destination: initialDestination, startDate: initialStartDate, endDate: initialEndDate, adults: initialAdults, children: initialChildren, rooms: initialRooms } = router.query;
  const [destination, setDestination] = useState(initialDestination);

  const initialAdultsValue = initialAdults && !Array.isArray(initialAdults) ? parseInt(initialAdults) : 1;
  const initialChildrenValue = initialChildren && !Array.isArray(initialChildren) ? parseInt(initialChildren) : 0;
  const initialRoomsValue = initialRooms && !Array.isArray(initialRooms) ? parseInt(initialRooms) : 1;
  
  const [adults, setAdults] = useState(initialAdultsValue);
  const [children, setChildren] = useState(initialChildrenValue);
  const [rooms, setRooms] = useState(initialRoomsValue);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      adults: adults.toString(),
      children: children.toString(),
      rooms: rooms.toString(),
    });
    localStorage.setItem('selectedStudent', student);
    router.replace(`/studentlist/${destination}/book1?${queryParams}`, undefined, { shallow: true });
  }, [adults, children, rooms]);

  const handlePassengerChange = (type, value) => {
    if (type === 'adults') {
      setAdults(value);
    } else if (type === 'children') {
      setChildren(value);
    } else if (type === 'rooms') {
      setRooms(value);
    }
  };

  const handlePayNow = async () => {
    console.log("Pay Now button clicked");
  
    try {
      const stripe = await stripePromise;
  
      console.log("Stripe loaded:", stripe);
  
      const response = await fetch('http://localhost:3000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: totalPrice * 100 }), // Stripe expects amount in cents
      });
  
      console.log("API response received");
  
      if (!response.ok) {
        console.error("Error creating checkout session:", response.statusText);
        return;
      }
  
      const session = await response.json();
      console.log("Checkout session:", session);
  
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (result.error) {
        console.error("Error redirecting to checkout:", result.error.message);
      }
    } catch (error) {
      console.error("Error in handlePayNow:", error);
    }
  };

  const cmsItem = destiIdData[id];
  const totalPrice = adults * 200 + children * 100 + rooms * 500;

  return (
    <_Component className={_utils.cx(_styles, "div-block-56")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "pricing-section", "pay-btn")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "title-block")}
            tag="div"
          >
            <_Builtin.Heading tag="h1">{"Heading"}</_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "pricing-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "pricing-column-03")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "pricing-card")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-37")}
                  height="auto"
                  loading="lazy"
                  width="auto"
                  alt=""
                  src={cmsItem.Destination_Image}
                />
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-29")}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Link
                  className={_utils.cx(_styles, "pricing-button")}
                  button={true}
                  block=""
                  options={{
                    href: `/studentlist/${student}`,
                  }}
                >
                  {"View More"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "pricing-column-03")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "pricing-card")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "pricing-h3", "white")}
                  tag="h3"
                >
                  {"Passengers"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "pricing-check-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "check")}
                      width="auto"
                      height="auto"
                      loading="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/5aa5deb2f3d89b000123c7dd/5cd24ca168db6560f9e01747_check.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "pricing-text", "white")}
                    >
                      {"Adults"}
                      <input
                        className={_utils.cx(_styles, 'adult')}
                        type="number"
                        value={adults}
                        onChange={(e) => handlePassengerChange('adults', parseInt(e.target.value))}
                      />
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "check")}
                      width="auto"
                      height="auto"
                      loading="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/5aa5deb2f3d89b000123c7dd/5cd24ca168db6560f9e01747_check.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "pricing-text", "white")}
                    >
                      {"Childrens"}
                      <input
                        className={_utils.cx(_styles, 'adult')}
                        type="number"
                        value={children}
                        onChange={(e) => handlePassengerChange('children', parseInt(e.target.value))}
                      />
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "check")}
                      width="auto"
                      height="auto"
                      loading="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/5aa5deb2f3d89b000123c7dd/5cd24ca168db6560f9e01747_check.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "pricing-text", "white")}
                    >
                      {"Rooms"}
                      <input
                        className={_utils.cx(_styles, 'adult')}
                        type="number"
                        value={rooms}
                        onChange={(e) => handlePassengerChange('rooms', parseInt(e.target.value))}
                      />
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "pricing-details")}
                tag="div"
              >
                {"* Billed as $420 yearly"}
                <br />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "pricing-column-03")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "pricing-card", "purple")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "pricing-h3")}
                  tag="h3"
                >
                  {"Total Summarizing "}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "pricing-check-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "check")}
                      width="auto"
                      height="auto"
                      loading="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/5aa5deb2f3d89b000123c7dd/5cd24ca168db6560f9e01747_check.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "pricing-text")}
                    >
                      {"Cloneable Content"}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "check")}
                      width="auto"
                      height="auto"
                      loading="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/5aa5deb2f3d89b000123c7dd/5cd24ca168db6560f9e01747_check.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "pricing-text")}
                    >
                      {"Beautiful Templates"}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "check")}
                      width="auto"
                      height="auto"
                      loading="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/5aa5deb2f3d89b000123c7dd/5cd24ca168db6560f9e01747_check.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "pricing-text")}
                    >
                      {"Detailed Guides"}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "check")}
                      width="auto"
                      height="auto"
                      loading="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/5aa5deb2f3d89b000123c7dd/5cd24ca168db6560f9e01747_check.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "pricing-text")}
                    >
                      {"Expert Support"}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "check")}
                      width="auto"
                      height="auto"
                      loading="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/5aa5deb2f3d89b000123c7dd/5cd24ca168db6560f9e01747_check.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "pricing-text")}
                    >
                      {"Communities & Groups"}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "pricing-check")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "check")}
                      width="auto"
                      height="auto"
                      loading="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/5aa5deb2f3d89b000123c7dd/5cd24ca168db6560f9e01747_check.svg"
                    />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "pricing-text")}
                    >
                      {"Inspiration & Jobs"}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <div>
                  {showNotification && (
                    <div className={_utils.cx(_styles,"notification")}>
                      Payment handler is not been set
                    </div>
                  )}

                  <_Builtin.Link
                    className={_utils.cx(_styles, "pricing-button", "secondary")}
                    block=""
                    options={{
                      href: "#",
                    }}
                    onClick={handleButtonClick}
                  >
                    {"Total Price =>"}
                    <span>{totalPrice}</span>
                  </_Builtin.Link>
                </div>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}