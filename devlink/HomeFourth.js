"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HomeFourth.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-99":{"id":"e-99","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5f474fd9-39a4-b57f-21d6-86e545cf31eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5f474fd9-39a4-b57f-21d6-86e545cf31eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":81,"direction":"LEFT","effectIn":true},"createdOn":1694328337459},"e-101":{"id":"e-101","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-102"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5f474fd9-39a4-b57f-21d6-86e545cf31ec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5f474fd9-39a4-b57f-21d6-86e545cf31ec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":81,"direction":"RIGHT","effectIn":true},"createdOn":1694328337459},"e-103":{"id":"e-103","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-104"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5f474fd9-39a4-b57f-21d6-86e545cf31f5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5f474fd9-39a4-b57f-21d6-86e545cf31f5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":81,"direction":"LEFT","effectIn":true},"createdOn":1694328337459},"e-105":{"id":"e-105","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-106"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5f474fd9-39a4-b57f-21d6-86e545cf31f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5f474fd9-39a4-b57f-21d6-86e545cf31f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":81,"direction":"RIGHT","effectIn":true},"createdOn":1694328337459}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeFourth({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "cont")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "flex", "flex-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-6")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-39")}
              data-w-id="5f474fd9-39a4-b57f-21d6-86e545cf31eb"
              loading="lazy"
              width="403"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de41678360fe17065c5a9d_pexels-jegathisan-manoharan-1580112%201-min.png"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-7")}
            data-w-id="5f474fd9-39a4-b57f-21d6-86e545cf31ec"
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-3")}
              tag="h1"
            >
              {"There's something new in town."}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-6")}>
              {
                "One of the newest boutique hotels in Halifax, the Halifax Tower Hotel & Conference Centre in Bayer's Lake offers the perfect combination of luxury, sophistication and style. Featuring over a hundred guest rooms and suites, with exceptional décor and amenities, business and leisure travelers can spoil themselves in one of the newest boutique hotels in Halifax."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "cont")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "flex", "reverse", "flex-card")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-6")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-16")}
              data-w-id="5f474fd9-39a4-b57f-21d6-86e545cf31f4"
              loading="lazy"
              width="403"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de41678360fe17065c5aa1_pexels-jegathisan-manoharan-1580112%201-min%20(1).png"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-7", "left-text")}
            data-w-id="5f474fd9-39a4-b57f-21d6-86e545cf31f5"
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-3")}
              tag="h1"
            >
              {"Experience a Personalized Stay"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-6")}>
              {
                "The hotel offers a fresh and spectacular experience, luxurious amenities and personalized services. At the Halifax Tower Hotel & Conference Centre you will always be welcomed with warm Maritime hospitality and feel special from the time you enter its grand and elegant lobby and meet our diverse and friendly staff"
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
