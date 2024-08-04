// "use client";
// import * as _Builtin from "./_Builtin";
// import Link from "next/link";
// import * as _interactions from "./interactions";
// import * as _utils from "./utils";
// import _styles from "./DestinationCollection.module.css";
// import React, { useState, useEffect } from 'react';
// // import { DestiCms1st } from "./[destinationId]/DestiCms1st";

// const _interactionsData = JSON.parse(
//   '{"events":{"e-125":{"id":"e-125","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","instant":false,"config":{"actionListId":"growIn","autoStopEventId":"e-126"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5e4d8b5-c0e1-53b8-bcb9-a61c89431330","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5e4d8b5-c0e1-53b8-bcb9-a61c89431330","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1694330373025}},"actionLists":{"growIn":{"id":"growIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":1,"yValue":1}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
// );

// export function DestinationCollection({
//   as: _Component = _Builtin.NotSupported,
// }) {
//   // State to store the fetched data
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Function to fetch data from API endpoint
//   const fetchDataWithCache = async (url) => {
//     try {
//       // Maintain a cache object outside of the loop
//       const resultCache = {};

//       let result;
//       if (resultCache[url]) {
//         // If the result is cached, use it directly
//         result = resultCache[url];
//       } else {
//         // If not cached, fetch the data
//         result = await fetch(url);
//         // Store the result in the cache
//         resultCache[url] = result;
//       }

//       return result;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return null;
//     }
//   };

//   // Function to fetch data from API endpoint
//   const fetchData = async () => {
//     try {
//       const response = await fetchDataWithCache('https://x8ki-letl-twmt.n7.xano.io/api:bYogGU3Q/destination_table');
//       if (response && response.ok) {
//         const jsonData = await response.json();
//         setData(jsonData); // Update state with fetched data
//       } else {
//         setData(null); // Set data to null if response is not OK
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setData(null); // Set data to null on error
//     } finally {
//       setLoading(false); // Set loading state to false after fetching data
//     }
//   };
//   // Call the fetchData function when the component mounts
//   useEffect(() => {
//     fetchData();
//   }, []);

//   _interactions.useInteractions(_interactionsData, _styles);
//   return (
//     <div role="list" className="w-dyn-items">
//     {data?.map(item => (
//       <div key={item.id} role="listitem" className="collection-item w-dyn-item">
//         <Link href="/studentlist"{...item.Button_Link}  className="link-block w-inline-block">
//           <div className="div-block-41 div-41">
//             <div className="flex div-block-44">
//               <div className="div-block-43">
//                 <h1 className="heading-42">{item.Name}</h1>
//                 <p className="paragraph-30">{item.Paragraph}</p>
//                 <br/>
//                 <p className="slag">
//                     <strong>Deluxe Studio‍</strong> Entire studio • 1 bathroom • 1 kitchen • 59m² 1 large double bed
//                 </p>
//                 <br/>
//               </div>
//               <div className="div-block-42 mob-img">
//                 <img loading="lazy" src={item.Image} alt={item.Name} className="image-36" />
//                 <h1 className="heading-34">{item.Name}</h1>
//               </div>
//             </div>
//           </div>
//         </Link>
//       </div>
//     ))}
//   </div>
//   );
// }
