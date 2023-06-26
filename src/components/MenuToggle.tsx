import React, { useState } from 'react';
import { motion } from 'framer-motion';

const animationTime = 0.2;

const Path = (props: any): JSX.Element => {
  return (
    <motion.path
      fill="none"
      stroke="rgba(255, 255, 255, 1)"
      strokeWidth="2"
      strokeLinecap="round"
      transition={{ duration: animationTime }}
      {...props}
    />
  );
};

const pathHoverVariant = {
  stroke: [null, null, "rgba(95, 75, 139, 1)"],
  transition: { times: [0, 0.75, 1] }
}

interface MenuToggleProps {
  isOpen: boolean;
  toggle: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuToggle = ({ isOpen, toggle }: MenuToggleProps): JSX.Element => {
  const [isHovered, setHovered] = useState(false);
  const variant = [isOpen ? "open" : "closed"];
  if (isHovered) variant.push("hovered");

  return (
    <motion.button
      onClick={toggle}
      onHoverStart={ () => setHovered(true) }
      onHoverEnd={ () => setHovered(false) }
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        scale: 1.05,
        transition: {
          duration: animationTime,
          delay: animationTime
        }
      }}
      whileTap={{ scale: 1.1 }}
      initial={false}
      animate={variant}
      className="select-none cursor-pointer fixed z-[999] bg-transparent outline-none border-none top-6 right-6 w-20 h-20 rounded-full"
    >
      <svg className="w-full h-full block m-auto" viewBox="0 0 36 36">
        <motion.circle
          fill="transparent"
          cx="50%"
          cy="50%"
          r="48%"
          stroke="rgba(255, 255, 255, 1)"
          strokeWidth="1.5"
          initial={false}
          animate={ isHovered ? { pathLength: 1 } : { pathLength: 0 } }
          transition={{ duration: animationTime }}
        />
        <Path
          variants={{
            open: { d: "M 12 12 L 24 24" },
            closed: { d: "M 9.75 12.75 L 26.25 12.75" },
            hovered: pathHoverVariant
          }}
        />
        <Path
          d="M 9.75 18 L 26.25 18"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
            hovered: pathHoverVariant
          }}
        />
        <Path
          variants={{
            open: { d: "M 12 24 L 24 12" },
            closed: { d: "M 9.75 23.25 L 26.25 23.25" },
            hovered: pathHoverVariant
          }}
        />
      </svg>
    </motion.button>
  );
};

export default MenuToggle;