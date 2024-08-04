"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Contact.module.css";

export function Contact({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-45")} tag="div">
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
      <_Builtin.Block className={_utils.cx(_styles, "div-block-46")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-47")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-38")}
            tag="h1"
          >
            {"Contact Us"}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-27")}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
