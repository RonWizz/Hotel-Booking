import React from 'react';
import * as _Builtin from "../../../devlink/_Builtin";
import * as _utils from "../../../devlink/utils";
import _styles from "../../../devlink/DestiCms3St.module.css";
import { useRouter } from 'next/router';
import destiId from './data/destiId.json';
interface DestiCms3StProps {
  children: React.ReactNode;
}

interface DestiItem {
    id: string;
    Heading: string;
    Paragraph: string; // Make Paragraph property optional
    destinationImage: string;
    Destination_SM_Image: string;
    
    // Add other properties as needed
  }
  
  const destiIdData: { [key: string]: DestiItem} = {};
  destiId.forEach((item) => {
    destiIdData[item.id.toString()] = { 
      id: item.id.toString(),
      Heading: item.Heading,
      Paragraph: item.Paragraph, // Include the Paragraph property
      destinationImage: item.destinationImage,
      Destination_SM_Image: item.Destination_SM_Image };
  });

const DestiCms3St: React.FC<DestiCms3StProps> = ({ children }) => {
    const router = useRouter();
    const { student } = router.query;
    const id = student as string;
    // const href = student ? `/studentlist/${student}/checkout` : '';

    return (
      <div>
        <_Builtin.Link
        className={_utils.cx(_styles, "button_component")}
        button={false}
        dyn={{
            bind: {},
        }}
        block="inline"
        options={{
            href: "",
        }}
        
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
      </div>
    );
  };

export default DestiCms3St