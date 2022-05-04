import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="Logo">
        <img src={Logo} alt="Logo img" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              onClick={() => setSelected(index)}
              key={index}
            >
              <div>
                <item.icon />
              </div>
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
