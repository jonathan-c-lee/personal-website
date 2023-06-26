import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  open: {
    display: "block",
    backgroundColor: ["transparent", "rgba(0, 0, 0, 0.5)"],
    backdropFilter: ["blur(0px)", "blur(8px)"],
    transition: {
      duration: 0.5,
      times: [0, 1]
    }
  },
  closed: {
    backgroundColor: ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.5)", "transparent"],
    backdropFilter: ["blur(8px)", "blur(8px)", "blur(0px)"],
    transition: {
      duration: 0.5,
      times: [0, 0.75, 1]
    },
    transitionEnd: {
      display: "none"
    }
  }
};

interface MenuBackgroundBlurProps {
  isOpen: boolean;
  close: React.MouseEventHandler<HTMLDivElement>;
}

const MenuBackgroundBlur = ({ isOpen, close }: MenuBackgroundBlurProps): JSX.Element => {
  return (
    <motion.div
      onClick={close}
      initial={false}
      animate={ isOpen ? "open" : "closed" }
      variants={variants}
      className="select-none fixed top-0 right-0 w-screen h-screen z-[99] bg-transparent"
    />
  );
};

export default MenuBackgroundBlur;