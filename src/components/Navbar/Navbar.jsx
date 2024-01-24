import React from "react";
import {Tabs, Tab} from "@nextui-org/react"; 
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
    
const NavBar = () => {
    //const [selected, setSelected] = React.useState("home");
    const {pathname} = useLocation();
  return (
        <div className="flex fixed flex-wrap gap-4 z-10">
            <Tabs  
                color="default" 
                aria-label="NavBar" 
                radius="sm"
                variant="solid"
                selectedKey={pathname}
                //onSelectionChange={setSelected}
            >
                <Tab id="/" title="Home" href="/" />
                <Tab id="/about" title="About" href="/about" />
                <Tab id="/projects" title="Projects" href="/projects" />
                <Tab id="/contact" title="Contact" href="/contact" />
            </Tabs>
        </div>
  ); 
};

export default NavBar;