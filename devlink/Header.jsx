import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _style from "./header.module.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
// import checkout from "../../data/checkout.json";
import checkout  from '../pages/data/destiId.json';


const Header = () => {
  const [student, setSelectedDestination] = useState(null);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [option, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [value, setValue] = useState('')
  const router = useRouter();
  // const { student } = router.query;
  // const id = student ;

  const handleSelect = (event) => {
    setValue(event.target.value);
    setSelectedDestination(event.target.value);
  };

  const handleSubmit = () => {
    if (student) {
      const queryParams = new URLSearchParams({
        destination: student,
        startDate: format(date[0].startDate, "dd/MM/yyyy"),
        endDate: format(date[0].endDate, "dd/MM/yyyy"),
        adults: option.adult,
        children: option.children,
        rooms: option.room,
      });
  
      router.push(`/studentlist/${student}/book1?${queryParams}`);
    }
  };


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };


  return (
    <>
    <div className={_style.header}>
      <div className={_style.headerContainer}>
      <div className={_style.headerSearch}>
        <div className={_style.headerSearchItem}>
          <FontAwesomeIcon icon={faBed} className={_style.headerIcon} />
          <div className={_style.dropdown}>
              <div className={_style.drop}>
                <select onChange={handleSelect}
                  value={value}
                  className={_style.placeholder}>
                  <option disabled value="" >Where are you going ?</option>
                  {checkout.map((destination) => (
                      <option key={destination.id} value={destination.id}>
                        {destination.Heading}
                      </option>
                    ))}
                </select>
              </div>
          </div>
        </div>
        <div className={_style.headerSearchItem}>
            <FontAwesomeIcon icon={faCalendarDays} className={_style.headerIcon} />
            <span
              onClick={() => setOpenDate(!openDate)}
              className={_style.headerSearchText}
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className={_style.date}
                minDate={new Date()}
              />
            )}
        </div>
        <div className={_style.headerSearchItem}>
                  <FontAwesomeIcon icon={faPerson} className={_style.headerIcon} />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className={_style.headerSearchText}
                  >{`${option.adult} adult · ${option.children} children · ${option.room} room`}</span>
                  {openOptions && (
                    <div className={_style.options}>
                      <div className={_style.optionItem}>
                        <span className={_style.optionText}>Adult</span>
                        <div className={_style.optionCounter}>
                          <button
                            disabled={option.adult <= 1}
                            className={_style.optionCounterButton}
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className={_style.optionCounterNumber}>
                            {option.adult}
                          </span>
                          <button
                            className={_style.optionCounterButton}
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className={_style.optionItem}>
                        <span className={_style.optionText}>Children</span>
                        <div className={_style.optionCounter}>
                          <button
                            disabled={option.children <= 0}
                            className={_style.optionCounterButton}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className={_style.optionCounterNumber}>
                            {option.children}
                          </span>
                          <button
                            className={_style.optionCounterButton}
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className={_style.optionItem}>
                        <span className={_style.optionText}>Room</span>
                        <div className={_style.optionCounter}>
                          <button
                            disabled={option.room <= 1}
                            className={_style.optionCounterButton}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className={_style.optionCounterNumber}>
                            {option.room}
                          </span>
                          <button
                            className={_style.optionCounterButton}
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
        </div>
        <div className={_style.headerSearchItem}>
        <button className={_style.headerBtn} onClick={handleSubmit}>
          Submit
        </button>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}
export default Header;