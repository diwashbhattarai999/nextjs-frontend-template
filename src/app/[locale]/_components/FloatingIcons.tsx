'use client';

import React from 'react';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  Edit,
  FileText,
  GitCommit,
  Github,
  Globe,
  RefreshCw,
  Sun,
  User,
} from 'lucide-react';

export default function FloatingIcons() {
  const icons = [
    FileText,
    GitCommit,
    Github,
    RefreshCw,
    CheckCircle,
    Sun,
    Edit,
    Globe,
    User,
  ];

  const orbitRadius = 20;
  const loopDuration = 5; // duration of one full loop

  return (
    <div className='fixed -z-10 flex h-full w-full items-center justify-center'>
      <div className='relative flex size-full items-center justify-center rounded-full'>
        {icons.map((Icon, index) => {
          const angle = (index / icons.length) * 2 * Math.PI; // Calculate angle for each icon
          const x = Math.cos(angle) * orbitRadius; // X position
          const y = Math.sin(angle) * orbitRadius; // Y position

          const bounceIntensity = Math.random() * 0.5 + 0.5; // Randomize bounce intensity

          return (
            <React.Fragment key={index}>
              <motion.div
                className='fixed -z-20 flex size-[60rem] items-center justify-center rounded-full border border-dashed border-border/40 p-4'
                initial={{
                  x: `${x}rem`,
                  y: `${y}rem`,
                }}
              />
              <motion.div
                className='absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-neutral-900 to-neutral-500 p-3 text-primary-foreground shadow-md'
                key={index}
                animate={{
                  x: [
                    `${x}rem`,
                    `${x + bounceIntensity * Math.sin(angle)}rem`, // Sine for subtle side-to-side movement
                    `${x}rem`,
                    `${x - bounceIntensity * Math.sin(angle)}rem`, // Sine for subtle side-to-side movement
                    `${x}rem`,
                  ],
                  y: [
                    `${y}rem`,
                    `${y + bounceIntensity * Math.cos(angle)}rem`, // Cosine for subtle up-and-down movement
                    `${y}rem`,
                    `${y - bounceIntensity * Math.cos(angle)}rem`, // Cosine for subtle up-and-down movement
                    `${y}rem`,
                  ],
                }}
                initial={{
                  x: `${x}rem`,
                  y: `${y}rem`,
                }}
                transition={{
                  duration: loopDuration,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Icon className='size-5' />
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
