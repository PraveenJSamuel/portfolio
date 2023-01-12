import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyright &copy; 2023 Praveen J Samuel. All Rights Reserved</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/PraveenJSamuel'> <AiFillGithub size='3rem' /> <span style={{paddingLeft: '1rem'}}>@PraveenJSamuel</span> </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
