'use client';

import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';

type ExperienceElementProps = {
  theme: string;
  item: {
    date: string;
    icon: React.ReactNode;
    title: string;
    location: string;
    description: string;
  };
};

export const ExperienceElement = ({ theme, item }: ExperienceElementProps) => {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <div ref={ref} className='vertical-timeline-element'>
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background:
            theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          textAlign: 'left',
          padding: '1.3rem 2rem',
        }}
        contentArrowStyle={{
          borderRight:
            theme === 'light'
              ? '0.4rem solid #9ca3af'
              : '0.4rem solid rgba(255, 255, 255, 0.5)',
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === 'light' ? 'white' : 'rgba(29, 36, 50, 0.95)',
          fontSize: '1.5rem',
        }}>
        <h3 className='font-semibold capitalize'>{item.title}</h3>
        <p className='font-normal !mt-0'>{item.location}</p>
        <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
};
