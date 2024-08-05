import { NextPage } from "next";
import { Contact } from "../devlink/Contact";
import { Footer } from "../devlink/Footer";
import { ContactSecond} from "@/devlink";
const ContactUs: NextPage = () => {
    return (
        <>
        <Contact/>
        <ContactSecond />
        <Footer />
        </>
    );
};

export default ContactUs;