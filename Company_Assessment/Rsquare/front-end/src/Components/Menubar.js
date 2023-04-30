import React from "react";
import {
  MdDashboard,
  MdStickyNote2,
  MdCalendarToday,
  MdNotificationsActive,
  MdCall,
  MdOutlineAdsClick,
} from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import "./Menubar.css";
const Menubar = () => {
  return (
    <div className="Menubar">
      <div className="menuLogo">LOGO</div>
      <div className="menuContent">
        <ul>
          <li className="menuEntity active">
            <div className="menuSideActive"></div>
            <div className="iconHeading active">
              <MdDashboard style={{ marginRight: "0.5rem" }} />
              Dashboard
            </div>
          </li>
          <li className="menuEntity">
            <div className="iconHeading">
              <MdStickyNote2 style={{ marginRight: "0.5rem" }} />
              Project
            </div>
          </li>
          <li className="menuEntity">
            <div className="iconHeading">
              <MdCalendarToday style={{ marginRight: "0.5rem" }} />
              Calendar
            </div>
          </li>
          <li className="menuEntity">
            <div className="iconHeading">
              <FaTelegramPlane style={{ marginRight: "0.5rem" }} />
              Messages
            </div>
            <div className="notify">
              <div className="notifyMessage">5</div>
            </div>
          </li>
          <li className="menuEntity">
            <div className="iconHeading">
              <MdNotificationsActive style={{ marginRight: "0.5rem" }} />
              Notifications
            </div>
            <div className="notify">
              <div className="notifyMessage">5</div>
            </div>
          </li>
          <li className="menuEntity">
            <div className="iconHeading">
              <MdCall style={{ marginRight: "0.5rem" }} />
              Contacts
            </div>
          </li>
        </ul>

        <ul>
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: "500",
              marginBottom: "0.5rem",
              paddingLeft: "1.5rem",
            }}
          >
            Promotions
          </div>
          <li className="menuEntity">
            <div className="iconHeading">
              <MdOutlineAdsClick style={{ marginRight: "0.5rem" }} />
              Promotions
            </div>
            {/* <div className="notify">
              <div className="notifyMessage"></div>
            </div> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
