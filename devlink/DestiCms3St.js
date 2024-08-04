"use client";
import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./DestiCms3St.module.css";
import { useState } from "react";
import destiId from "../pages/data/destiId.json"
const destiIdData = {};
destiId.forEach((item) => {
  destiIdData[item.id.toString()] = { 
    id: item.id.toString(),
    Heading: item.Heading,
    Paragraph: item.Paragraph,
    destinationImage: item.destinationImage,
    Destination_SM_Image: item.Destination_SM_Image
  };
});
const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64de52deb0996590ced375a7|3fa75876-87ef-eb64-3c85-27a193c27c25","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64de52deb0996590ced375a7|3fa75876-87ef-eb64-3c85-27a193c27c25","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1671759036659},"e-4":{"id":"e-4","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64de52deb0996590ced375a7|3fa75876-87ef-eb64-3c85-27a193c27c25","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64de52deb0996590ced375a7|3fa75876-87ef-eb64-3c85-27a193c27c25","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1671759036659},"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64de52deb0996590ced375a7|3fa75876-87ef-eb64-3c85-27a193c27c32","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64de52deb0996590ced375a7|3fa75876-87ef-eb64-3c85-27a193c27c32","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1671846699356},"e-6":{"id":"e-6","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64de52deb0996590ced375a7|3fa75876-87ef-eb64-3c85-27a193c27c32","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64de52deb0996590ced375a7|3fa75876-87ef-eb64-3c85-27a193c27c32","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1671846699356},"e-131":{"id":"e-131","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-132"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1f10c5af-addb-0889-558b-83051ab991d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1f10c5af-addb-0889-558b-83051ab991d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712896211295},"e-132":{"id":"e-132","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-131"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1f10c5af-addb-0889-558b-83051ab991d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1f10c5af-addb-0889-558b-83051ab991d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712896211295},"e-133":{"id":"e-133","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-134"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1f10c5af-addb-0889-558b-83051ab991e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1f10c5af-addb-0889-558b-83051ab991e6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712896211295},"e-134":{"id":"e-134","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-133"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1f10c5af-addb-0889-558b-83051ab991e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1f10c5af-addb-0889-558b-83051ab991e6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1712896211295}},"actionLists":{"a":{"id":"a","title":"card-scroll-up","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card_scroll","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b6"]},"yValue":-101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card_logo","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card_logo","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b2"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card_line","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b1"]},"globalSwatchId":"306fdd46","rValue":143,"bValue":255,"gValue":0,"aValue":1}},{"id":"a-n-5","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card_img","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2ae"]},"globalSwatchId":"","rValue":29,"bValue":29,"gValue":27,"aValue":1}}]},{"actionItems":[{"id":"a-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".card_scroll","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b6"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".card_logo","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b2"]},"zValue":-8,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".card_logo","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b2"]},"xValue":1.2,"yValue":1.2,"locked":true}},{"id":"a-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".card_line","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b1"]},"globalSwatchId":"3f8794c3","rValue":251,"bValue":252,"gValue":249,"aValue":1}},{"id":"a-n-10","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card_img","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2ae"]},"globalSwatchId":"","rValue":227,"bValue":48,"gValue":177,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1670635234530},"a-2":{"id":"a-2","title":"card-scroll-up 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".card_scroll","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b6"]},"yValue":-101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card_logo","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card_logo","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b2"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-2-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":100,"target":{"selector":".card_line","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2b1"]},"globalSwatchId":"306fdd46","rValue":143,"bValue":255,"gValue":0,"aValue":1}},{"id":"a-2-n-5","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".card_img","selectorGuids":["606e23ce-1557-7acb-89de-7d559b97c2ae"]},"globalSwatchId":"","rValue":29,"bValue":29,"gValue":27,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1670635234530}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);



  // const queryParams = new URLSearchParams()

export function DestiCms3St({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);
  const router = useRouter();
  const { student } = router.query;
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [value, setValue] = useState('')
  // const [student, setSelectedDestination] = useState(id);
  const id = student ;
  // const { checkout } = router.query.checkout;
  const handleSubmit = () => {
    if (student) {
      const queryParams = new URLSearchParams({
        destination: student,
        adults: options.adult,
        children: options.children,
        rooms: options.room,
      });
  
      router.push(`/studentlist/${student}/book1?${queryParams}`);
    }
  };
  if (!destiIdData[id]) {
    console.log('ID:', id, 'does not match any keys in destiIdData:');
    return <div>CMS content not found</div>;
  }
  const cmsItem = destiIdData[id];
  
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "global-styles")}
        value="%3Cstyle%3E%0A%0A%2F*%20Snippet%20gets%20rid%20of%20top%20margin%20on%20first%20element%20in%20any%20rich%20text*%2F%0A.w-richtext%3E%3Afirst-child%20%7B%0A%09margin-top%3A%200%3B%0A%7D%0A%0A%2F*%20Snippet%20gets%20rid%20of%20bottom%20margin%20on%20last%20element%20in%20any%20rich%20text*%2F%0A.w-richtext%3E%3Alast-child%2C%20.w-richtext%20ol%20li%3Alast-child%2C%20.w-richtext%20ul%20li%3Alast-child%20%7B%0A%09margin-bottom%3A%200%3B%0A%7D%0A%0A%2F*%20Snippet%20prevents%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.clickable-off%20%7B%0A%09pointer-events%3A%20none%3B%0A%7D%0A%0A%2F*%20Snippet%20enables%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.clickable-on%7B%0A%20%20pointer-events%3A%20auto%3B%0A%7D%0A%0A%2F*%20Snippet%20enables%20you%20to%20add%20class%20of%20div-square%20which%20creates%20and%20maintains%20a%201%3A1%20dimension%20of%20a%20div.*%2F%0A.div-square%3A%3Aafter%20%7B%0A%09content%3A%20%22%22%3B%0A%09display%3A%20block%3B%0A%09padding-bottom%3A%20100%25%3B%0A%7D%0A%0A%2F*Hide%20focus%20outline%20for%20main%20content%20element*%2F%0Amain%3Afocus-visible%20%7B%0A%09outline%3A%20-webkit-focus-ring-color%20auto%200px%3B%0A%7D%0A%0A%2F*%20Make%20sure%20containers%20never%20lose%20their%20center%20alignment*%2F%0A.container-medium%2C%20.container-small%2C%20.container-large%20%7B%0A%09margin-right%3A%20auto%20!important%3B%0A%09margin-left%3A%20auto%20!important%3B%0A%7D%0A%0A%2F*Reset%20buttons%2C%20and%20links%20styles*%2F%0Aa%20%7B%0A%09color%3A%20inherit%3B%0A%09text-decoration%3A%20inherit%3B%0A%09font-size%3A%20inherit%3B%0A%7D%0A%0A%2F*Apply%20%22...%22%20after%203%20lines%20of%20text%20*%2F%0A.text-style-3lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%203%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*Apply%20%22...%22%20after%202%20lines%20of%20text%20*%2F%0A.text-style-2lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%202%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F**My%20Styles**%2F%0A.text%20%7B%0A%20%20mix-blend-mode%3A%20multiply%3B%0A%7D%0A%0A.text.is-purple%7B%0A%20%20mix-blend-mode%3A%20multiply%3B%0A%7D%0A%0A%0Avideo%20%7B%0A%09object-fit%3A%20cover%3B%0A%20%20height%3A%20100%25%3B%0A%20%20width%3A%20100%25%3B%0A%7D%0A%0A%0A%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Block className={_utils.cx(_styles, "section-tip")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "cards")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "card_component")}
            data-w-id="1f10c5af-addb-0889-558b-83051ab991d6"
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "card_img", "bg-img")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-38")}
                height="auto"
                loading="lazy"
                width="auto"
                alt=""
                src={cmsItem.destinationImage}
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "card_front-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "card_logo", "is-guardian")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-28", "mob")}
                    tag="h1"
                  >
                    <h1>{cmsItem.Heading}</h1>
                  </_Builtin.Heading>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-34")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64def7e48abd255d07ff06f5_The%20logo-1.png"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "card_information", "bg-col")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-small")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-color-grey")}
                  tag="div"
                >
                  {"The Guardian"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-size-large", "text-col")}
                tag="div"
              >
                {"This is some text inside of a div block."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "card_scroll")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "card_line")}
              id={_utils.cx(
                _styles,
                "w-node-_1f10c5af-addb-0889-558b-83051ab991e5-1ab991d2"
              )}
              tag="div"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "card_component")}
            data-w-id="1f10c5af-addb-0889-558b-83051ab991e6"
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "card_img")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "card__header")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-26")}
                  tag="h1"
                >
                  {"Skills"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "card__skills-container")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "skill")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "skill-header")}
                      tag="div"
                    >
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading-27")}
                        tag="h4"
                      >
                        {"User Interface"}
                      </_Builtin.Heading>
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "card-text")}
                        tag="h4"
                      >
                        {"90%"}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "progres-bar-2",
                        "card-bar"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "progress-bar__content-4",
                          "_1"
                        )}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "skill")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "skill-header")}
                      tag="div"
                    >
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading-27")}
                        tag="h4"
                      >
                        {"User Experience"}
                      </_Builtin.Heading>
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "card-text")}
                        tag="h4"
                      >
                        {"65%"}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "progres-bar-2",
                        "card-bar"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "progress-bar__content-4",
                          "_2"
                        )}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "skill-header")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-27")}
                      tag="h4"
                    >
                      {"Joke Making"}
                    </_Builtin.Heading>
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "card-text")}
                      tag="h4"
                    >
                      {"50%"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "skill")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "progres-bar-2",
                        "card-bar"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "progress-bar__content-4",
                          "_3"
                        )}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "skill")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "skill-header")}
                      tag="div"
                    >
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading-27")}
                        tag="h4"
                      >
                        {"Usability Testing"}
                      </_Builtin.Heading>
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "card-text")}
                        tag="h4"
                      >
                        {"95%"}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "progres-bar-2",
                        "card-bar"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "progress-bar__content-4",
                          "_4"
                        )}
                        tag="div"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "card_information")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-small")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-color-grey")}
                  tag="div"
                >
                  {"CNN"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-size-large")}
                tag="div"
              >
                {'"I give them 2,000,000 thumbs up"'}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "card_scroll")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "card_line")}
              id={_utils.cx(
                _styles,
                "w-node-_1f10c5af-addb-0889-558b-83051ab99213-1ab991d2"
              )}
              tag="div"
            />
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-30")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "section-tip-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "page-padding")}
              tag="div"
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
                  {/* <_Builtin.Link>

                  </_Builtin.Link> */}
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button_component")}
                    // button={false}
                    onClick={handleSubmit}
                    dyn={{
                      bind: {},
                    }}
                    block="inline"
                    // options={{
                    //   href: `/studentlist/${SelectedDestination}/book1`,
                    // }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "button_background-scale")}
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
                      <_Builtin.Block tag="div">
                          {"Book Now"}
                      </_Builtin.Block>

                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
