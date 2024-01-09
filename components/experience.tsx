'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hook';
import { useTheme } from '@/context/theme-context';
import { ExperienceElement } from './expComponent';
export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();
  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <ExperienceElement key={index} theme={theme} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
