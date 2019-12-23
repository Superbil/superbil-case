import React from "react";

export default function GetManualBlock({ children, sort }) {
  return (
    <div className={`getManual_block getManual_${sort}`}>
      <div className="getManual_info">
        {children}
        <div className="getManual_email">
          <input type="text" placeholder="您的 Email" />
          <input type="button" value="領取建議手冊" />
        </div>
      </div>

      <div className={`getManual_bg_${sort}`}>
        {sort === "sec" ? (
          <div>
            <div className="chart_circle_b" />
            <div className="chart_circle" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
