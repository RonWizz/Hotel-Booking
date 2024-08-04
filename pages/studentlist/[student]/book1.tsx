
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import * as _Builtin from "../../../devlink/_Builtin";
import * as _interactions from "../../../devlink/interactions";
import * as _utils from "../../../devlink/utils";
import _styles from "../../../devlink/BookCms1st.module.css";
import checkout from "../../data/checkout.json";
import { Footer } from '@/devlink';
import { BookCms2nd } from '../../BookCms2nd';
interface DestiItem {
  id: string;
  Heading: string;
  Select_your_destination: string;
  Paragraph: string;
  Destination_Image: string;

}
// interface DateRangeSelection {
//   startDate: Date;
//   endDate: Date;
// }

const destiIdData: { [key: number]: DestiItem} = {};
checkout.forEach((item) => {
  destiIdData[item.id] = { 
    id: item.id.toString(),
    Heading: item.Heading,
    Select_your_destination: item.Select_your_destination,
    Destination_Image: item.Destination_Image,
    Paragraph: item.Paragraph
  };
});

const _interactionsData = JSON.parse(
  '{"events":{"e-46":{"id":"e-46","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1692531479180}},"actionLists":{"a-16":{"id":"a-16","title":"sanfran para","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e9bbb44b-f008-e129-9b0f-4ce7730c6dcb"},"xValue":76,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e9bbb44b-f008-e129-9b0f-4ce7730c6dcb"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":1000,"target":{"id":"e9bbb44b-f008-e129-9b0f-4ce7730c6dcb"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-16-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e9bbb44b-f008-e129-9b0f-4ce7730c6dcb"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1692531497178}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

const BookCms1st=({ as: _Component = _Builtin.Block }) => {
  _interactions.useInteractions(_interactionsData, _styles);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
  setIsOpen(!isOpen);
  };
  const router = useRouter();
  const { student } = router.query;
  const id = student as string;


  if (!(checkout as { [key: string]: any })[id as string]) {
    console.log('ID:', id, 'does not match any keys in destiIdData:');
    return ;
  }
  const cmsItem = (checkout as { [key: string]: any })[id as string];

  // const { destination: initialDestination, startDate: initialStartDate, endDate: initialEndDate, adults: initialAdults, children: initialChildren, rooms: initialRooms } = router.query;
  // const [destination, setDestination] = useState(initialDestination);

  // const initialAdultsValue = initialAdults && !Array.isArray(initialAdults) ? parseInt(initialAdults) : 1;
  // const initialChildrenValue = initialChildren && !Array.isArray(initialChildren) ? parseInt(initialChildren) : 0;
  // const initialRoomsValue = initialRooms && !Array.isArray(initialRooms) ? parseInt(initialRooms) : 1;
  
  // const [adults, setAdults] = useState(initialAdultsValue);
  // const [children, setChildren] = useState(initialChildrenValue);
  // const [rooms, setRooms] = useState(initialRoomsValue);


  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);
  

  // Update URL query parameters when state variables change
  // useEffect(() => {
  //   const queryParams = new URLSearchParams({
  //     // startDate: format(date[0].startDate, "dd/MM/yyyy"),
  //     // endDate: format(date[0].endDate, "dd/MM/yyyy"),
  //     adults: adults.toString(), // Convert to string
  //     children: children.toString(), // Convert to string
  //     rooms: rooms.toString(), // Convert to string
  //   });
  
  //   router.replace(`/studentlist/${destination}/book1?${queryParams}`, undefined, { shallow: true });
  // }, [adults, children, rooms]);


  // Handle change in passenger details
  // const handlePassengerChange = (type: string, value: number) => {
  //   if (type === 'adults') {
  //     setAdults(value);
  //   } else if (type === 'children') {
  //     setChildren(value);
  //   } else if (type === 'rooms') {
  //     setRooms(value);
  //   }
  // };

  return (
    <>
    <_Component className={_utils.cx(_styles, "div-block-64")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-61")} tag="div">
        <_Builtin.NavbarWrapper
          className={_utils.cx(_styles, "navbar-4")}
          tag="div"
          config={{
            animation: "default",
            collapse: "medium",
            docHeight: false,
            duration: 400,
            easing: "ease",
            easing2: "ease",
            noScroll: false,
          }}
        >
          <_Builtin.NavbarContainer
            className={_utils.cx(_styles, "container-11")}
            tag="div"
            toggleOpen={toggleOpen} // Assuming toggleOpen is your toggle function
            isOpen={isOpen}
          >
            <_Builtin.NavbarBrand
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-31", "logo", "mob-logo")}
                loading="lazy"
                height="auto"
                width="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de41299c74f5b674db8887_emojione-monotone_hotel.svg"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarMenu
              className={_utils.cx(_styles, "nav-menu")}
              tag="nav"
            //   role="navigation"
            >
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link-2")}
                options={{
                  href: "/",
                }}
              >
                {"Overview"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link-2")}
                options={{
                  href: "accomodation",
                }}
              >
                {"Accomodation"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link-2")}
                options={{
                  href: "/studentlist",
                }}
              >
                {"Destination"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link-2")}
                options={{
                  href: "/contact",
                }}
              >
                {"Contact Us"}
              </_Builtin.NavbarLink>
            </_Builtin.NavbarMenu>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "menu-button")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon")}
                widget={{
                //   type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
          </_Builtin.NavbarContainer>
        </_Builtin.NavbarWrapper>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-60", "div-block-63")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-62")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-42")}
              tag="h1"
            >
              <h1>{cmsItem.Heading}</h1>
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-31")}
              data-w-id="e9bbb44b-f008-e129-9b0f-4ce7730c6dcb"
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
    <BookCms2nd/>
    <Footer/>
  </>
  );
}
export default BookCms1st;
