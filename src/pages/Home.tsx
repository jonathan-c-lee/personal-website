import { useRef } from 'react';
import { motion } from 'framer-motion';

const section = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 1
    }
  }
};

const p = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

const Home = (): JSX.Element => {
  const scrollRef = useRef(null);

  return (
    <motion.section
      ref={scrollRef}
      initial="hidden"
      whileInView="visible"
      variants={section}
      viewport={{ once: true }}
      className="snap-center bg-[url('./assets/home-background.JPG')] bg-image-full -z-[1] flex flex-col content-center justify-center text-center p-0 text-white"
    >
      <motion.p
        variants={p}
        viewport={{ root: scrollRef }}
        className="text-6xl before:horizontal-line after:horizontal-line"
      >
        Hey, I'm
      </motion.p>
      <motion.p
        variants={p}
        viewport={{ root: scrollRef }}
        className="text-9xl"
      >
        Jonathan Lee
      </motion.p>
      <motion.p
        variants={p}
        viewport={{ root: scrollRef }}
        className="text-5xl"
      >
        Software Engineer &#183; Roboticist &#183; Mechanical Engineer
      </motion.p>
    </motion.section>
  );
};

export default Home;