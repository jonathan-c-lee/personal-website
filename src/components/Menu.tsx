import { motion } from 'framer-motion';

const variants = {
  open: {
    backgroundColor: "rgba(95, 75, 139, 1)",
    clipPath: "circle(150vh at 16rem 4rem)",
    transition: {
      duration: 0.75
    }
  },
  closed: {
    clipPath: "circle(2.5rem at 16rem 4rem)",
    transition: {
      duration: 0.5
    },
    transitionEnd: {
      backgroundColor: "transparent"
    }
  }
};

interface MenuProps {
  isOpen: boolean;
}

const Menu = ({ isOpen }: MenuProps): JSX.Element => {
  return (
    <motion.ul
      initial={false}
      animate={ isOpen? "open" : "closed" }
      variants={variants}
      className="fixed top-0 right-0 m-0 p-0 w-80 h-screen z-[998]"
    >
    </motion.ul>
  );
};

export default Menu;