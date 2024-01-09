import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from contact form from portfolio website</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black '>
          <Container>
            <Section className='bg-white borderBlack px-10 py-4 my-10 rounded-md'>
              <Heading className='leading-tight'>
                You recieved a new message from contact form from portfolio
                website
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text> The sender`s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
