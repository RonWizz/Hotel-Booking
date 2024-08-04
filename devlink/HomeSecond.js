"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HomeSecond.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-127":{"id":"e-127","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-128"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f74","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f74","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694334149641},"e-129":{"id":"e-129","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-130"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694334149641}},"actionLists":{"a-44":{"id":"a-44","title":"line hori 4","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f74"},"xValue":-84,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-44-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f74"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-44-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":true,"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f74"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-44-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":true,"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f74"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1693657238419},"a-45":{"id":"a-45","title":"line verti 4","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f77"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-45-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f77"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-45-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":true,"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f77"},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-45-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":true,"id":"355efb81-8ca6-e1e2-5386-d7d8d2ae5f77"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1693657378724}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeSecond({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-2")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image")}
          data-w-id="355efb81-8ca6-e1e2-5386-d7d8d2ae5f74"
          loading="lazy"
          height="auto"
          width="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de414bc450534710f206d3_Line%201.png"
        />
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-3")}>
          {
            "Centrally located in the heart of Bayer's Lake, the Halifax Tower Hotel & Conference Centre is a perfect combination of luxury, sophistication and style."
          }
        </_Builtin.Paragraph>
        <_Builtin.Image
          className={_utils.cx(_styles, "image-2")}
          data-w-id="355efb81-8ca6-e1e2-5386-d7d8d2ae5f77"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de414bc450534710f206d5_Line%202.png"
        />
      </_Builtin.Block>
    </_Component>
  );
}
