import React from "react";
import {Tabs, Tab} from "@nextui-org/react"; 
    
const NavBar = () => {
    const [selected, setSelected] = React.useState("about");
  return (
        <div className="flex fixed flex-wrap gap-4 z-10">
            <Tabs  
                color="default" 
                aria-label="Tabs colors" 
                radius="sm"
                variant="solid"
                selectedKey={selected}
                onSelectionChange={setSelected}
            >
                <Tab key="home" title="Home"/>
                <Tab key="about" title="About"/>
                <Tab key="projects" title="Projects"/>
                <Tab key="contact" title="Contact"/>
            </Tabs>
        </div>
  ); 
};

export default NavBar;