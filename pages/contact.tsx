import { NextPage } from "next";
import Link from "next/link";
import { Contact } from "../devlink/Contact";
import { Footer } from "../devlink/Footer";
import { ContactMap, ContactSecond} from "@/devlink";
const ContactUs: NextPage = () => {
    return (
        <>
        <Contact/>
        <ContactSecond />
        <ContactMap/>
        <Footer />
        </>
    );
};

export default ContactUs;