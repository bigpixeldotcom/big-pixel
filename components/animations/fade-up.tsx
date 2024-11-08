'use client';

import { motion } from 'framer-motion';

export const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function FadeUp({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div variants={fadeUpVariant} initial='initial' animate='animate'>
      {children}
    </motion.div>
  )
}