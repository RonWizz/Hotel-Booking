import { NextPage } from "next";
import Link from "next/link";
import { DestiCms1st } from "../devlink/DestiCms1st";
import { DestiCms2St } from "../devlink/DestiCms2St";
import { DestiCms3St } from "../devlink/DestiCms3St";
import { Footer } from "../devlink/Footer";
const DestinationCMS: NextPage = () => {
    return (
        <>
        <DestiCms1st/>
        <DestiCms2St />
        <DestiCms3St/>
        <Footer />
        </>
    );
};

export default DestinationCMS;