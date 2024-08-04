import { NextPage } from "next";
import { BookCms1st } from "../devlink/BookCms1st";
import { BookCms2nd } from "../devlink/BookCms2nd";
import { Footer } from "../devlink/Footer";
const BookingCMS: NextPage = () => {
    return (
        <>
        <BookCms1st/>
        <BookCms2nd/>
        <Footer />
        </>
    );
};

export default BookingCMS;