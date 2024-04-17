'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './page.module.scss';
import useMousePosition from './utils/useMousePosition';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 100;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
          {"I'm"} a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>{"I'm"} a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>

    </main>
  )
}
