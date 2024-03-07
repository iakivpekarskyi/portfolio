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
    title: 'Frontend Developer',
    location: 'London, UK',
    description:
      "I'm now a frontend developer working on an open source project. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },

  {
    title: 'Frontend Developer',
    location: 'Kyiv, Ukraine',
    description:
      'I found work at a company that was bulding web-sites for charity institutions as a front-end developer. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
  {
    title: 'Graduated Online Academy',
    location: 'Kyiv, Ukraine',
    description:
      'I graduated after 12 months of studying as a full-stack developer. The stack includes React, Next.js, TypeScript, Tailwind and MongoDB, Node.js and Express.js.',
    icon: React.createElement(LuGraduationCap),
    date: '2022 - 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Iced-Latte Coffee',
    description:
      'I am currently working as a front-end developer on this startup project for 3 months now. Users can choose coffee they like and add it to their cart.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Jest'],
    imageUrl: fil,
    gitHubUrl: 'https://iced-latte.uk/',
  },
  {
    title: 'Zdrave Zhyttia',
    description:
      'Full stack project with administration panel for a cow shelter. I was the front-end developer. It has features like booking, search and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: kor,
    gitHubUrl: 'https://cows-shelter-frontend.vercel.app/',
  },
  {
    title: 'Water tracker',
    description:
      'A public web app for keeping track of water intake. It show your dauly norma. Easily adjustable for different users after loging in.',
    tags: ['React', 'Next.js', 'MongoDB', 'Styled-components', 'Redux'],
    imageUrl: wat,
    gitHubUrl: 'https://ruslan-ts.github.io/water-tracker-project/',
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
