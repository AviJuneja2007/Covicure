import React, { useState } from "react";
import "./donorshow.css";
import Menu from "./donordata.js";
//import donordata from ".../models/donorSchema"
import MenuCard from "./donorCard";
import Navbar from "./donorbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.bloodgrp;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (bloodgrp) => {
    if (bloodgrp === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.bloodgrp === bloodgrp;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
