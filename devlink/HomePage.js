"use client";
import React, { useState, useEffect } from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import { useContext } from 'react';
import _styles from "./HomePage.module.css";
import _interactions from "./interactions";
import { UserContext } from '../contexts/user.context';
import { signOutUser } from '../utils/firebase/firebase.utils';


const _interactionsData = JSON.parse(
  '{"events":{"e-58":{"id":"e-58","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-60","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-57"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1692535276925},"e-135":{"id":"e-135","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-136"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"PAGE","styleBlockIds":[],"id":"wf-page-id"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716692808266}},"actionLists":{"a-60":{"id":"a-60","title":"home heading","actionItemGroups":[{"actionItems":[{"id":"a-60-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c6d3104d-f427-b2bf-f175-ee4ad2671b90"},"xValue":null,"yValue":-34,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-60-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c6d3104d-f427-b2bf-f175-ee4ad2671b90"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-60-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"easeInOut","duration":600,"target":{"id":"c6d3104d-f427-b2bf-f175-ee4ad2671b90"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-60-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"easeInOut","duration":600,"target":{"id":"c6d3104d-f427-b2bf-f175-ee4ad2671b90"},"value":1,"unit":""}}]}],"createdOn":1716692606135,"useFirstGroupAsInitialState":true},"a-61":{"id":"a-61","title":"home heading 2nd para","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c6d3104d-f427-b2bf-f175-ee4ad2671b94"},"yValue":-34,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c6d3104d-f427-b2bf-f175-ee4ad2671b94"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-61-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"easeInOut","duration":600,"target":{"id":"c6d3104d-f427-b2bf-f175-ee4ad2671b94"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"","duration":600,"target":{"id":"c6d3104d-f427-b2bf-f175-ee4ad2671b94"},"value":1,"unit":""}}]}],"createdOn":1716692813448,"useFirstGroupAsInitialState":true}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);
export function HomePage({ as: _Component = _Builtin.Block }) {
  // _interactions.useInteractions(_interactionsData, _styles);
  const { currentUser } = useContext(UserContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Or return a loading indicator
  }
  // const [setValue] = useState('')
  const options = [
    {label: "Red", value: 1},
    {label: "Green", value: 2},
    {label: "Yellow", value: 3},
  ]
  function handleSelect(event){
    setValue(event.target.value)
  }
  return (
    <>
    <_Component className={_utils.cx(_styles, _interactionsData, "hero")} tag="div">
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "navbar")}
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
          className={_utils.cx(_styles, "container-2")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-17", "logo", "mob-logo")}
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
            role="navigation"
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
                href: "/accomodation",
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
            <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar1_menu-buttons", "tab")}
            tag="div"
          >
            {currentUser ? (
              <span
                className={_utils.cx(_styles, 'button-5')}
                type="button"
                block=""
                options={{
                  href: '/'
                }}
                onClick={signOutUser}
              >
                SIGN OUT
              </span>
            ) : (
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, 'button-3')}
                type="button"
                block=""
                options={{
                  href: '/authentication',
                }}
              >
                <span className='nav-link'>
                  SIGN IN
                </span>
              </_Builtin.NavbarLink>
            )}
          </_Builtin.NavbarLink>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "menu-button")}
            tag="div"
          >
            <_Builtin.Icon
              className={_utils.cx(_styles, "icon")}
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.NavbarContainer>
      </_Builtin.NavbarWrapper>
      <_Builtin.Block className={_utils.cx(_styles, "cont")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block", "heading")}
          tag="div"
        >
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-2")}>
            {"AN UNMATCHED BOUTIQUE HOTEL EXPERIENCE"}
          </_Builtin.Paragraph>
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-2")}
            data-w-id="c6d3104d-f427-b2bf-f175-ee4ad2671b90"
            tag="h1"
          >
            {"Halifax Tower Hotel"}
            <br />
            {"& "}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-2")}
            tag="h1"
            data-w-id="c6d3104d-f427-b2bf-f175-ee4ad2671b94"
          >
            {"Conference "}
            <br />
            {"Centre"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <search/>
      </_Builtin.Block>
    </_Component>
    </>
  );
}
