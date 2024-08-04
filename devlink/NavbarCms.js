"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavbarCms.module.css";

export function NavbarCms({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar-2")}
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
        className={_utils.cx(_styles, "container-8")}
        tag="div"
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
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2")}
            options={{
              href: "#",
            }}
          >
            {"Overview"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2")}
            options={{
              href: "#",
            }}
          >
            {"Accomodation"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2")}
            options={{
              href: "#",
            }}
          >
            {"Destination"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2")}
            options={{
              href: "#",
            }}
          >
            {"Contact Us"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2", "btn", "color")}
            options={{
              href: "#",
            }}
          >
            {"Sign In"}
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
    </_Component>
  );
}
