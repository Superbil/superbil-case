import React from "react";
import "../../style/components/Header.css";
import "../../style/components/Header_rwd.css";

import logo from "../../images/logo/Logo.png";

function Header() {
  return (
    <div id="header">
      <div className="logo">
        <img src={logo} alt="superbill.co" />
      </div>
      <div className="menu">
        <ul>
          <li>服務項目</li>
          <li>合作流程</li>
          <li>原生開發？</li>
          <li>聯絡我們</li>
        </ul>
      </div>

      <div className="chart_circle">
        <div className="chart_circle_b" />
        <div className="chart_circle" />
      </div>
    </div>
  );
}

export default Header;
