"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HomeThird.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-97":{"id":"e-97","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-38","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4916b600-36b9-879c-606d-550096efedac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4916b600-36b9-879c-606d-550096efedac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-38-p","smoothing":100,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1694328332295},"e-98":{"id":"e-98","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-39","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4916b600-36b9-879c-606d-550096efedae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4916b600-36b9-879c-606d-550096efedae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-39-p","smoothing":100,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1694328332295}},"actionLists":{"a-38":{"id":"a-38","title":"paragraph1 2","continuousParameterGroups":[{"id":"a-38-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-38-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedac"},"xValue":-156,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-38-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedac"},"value":0,"unit":""}}]},{"keyframe":50,"actionItems":[{"id":"a-38-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedac"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-38-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedac"},"value":1,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-38-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedac"},"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1692988227265},"a-39":{"id":"a-39","title":"paragraph 3","continuousParameterGroups":[{"id":"a-39-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-39-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedae"},"xValue":-150,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-39-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedae"},"value":0,"unit":""}}]},{"keyframe":50,"actionItems":[{"id":"a-39-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedae"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-39-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedae"},"value":1,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-39-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"4916b600-36b9-879c-606d-550096efedae"},"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1692988657148}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeThird({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-3")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-4")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image-4")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/64d2483d17de1d26dde119e9/64d3b083829349e93d1d82ff_emojione-monotone_hotel.svg"
        />
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph-4")}
          data-w-id="4916b600-36b9-879c-606d-550096efedac"
        >
          {"A NEWLY BUILT LUXURY BOUTIQUE HOTEL IN BAYER'S LAKE"}
        </_Builtin.Paragraph>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "paragraph-5")}
          data-w-id="4916b600-36b9-879c-606d-550096efedae"
        >
          {
            "Welcome to the Halifax Tower Hotel & Conference Centre, an Ascend Hotel Collection."
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
