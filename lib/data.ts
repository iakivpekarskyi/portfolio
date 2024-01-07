import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import fil from '@/public/fil.jpg';
import kor from '@/public/kor.jpg';
import wat from '@/public/wat.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Ice-Latte Coffee',
    description:
      'I am currently working as a front-end developer on this startup project for 3 months now. Users can choose coffee they like and add it to their cart.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Jest'],
    imageUrl: fil,
  },
  {
    title: 'Zdrave Zhyttia',
    description:
      'Full stack project with administration panel for a cow shelter. I was the front-end developer. It has features like booking, search and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: kor,
  },
  {
    title: 'Water tracker',
    description:
      'A public web app for keeping track of water intake. It show your dauly norma. Easily adjustable for different users after loging in.',
    tags: ['React', 'Next.js', 'MongoDB', 'Styled-components', 'Redux'],
    imageUrl: wat,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Styled-components',
  'MongoDB',
  'Redux',
  'Framer Motion',
] as const;
