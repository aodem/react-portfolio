import React from 'react';
import Container from '../../container';
import ContentContainer from '../../contentContainer';
import Header from '../../header';
import CustomList from '../../customList';
import CustomListItems from '../../customListItems';
import AppShot from '../../appShots';

function Experience() {
    return (
      <Container styling="mainWrapper">
        <ContentContainer styling="experience-main">
          <ContentContainer styling="pro">
            <ContentContainer styling="resume-cont">
              <embed
                src={
                  process.env.PUBLIC_URL +
                  "assets/Tech Resume.pdf#toolbar=0"
                }
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </ContentContainer>
          </ContentContainer>
          <ContentContainer styling="portfolio">
            <Header styling="portHeader">Portfolio</Header>
            <ContentContainer styling="screenCont">
              <AppShot
                styling="screenShot"
                image="/assets/whatslocal.png"
                link="https://hidden-wave-81361.herokuapp.com/"
              />
              <AppShot
                styling="screenShot"
                image="/assets/dreamDropShot.png"
                link="https://peaceful-mesa-33938.herokuapp.com/"
              />
              <AppShot
                styling="screenShot"
                image="/assets/reactMemoryGame.png"
                link="https://aodem.github.io/Memory-Game-React/"
              />
            </ContentContainer>
          </ContentContainer>
        </ContentContainer>
        <ContentContainer styling="experience-addition">
          <ContentContainer styling="custom-list">
            <Header styling="list-title">Front-End Technologies</Header>
            <ContentContainer styling="front-end-tech">
              <CustomList styling="counters">
                <CustomListItems styling="item">React JS</CustomListItems>
                <CustomListItems styling="item">Redux</CustomListItems>
                <CustomListItems styling="item">Bootstrap</CustomListItems>
                <CustomListItems styling="item">Handlebars</CustomListItems>
                <CustomListItems styling="item">CSS</CustomListItems>
                <CustomListItems styling="item">HTML5</CustomListItems>
              </CustomList>
            </ContentContainer>
            <Header styling="list-title">Back-End Technologies</Header>
            <ContentContainer styling="back-end-tech">
              <CustomList styling="counters">
                <CustomListItems styling="item">Node JS</CustomListItems>
                <CustomListItems styling="item">Express JS</CustomListItems>
                <CustomListItems styling="item">MySQL</CustomListItems>
                <CustomListItems styling="item">MongoDB</CustomListItems>
                <CustomListItems styling="item">Jquery</CustomListItems>
              </CustomList>
            </ContentContainer>
            <Header styling="list-title">Languages I Speak</Header>
            <ContentContainer styling="languages list-title">
              <CustomList styling="counters">
                <CustomListItems styling="item">Javascript</CustomListItems>
                <CustomListItems styling="item">Go</CustomListItems>
              </CustomList>
            </ContentContainer>
          </ContentContainer>
        </ContentContainer>
      </Container>
    );
}

export default Experience;