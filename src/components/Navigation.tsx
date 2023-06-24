import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuToggle from './MenuToggle.tsx';

const Navigation = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.nav>
      <MenuToggle isOpen={isOpen} toggle={ () => setOpen(!isOpen) } />
    </motion.nav>
  );
};

export default Navigation;