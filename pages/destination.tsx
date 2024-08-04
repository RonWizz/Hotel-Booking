import { NextPage } from "next";
import { Destination } from "../devlink/Destination";
import { Footer } from "../devlink/Footer";
import { DestinationCollection } from "./studentlist";
const Destiny: NextPage = () => {
    return (
        <>
        <Destination/>
        <DestinationCollection/>
        <Footer />
        </>
    );
};

export default Destiny;