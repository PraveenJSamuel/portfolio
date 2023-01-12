import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => {


  return (
    <Section>
      <SectionDivider />
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          I'm a full-stack engineer with experience in the development and deployment of web applications. Skilled in both back-end and front-end development using OOP and functional languages. I've developed applications using React, Typescript, and Node. I'm well-versed in JavaScript development and comfortable working with frameworks. 
        </SectionText>
    </Section>
  );
};

export default About;
