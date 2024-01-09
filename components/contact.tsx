'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hook';
import { m, motion } from 'framer-motion';
import SubmitBtn from './submit-btn';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  // State for the form fields
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('senderEmail', email);
    formData.append('message', message);

    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success('Email was sent successfully ');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Contact</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        {' '}
        Please contact me at:{' '}
        <a className='underline' href='mailto:pekarskiy88@gmail.com'>
          pekarskiy88@gmail.com
        </a>{' '}
        or through this from
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        onSubmit={handleSubmit}>
        <input
          type='email'
          name='senderEmail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={500}
          placeholder='Your email'
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        />
        <textarea
          placeholder='Your message'
          name='message'
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={5000}
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
