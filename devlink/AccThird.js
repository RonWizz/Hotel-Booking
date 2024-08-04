"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AccThird.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-111":{"id":"e-111","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"667b4bad-9f48-5703-439b-5436c9cca4ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"667b4bad-9f48-5703-439b-5436c9cca4ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":61,"direction":"LEFT","effectIn":true},"createdOn":1694328442142},"e-113":{"id":"e-113","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"667b4bad-9f48-5703-439b-5436c9cca4cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"667b4bad-9f48-5703-439b-5436c9cca4cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":61,"direction":"RIGHT","effectIn":true},"createdOn":1694328442142},"e-115":{"id":"e-115","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"667b4bad-9f48-5703-439b-5436c9cca4d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"667b4bad-9f48-5703-439b-5436c9cca4d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":81,"direction":"LEFT","effectIn":true},"createdOn":1694328442142},"e-117":{"id":"e-117","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"667b4bad-9f48-5703-439b-5436c9cca4d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"667b4bad-9f48-5703-439b-5436c9cca4d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":81,"direction":"RIGHT","effectIn":true},"createdOn":1694328442142},"e-119":{"id":"e-119","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"667b4bad-9f48-5703-439b-5436c9cca4c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"667b4bad-9f48-5703-439b-5436c9cca4c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694328442142},"e-121":{"id":"e-121","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"667b4bad-9f48-5703-439b-5436c9cca4c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"667b4bad-9f48-5703-439b-5436c9cca4c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694328442142}},"actionLists":{"a-41":{"id":"a-41","title":"Sub-heading 2","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"667b4bad-9f48-5703-439b-5436c9cca4c2"},"xValue":null,"yValue":36,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-41-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"667b4bad-9f48-5703-439b-5436c9cca4c2"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-41-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"useEventTarget":true,"id":"667b4bad-9f48-5703-439b-5436c9cca4c2"},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-41-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":true,"id":"667b4bad-9f48-5703-439b-5436c9cca4c2"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1693658131924},"a-42":{"id":"a-42","title":"sub-para 2","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"667b4bad-9f48-5703-439b-5436c9cca4c6"},"yValue":60,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-42-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"667b4bad-9f48-5703-439b-5436c9cca4c6"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-42-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"useEventTarget":true,"id":"667b4bad-9f48-5703-439b-5436c9cca4c6"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-42-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"useEventTarget":true,"id":"667b4bad-9f48-5703-439b-5436c9cca4c6"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1693658241943},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AccThird({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-17")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "section", "bg")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-17")}
          data-w-id="667b4bad-9f48-5703-439b-5436c9cca4c2"
          tag="h1"
        >
          {"Halifax Tower Hotel & Conference Centre Guest Rooms"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-13")}>
          {"Guest Rooms"}
        </_Builtin.Paragraph>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph-14")}
          data-w-id="667b4bad-9f48-5703-439b-5436c9cca4c6"
        >
          {
            "Our luxury hotel in Bayer’s Lake features over a hundred guest rooms and suites with spacious interiors and amenities like Smart TVs with Chromecast so you can stream your favorite programs from your mobile devices. Our whirlpool suites also feature comfortable king beds, kitchenettes, and large living areas for your convenience. Ask about our rooms with stunning views of the lake."
          }
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "flex",
            "flex-card",
            "changes",
            "vertical"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-18")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-22", "imgmob")}
              data-w-id="667b4bad-9f48-5703-439b-5436c9cca4ca"
              loading="lazy"
              height="auto"
              width="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de5129c0bb1902e373aa7f_pexels-pixabay-269141%201.png"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-19", "mob")}
            data-w-id="667b4bad-9f48-5703-439b-5436c9cca4cb"
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-18")}
              tag="h1"
            >
              {"Enhance your comfort zone"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-15")}>
              {
                "1king size bed/512 Square FeetLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Learn More"
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "flex",
            "flex-card",
            "changes",
            "vertical"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-18")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "imgmob")}
              data-w-id="667b4bad-9f48-5703-439b-5436c9cca4d2"
              loading="lazy"
              height="auto"
              width="3976"
              alt=""
              src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de5129c0bb1902e373aa81_pexels-engin-akyurt-1579253-min.jpg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "div-block-19",
              "changes",
              "tablet-size"
            )}
            data-w-id="667b4bad-9f48-5703-439b-5436c9cca4d3"
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-18")}
              tag="h1"
            >
              {"Our features"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-15")}>
              {
                "1king size bed/512 Square FeetLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Learn More"
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
