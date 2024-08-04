"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HomeFifth.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-107":{"id":"e-107","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-40","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d78911e5-98e3-01ae-7b59-8a6edefd7023","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d78911e5-98e3-01ae-7b59-8a6edefd7023","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-40-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":65,"restingState":50},{"continuousParameterGroupId":"a-40-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":65,"restingState":50}],"createdOn":1694328348133},"e-108":{"id":"e-108","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-40","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d78911e5-98e3-01ae-7b59-8a6edefd7025","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d78911e5-98e3-01ae-7b59-8a6edefd7025","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-40-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50},{"continuousParameterGroupId":"a-40-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50}],"createdOn":1694328348133},"e-109":{"id":"e-109","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-40","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d78911e5-98e3-01ae-7b59-8a6edefd7027","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d78911e5-98e3-01ae-7b59-8a6edefd7027","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-40-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50},{"continuousParameterGroupId":"a-40-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50}],"createdOn":1694328348133},"e-110":{"id":"e-110","name":"","animationType":"preset","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-40","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d78911e5-98e3-01ae-7b59-8a6edefd7029","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d78911e5-98e3-01ae-7b59-8a6edefd7029","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-40-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50},{"continuousParameterGroupId":"a-40-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":50,"restingState":50}],"createdOn":1694328348133}},"actionLists":{"a-40":{"id":"a-40","title":"Rotate mouse 2","continuousParameterGroups":[{"id":"a-40-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-40-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"d78911e5-98e3-01ae-7b59-8a6edefd7023"},"yValue":-20,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}}]},{"keyframe":100,"actionItems":[{"id":"a-40-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"d78911e5-98e3-01ae-7b59-8a6edefd7023"},"yValue":20,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}}]}]},{"id":"a-40-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-40-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"d78911e5-98e3-01ae-7b59-8a6edefd7023"},"xValue":-20,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}}]},{"keyframe":100,"actionItems":[{"id":"a-40-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"d78911e5-98e3-01ae-7b59-8a6edefd7023"},"xValue":20,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}}]}]}],"createdOn":1692543490455}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeFifth({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-13")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "cont")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "heading-4")} tag="h1">
          {"Our Hotel Amenities"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-7")}>
          {
            "Enjoy wellness and recreational amenities like the indoor heated swimming pool with hot tub, 24-hour fitness centre and gaming activities at our HTH Lounge/Bar. "
          }
          <br />
          <br />
          {
            "Start your day well with a complimentary delicious hot buffet breakfast while enjoying the magnificent views from the 16th floor! In addition to the above, our Guest Services associates are always available to assist you in the best way possible and make you feel special during your stay. Treat yourself to a delectable steak and daring cocktails at our on-site bar and grill, Le Rouge Restaurant."
          }
        </_Builtin.Paragraph>
        <_Builtin.Row
          className={_utils.cx(_styles, "columns")}
          tag="div"
          columns={{
            main: "3|3|3|3",
            medium: "",
            small: "",
            tiny: "",
          }}
        >
          <_Builtin.Column tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "", "image-12")}
              data-w-id="d78911e5-98e3-01ae-7b59-8a6edefd7023"
              loading="lazy"
              width="159"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de41748360fe17065c6d26_Group%2014-min.png"
            />
          </_Builtin.Column>
          <_Builtin.Column tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "image-13")}
              data-w-id="d78911e5-98e3-01ae-7b59-8a6edefd7025"
              loading="lazy"
              width="159"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de41748360fe17065c6d20_Group%2012-min.png"
            />
          </_Builtin.Column>
          <_Builtin.Column tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "image-14")}
              data-w-id="d78911e5-98e3-01ae-7b59-8a6edefd7027"
              loading="lazy"
              width="159"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de41748360fe17065c6d22_Group%2011-min.png"
            />
          </_Builtin.Column>
          <_Builtin.Column tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "image-15")}
              data-w-id="d78911e5-98e3-01ae-7b59-8a6edefd7029"
              loading="lazy"
              width="159"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de41748360fe17065c6d24_Group%2013-min.png"
            />
          </_Builtin.Column>
        </_Builtin.Row>
      </_Builtin.Block>
    </_Component>
  );
}
