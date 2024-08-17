'use client'
import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as _Builtin from "../../devlink/_Builtin";
import * as _interactions from '../../devlink/interactions';
import * as _utils from '../../devlink/utils';
import _styles from '../../devlink/DestinationCollection.module.css';
import { Destination, Footer } from '@/devlink';
import destidata  from '../data/destidata.json';





const _interactionsData = JSON.parse(
  '{"events":{"e-125":{"id":"e-125","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","instant":false,"config":{"actionListId":"growIn","autoStopEventId":"e-126"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5e4d8b5-c0e1-53b8-bcb9-a61c89431330","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5e4d8b5-c0e1-53b8-bcb9-a61c89431330","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1694330373025}},"actionLists":{"growIn":{"id":"growIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":1,"yValue":1}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DestinationCollection ({ as: _Component = _Builtin.Block })  {
  // _interactions.useInteractions(_interactionsData, _styles);
  
  return (
    <_Component className={_utils.cx(_styles, "div-block-45")} tag="div">

    <div>
      <Destination/>
      <div role="list" className="w-dyn-items">
      </div>
      <ul>
        {destidata?.map((destination) => (
          
          <li key={destination.id} role="listitem" className="collection-item w-dyn-item">
            <Link href={`/studentlist/${destination.id}`} className="link-block w-inline-block">
            <div className="div-block-41 div-41">
              <div className="flex div-block-44">
                <div className="div-block-36">
                <h1 className="heading-42">{destination.Name}</h1>
                <p className="paragraph-30">{destination.Paragraph}</p>
                <p className="slag">
                  <strong>Deluxe Studio‍</strong> Entire studio • 1 bathroom • 1 kitchen • 59m² 1 large double bed
                </p>
                </div>
                <div className="div-block-42 mob-img">
                  <img loading="lazy" src={destination.Image} alt={destination.Name} className="image-36" />
                  <h1 className="heading-34">{destination.Name}</h1>
                </div>
              </div>
            </div>
            </Link>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  </_Component>
  );
};

export default DestinationCollection;



