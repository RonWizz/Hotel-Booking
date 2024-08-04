// "use client";
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import * as _Builtin from "./_Builtin";
// import * as _utils from "./utils";
// import _styles from "./DestiCms1st.module.css";

// export function DestiCms1st({ as: _Component = _Builtin.Block}) {
//   const router = useRouter(); 
//   const image = router.query.destinationId;
//   return (
//     <_Component className={_utils.cx(_styles, "aboutpg")} tag="div">
//       <_Builtin.Block className={_utils.cx(_styles, "div-block-31")} tag="div">
//         <_Builtin.NavbarWrapper
//           className={_utils.cx(_styles, "navbar-2")}
//           tag="div"
//           config={{
//             animation: "default",
//             collapse: "medium",
//             docHeight: false,
//             duration: 400,
//             easing: "ease",
//             easing2: "ease",
//             noScroll: false,
//           }}
//         >
//           <_Builtin.NavbarContainer
//             className={_utils.cx(_styles, "container-8")}
//             tag="div"
//           >
//             <_Builtin.NavbarBrand
//               options={{
//                 href: "#",
//               }}
//             >
//               <_Builtin.Image
//                 className={_utils.cx(_styles, "image-31", "logo", "mob-logo")}
//                 loading="lazy"
//                 height="auto"
//                 width="auto"
//                 alt=""
//                 src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de41299c74f5b674db8887_emojione-monotone_hotel.svg"
//               />
//             </_Builtin.NavbarBrand>
//             <_Builtin.NavbarMenu
//               className={_utils.cx(_styles, "nav-menu")}
//               tag="nav"
//               role="navigation"
//             >
//               <_Builtin.NavbarLink
//               className={_utils.cx(_styles, "nav-link-2")}
//               options={{
//                 href: "/",
//               }}
//             >
//               {"Overview"}
//             </_Builtin.NavbarLink>
//             <_Builtin.NavbarLink
//               className={_utils.cx(_styles, "nav-link-2")}
//               options={{
                  
//                 href: "/accomodation",
//               }}
              
//             >
//             {"Accomodation"}
//             </_Builtin.NavbarLink>
//             <_Builtin.NavbarLink
//               className={_utils.cx(_styles, "nav-link-2")}
//               options={{
//                 href: "/destination",
//               }}
//             >
//               {"Destination"}
//             </_Builtin.NavbarLink>
//             <_Builtin.NavbarLink
//               className={_utils.cx(_styles, "nav-link-2")}
//               options={{
//                 href: "/contact",
//               }}
//             >
//               {"Contact Us"}
//             </_Builtin.NavbarLink>
//               <_Builtin.NavbarLink
//                 className={_utils.cx(_styles, "nav-link-2", "btn", "color")}
//                 options={{
//                   href: "#",
//                 }}
//               >
//                 {"Sign In"}
//               </_Builtin.NavbarLink>
//             </_Builtin.NavbarMenu>
//             <_Builtin.NavbarButton
//               className={_utils.cx(_styles, "menu-button")}
//               tag="div"
//             >
//               <_Builtin.Icon
//                 className={_utils.cx(_styles, "icon")}
//                 widget={{
//                   type: "icon",
//                   icon: "nav-menu",
//                 }}
//               />
//             </_Builtin.NavbarButton>
//           </_Builtin.NavbarContainer>
//         </_Builtin.NavbarWrapper>
        
//         <_Builtin.Image
//           className={_utils.cx(_styles, "image-35")}
//           height="auto"
//           loading="lazy"
//           width="auto"
//           alt=""
//         /> 

//         <_Builtin.Block className={_utils.cx(_styles, "cont-2")} tag="div">
//           <_Builtin.Block
//             className={_utils.cx(_styles, "flex", "mob")}
//             tag="div"
//           >
//             <_Builtin.Block
//               className={_utils.cx(
//                 _styles,
//                 "div-block-21",
//                 "over-wdth",
//                 "mob-pad"
//               )}
//               tag="div"
//             >
//               <_Builtin.Image
//                 className={_utils.cx(_styles, "image-29")}
//                 loading="lazy"
//                 width="auto"
//                 height="auto"
//                 alt=""
//                 src="https://uploads-ssl.webflow.com/64d2483d17de1d26dde119e9/64d53bb9824dea1b6cd13f50_stars.svg"
//               />
//               <_Builtin.Heading
//                 className={_utils.cx(_styles, "heading-22")}
//                 tag="h1"
//               >
//                 {"Heading"}
//               </_Builtin.Heading>
//               <_Builtin.Paragraph
//                 className={_utils.cx(_styles, "paragraph-17")}
//               >
//                 {
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
//                 }
//               </_Builtin.Paragraph>
//               <_Builtin.Image
//                 className={_utils.cx(
//                   _styles,
//                   "image-23",
//                   "image-24",
//                   "image-25",
//                   "image-26",
//                   "image-30",
//                   "image-28"
//                 )}
//                 loading="lazy"
//                 width="31"
//                 height="auto"
//                 alt=""
//                 src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64deedf0cc0dd7791fbac182_Vector.svg"
//               />
//               <_Builtin.Link
//                 className={_utils.cx(_styles, "link-3")}
//                 button={false}
//                 block=""
//                 options={{
//                   href: "#",
//                 }}
//               >
//                 {"Show on map"}
//               </_Builtin.Link>
//             </_Builtin.Block>
//             <_Builtin.Block
//               className={_utils.cx(_styles, "div-block-22")}
//               tag="div"
//             >
//               <_Builtin.Heading className={_utils.cx(_styles, "h1")} tag="h1">
//                 {"Pricing:"}
//               </_Builtin.Heading>
//               <_Builtin.Paragraph
//                 className={_utils.cx(_styles, "paragraph-19")}
//               >
//                 {"Day/night starting from :"}
//                 <br />
//                 <br />
//                 {"250 CNF"}
//               </_Builtin.Paragraph>
//             </_Builtin.Block>
//           </_Builtin.Block>
//         </_Builtin.Block>
//       </_Builtin.Block>
//     </_Component>
//   );
// }