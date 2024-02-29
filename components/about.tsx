'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hook';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'>
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in{' '}
        <span className='font-medium'>Law</span>, I transitioned to pursue my
        passion for programming. I enrolled in a coding bootcamp and mastered{' '}
        <span className='font-medium'>frontend web development</span>.{' '}
        <span className='italic'>Problem-solving</span> is my favorite part of
        programming, and I cherish the satisfaction of finding solutions. My
        core stack includes{' '}
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
        </span>
        , with proficiency in
        <span className='font-medium'> TypeScript and Tailwind</span>. Eager to
        explore new technologies, I`m currently seeking a{' '}
        <span className='font-medium'>
          full-time frontend developer position
        </span>
        .
      </p>

      <p>
        <span className='italic'>When I`m not coding</span>, I find joy in
        hiking, capturing moments through photography, and learning new things.
        Additionally, I`m honing my skills in{' '}
        <span className='font-medium'>learning new languages</span>.
      </p>
    </motion.section>
  );
}
