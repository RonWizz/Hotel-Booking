import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as _Builtin from "../../../devlink/_Builtin";
import * as _utils from "../../../devlink/utils";
import _styles from "../../../devlink/DestiCms1st.module.css";
import { DestiCms2St } from '@/devlink/DestiCms2St';
import {DestiCms3St} from '../../../devlink/DestiCms3St';
import { Footer } from '@/devlink';
import destiId from '../../data/destiId.json';
interface DestiItem {
  id: string;
  Heading: string;
  Paragraph: string; // Make Paragraph property optional
  destinationImage: string;
  Destination_SM_Image: string;
  
  // Add other properties as needed
}

const destiIdData: { [key: string]: DestiItem} = {};
destiId.forEach((item) => {
  destiIdData[item.id.toString()] = { 
    id: item.id.toString(),
    Heading: item.Heading,
    Paragraph: item.Paragraph, // Include the Paragraph property
    destinationImage: item.destinationImage,
    Destination_SM_Image: item.Destination_SM_Image };
});

const DestiCms1st = ({ as: _Component = _Builtin.Block }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleopen = () => {
  setIsOpen(!isOpen);
  }
  const router = useRouter();
  const { student } = router.query;
  const id = student as string;

  if (!destiIdData[id as string]) {
    console.log('ID:', id, 'does not match any keys in destiIdData:');
    return ;
  }
  const cmsItem = destiIdData[id as string];
  return (
    <_Component className={_utils.cx(_styles, "aboutpg")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-31")} tag="div">
        <_Builtin.NavbarWrapper
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
            toggleOpen={toggleopen}
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
              // role="navigation"
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
                  // type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
          </_Builtin.NavbarContainer>
        </_Builtin.NavbarWrapper>
        <_Builtin.Image
          className={_utils.cx(_styles, "image-35")}
          height="auto"
          loading="lazy"
          width="auto"
          alt=""
          src={cmsItem.destinationImage}
          
        />
        <_Builtin.Block className={_utils.cx(_styles, "cont-2")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "flex", "mob")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "div-block-21",
                "over-wdth",
                "mob-pad"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-29")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-22")}
                tag="h1"
              >
                <p>{cmsItem.Heading}</p>
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-17")}
              >
                <p>{cmsItem.Paragraph}</p>
              </_Builtin.Paragraph>
              <_Builtin.Image
                className={_utils.cx(
                  _styles,
                  "image-23",
                  "image-24",
                  "image-25",
                  "image-26",
                  "image-30",
                  "image-28"
                )}
                loading="lazy"
                width="31"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64deedf0cc0dd7791fbac182_Vector.svg"
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "link-3")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Show on map"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-22")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h1")} tag="h1">
                {"Pricing:"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-19")}
              >
                {"Day/night starting from :"}
                <br />
                <br />
                {"250 CNF"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <DestiCms2St/>
      <DestiCms3St/>
      
      <Footer/>
    </_Component>
  );
}
export default DestiCms1st;



