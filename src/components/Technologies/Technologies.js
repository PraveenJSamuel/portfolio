import React from 'react';
import { 
  DiHtml5, 
  DiCss3, 
  DiReact,
  DiNpm,
  DiJavascript1,
  DiNodejsSmall,
  DiGitBranch,
  DiMongodb } from 'react-icons/di'
import { SiRedux, SiJavascript, SiGatsby, SiReact, SiGraphql } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechItem } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Describe what you've worked with
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            <TechItem>
              <SiJavascript size='3rem' /> JavaScript
            </TechItem>
            <TechItem>
              <DiHtml5 size='3rem' /> HTML 5
            </TechItem>
            <TechItem>
              <DiCss3 size ='3rem'/> CSS 3
            </TechItem>
            <TechItem>
              <SiReact size='3rem'/> React
            </TechItem>
            <TechItem>
              <SiRedux size='3rem'/> React-Redux
            </TechItem>
            <TechItem>
              <DiNpm size='3rem'/> npm
            </TechItem>
            <TechItem>
               <DiReact size='3rem' /> Material-UI
            </TechItem>
            <TechItem>
              <DiJavascript1 size='3rem' /> NextJS
            </TechItem>
            <TechItem>
              <SiGatsby size='3rem' /> GatsbyJS
            </TechItem>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            <TechItem>
              <DiMongodb size='3rem' /> MongoDB
            </TechItem>
            <TechItem>
              <DiNodejsSmall size='3rem' /> Node
            </TechItem>
            <TechItem>
              <DiJavascript1 size='3rem' /> Express
            </TechItem>
            <TechItem>
              <DiGitBranch size='3rem' /> Git
            </TechItem>
            <TechItem>
              <AiOutlineConsoleSql size='3rem' /> SQL
            </TechItem>
            <TechItem>
              <SiGraphql size='3rem' /> GraphQL
            </TechItem>
            <TechItem>
              <SiRedux size='3rem' /> Redux
            </TechItem>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
 </Section>
);

export default Technologies;
