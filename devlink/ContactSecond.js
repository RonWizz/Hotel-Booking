"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ContactSecond.module.css";
import { useForm, ValidationError } from '@formspree/react';

const _interactionsData = JSON.parse(
  '{"events":{"e-123":{"id":"e-123","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-124"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1a4a61f8-ca00-b12e-9183-4c7325cec3b6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a4a61f8-ca00-b12e-9183-4c7325cec3b6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1694328597123}},"actionLists":{"a-43":{"id":"a-43","title":"contact page anime 2","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"1a4a61f8-ca00-b12e-9183-4c7325cec3b6"},"yValue":-130,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-43-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"1a4a61f8-ca00-b12e-9183-4c7325cec3b6"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-43-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"useEventTarget":true,"id":"1a4a61f8-ca00-b12e-9183-4c7325cec3b6"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-43-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"useEventTarget":true,"id":"1a4a61f8-ca00-b12e-9183-4c7325cec3b6"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1693659359708}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);


export function ContactSecond({ as: _Component = _Builtin.Block }) {
  const [state, handleSubmit] = useForm("mnqerknz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  _interactions.useInteractions(_interactionsData, _styles);
  return (
    <_Component className={_utils.cx(_styles, "div-block-49")} tag="div">

{/* ------------------------------------------------------------------------ */}

      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-57", "mob-des")}
        data-w-id="1a4a61f8-ca00-b12e-9183-4c7325cec3b6"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-48")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-39")}
            tag="h1"
          >
            {"Let’s blow (speech) bubbles"}
          </_Builtin.Heading>
          <_Builtin.FormWrapper>
            <_Builtin.FormForm
              className={_utils.cx(_styles, "form-2")}
              name="email-form"
              data-name="Email Form"
              method="get"
              id="email-form"
              type="email" 
            >
              <input
                className={_utils.cx(_styles, "text-field-07")}
                id="email"
                type="email" 
                name="email"
                placeholder="Email Address"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <textarea
                className={_utils.cx(_styles, "text-field-4")}
                id="message"
                name="message"
                type="text"
                placeholder="Your Full Name"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <textarea
                className={_utils.cx(_styles, "text-field-4")}
                id="message"
                name="message"
                type="text"
                placeholder="Write your Message"
              />
              <ValidationError 
                prefix="First Name" 
                field="Last Name"
                errors={state.errors}
              />
              
              <_Builtin.Block
                className={_utils.cx(_styles, "page-padding")}
                tag="div"
                type="submit" disabled={state.submitting}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "global-styles")}
                  value="%3Cstyle%3E%0A%0A%2F*%20Snippet%20gets%20rid%20of%20top%20margin%20on%20first%20element%20in%20any%20rich%20text*%2F%0A.w-richtext%3E%3Afirst-child%20%7B%0A%09margin-top%3A%200%3B%0A%7D%0A%0A%2F*%20Snippet%20gets%20rid%20of%20bottom%20margin%20on%20last%20element%20in%20any%20rich%20text*%2F%0A.w-richtext%3E%3Alast-child%2C%20.w-richtext%20ol%20li%3Alast-child%2C%20.w-richtext%20ul%20li%3Alast-child%20%7B%0A%09margin-bottom%3A%200%3B%0A%7D%0A%0A%2F*%20Snippet%20prevents%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.clickable-off%20%7B%0A%09pointer-events%3A%20none%3B%0A%7D%0A%0A%2F*%20Snippet%20enables%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.clickable-on%7B%0A%20%20pointer-events%3A%20auto%3B%0A%7D%0A%0A%2F*%20Snippet%20enables%20you%20to%20add%20class%20of%20div-square%20which%20creates%20and%20maintains%20a%201%3A1%20dimension%20of%20a%20div.*%2F%0A.div-square%3A%3Aafter%20%7B%0A%09content%3A%20%22%22%3B%0A%09display%3A%20block%3B%0A%09padding-bottom%3A%20100%25%3B%0A%7D%0A%0A%2F*Hide%20focus%20outline%20for%20main%20content%20element*%2F%0Amain%3Afocus-visible%20%7B%0A%09outline%3A%20-webkit-focus-ring-color%20auto%200px%3B%0A%7D%0A%0A%2F*%20Make%20sure%20containers%20never%20lose%20their%20center%20alignment*%2F%0A.container-medium%2C%20.container-small%2C%20.container-large%20%7B%0A%09margin-right%3A%20auto%20!important%3B%0A%09margin-left%3A%20auto%20!important%3B%0A%7D%0A%0A%2F*Reset%20buttons%2C%20and%20links%20styles*%2F%0Aa%20%7B%0A%09color%3A%20inherit%3B%0A%09text-decoration%3A%20inherit%3B%0A%09font-size%3A%20inherit%3B%0A%7D%0A%0A%2F*Apply%20%22...%22%20after%203%20lines%20of%20text%20*%2F%0A.text-style-3lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%203%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*Apply%20%22...%22%20after%202%20lines%20of%20text%20*%2F%0A.text-style-2lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%202%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F**My%20Styles**%2F%0A.button_background-scale%20%7Btransition%3A%20width%20.3s%20cubic-bezier(.23%2C%201%2C%20.32%2C%201)%3B%7D%0A.button_component%3Ahover%20%3E%20.button_background-scale%20%7Bwidth%3A%20100%25%3B%7D%0A%3C%2Fstyle%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "container-xlarge")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "buttons-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button_component")}
                      button={false}
                      block="inline"
                      type="submit" disabled={state.succeeded}
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "button_background-scale"
                        )}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button_icon-wrapper")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-svg")}
                          value="%3Csvg%20width%3D%2240%22%20height%3D%2241%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15%2030.5L25%2020.5L15%2010.5%22%20stroke%3D%22currentcolor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "button_content")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">{"Submit"}</_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>

)}