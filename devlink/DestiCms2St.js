"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DestiCms2St.module.css";

export function DestiCms2St({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "cont-3")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-23")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "heading-25")} tag="h1">
          {"Available Rooms"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-20")}>
          {"From "}
          <_Builtin.Strong>{"18.08.2023"}</_Builtin.Strong>
          {" To "}
          <_Builtin.Strong>{"19.08.2023"}</_Builtin.Strong>
          <br />
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-24")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-22")}>
              {"Comfort room with lake view"}
            </_Builtin.Paragraph>
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-23")}>
              {
                "The Comfort rooms, as the name suggests, offer you an environment in which you will not lack comfort. They give you enough space that you need during your holidays. The rooms have comfortable queen-size beds (1.60x2.0m) or king-size beds (1.80x2.0m) as well as an armchair and a coffee table. The spacious bathroom is equipped with a rain shower. All lake view rooms offer a large terrace with a deck chair as well as two seating areas."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
