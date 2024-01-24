import {Route, Routes, useLocation} from "react-router-dom";
import {Tabs, Tab} from "@nextui-org/react";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";

function AppTabs() {
  const {pathname} = useLocation("/");

  return (
    <div className="flex flex-col gap-2">
      <Tabs selectedKey={pathname} aria-label="Tabs">
        <Tab id="/" href="/" title="Home" />
        <Tab id="/about" href="/about" title="About" />
        <Tab id="/contact" href="/contact" title="Contact" />
      </Tabs>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AppTabs;