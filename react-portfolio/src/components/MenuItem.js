/* eslint-disable no-sequences */
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const onMouseOver = event => {
  const el = event.target;
  el.style.color = "#FFD700";
};

const onMouseOut = event => {
  const el = event.target;
  let black = "#EEFBFB";
  el.style.color = black;
};

const colors = ["#4DA8DA", "#007CC7", "#4DA8DA", "#007CC7"];
const options = ["Home", "About", "Portfolio", "Contact Me"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const style2 = { backgroundColor: `${colors[i]}`};
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1}}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style2} />
      <div className="text-placeholder" style={style, style2}>
        <h5 className="menuText" style={ {color: "#eeeeee"} } onMouseEnter={event => onMouseOver(event)} onMouseOut={event => onMouseOut(event)}>{options[i]}</h5> 
      </div>
    </motion.li>
  );
};
