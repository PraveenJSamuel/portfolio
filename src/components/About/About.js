import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => {


  return (
    <Section>
      <SectionDivider />
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          I'm a full-stack engineer with experience in the development and deployment of web applications. My career began with studying web and graphic design in college before beginning my coding journey as a JavaScript developer. Coming from a non-traditional coding education, I focused on learning modern technologies while striving to become a good developer. Leveraging my passion for learning has helped me to become a flexible, open-minded engineer and I'm always looking for ways to grow.
          Outside of my interest in tech, I'm an avid consumer of movies, music and TV. I enjoy exploring local scenery and discovering fun new things to do. I'm also a hobby musician and digital painter with a love for all things related to visual art. 
        </SectionText>
    </Section>
  );
};

export default About;
