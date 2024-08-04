import { NextPage } from "next";
import Link from "next/link";
import { Accomodation } from "../devlink/Accomodation";
import { AccSecond } from "../devlink/AccSecond";
import { AccThird } from "../devlink/AccThird";
import { Footer } from "../devlink/Footer";
const Accomodate: NextPage = () => {
    return (
        <>
        <Accomodation/>
        <AccSecond />
        <AccThird />
        <Footer />
        </>
    );
};

export default Accomodate;