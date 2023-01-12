import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Praveen, <br /> 
          Full Stack Developer.
        </SectionTitle>
        <SectionText>
          I develop apps for the web using a wide range of skills and technologies.
        </SectionText>
        <Button onClick={() => {location.href='mailto:DevPraveenSamuel@Gmail.com?subject=Hello!' }} >Get In Touch</Button>
      </LeftSection>
  </Section>
);

export default Hero;