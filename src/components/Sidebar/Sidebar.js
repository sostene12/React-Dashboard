import { UilSignOutAlt, UilBars, UilTimes } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <UilTimes /> : <UilBars />}
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
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
                onClick={() => {
                  setSelected(index);
                  setExpanded(!expanded);
                }}
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
      </motion.div>
    </>
  );
};

export default Sidebar;
