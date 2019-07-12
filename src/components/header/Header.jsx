import React, { useState } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import "../../style/components/Header.css";
import "../../style/components/Header_rwd.css";

import logo from "../../images/logo/Logo.png";

const Header = ({ scrollCallback }) => {
  // const [element, setElement] = useState();
  return (
    <div id="header">
      <div className="logo">
        <img src={logo} alt="superbill.co" />
      </div>
      <div className="menu">
        <ul>
          <li onClick={() => scrollCallback("serviceItems")}>服務項目</li>
          <li onClick={() => scrollCallback("coopProcess")}>合作流程</li>
          <li onClick={() => scrollCallback("nativeDev")}>原生開發？</li>
          <li>聯絡我們</li>
        </ul>
      </div>

      <div className="chart_circle">
        <div className="chart_circle_b" />
        <div className="chart_circle" />
      </div>
    </div>
  );
};

export default Header;
