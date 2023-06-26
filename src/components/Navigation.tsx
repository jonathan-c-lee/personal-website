import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuToggle from './MenuToggle.tsx';
import MenuBackgroundBlur from './MenuBackgroundBlur.tsx';
import Menu from './Menu.tsx';

const Navigation = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.nav animate={ isOpen ? "open" : "closed" }>
      <MenuToggle isOpen={isOpen} toggle={ () => setOpen(!isOpen) } />
      <Menu isOpen={isOpen} />
      <MenuBackgroundBlur isOpen={isOpen} close={ () => setOpen(false) }/>
    </motion.nav>
  );
};

export default Navigation;