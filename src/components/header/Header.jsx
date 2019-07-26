import React, { useState } from "react";
import "../../style/components/Header.css";

//imgs
import logo from "../../images/logo/Logo.png";
import icn_ham from "../../images/icon/icn_ham.svg";

const Header = ({ scrollCallback, rwd_header_status }) => {
  const [menu_status, setmenu_status] = useState(false);
  return (
    <div id={rwd_header_status ? "header_ham" : "header"}>
      <div className="logo" onClick={() => scrollCallback("top")}>
        <img src={logo} alt="superbill.co" />
      </div>
      <div className="icn_ham" onClick={() => setmenu_status(!menu_status)}>
        <img src={icn_ham} alt="menu" />
      </div>
      <div className={menu_status ? "menu menu-open" : "menu"}>
        <ul>
          <li onClick={() => scrollCallback("serviceItems")}>
            <span>服務項目</span>
          </li>
          <li onClick={() => scrollCallback("coopProcess")}>
            <span>合作流程</span>
          </li>
          <li onClick={() => scrollCallback("nativeDev")}>
            <span>原生開發？</span>
          </li>
          <li onClick={() => scrollCallback("contactUs")}>
            <span>聯絡我們</span>
          </li>
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
