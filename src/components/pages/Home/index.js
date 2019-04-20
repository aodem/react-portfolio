// serves as the home page of the portfolio
import React from 'react';
import Container from '../../container';
import ContentContainer from  '../../contentContainer';
import Button from '../../button';
import Header from '../../header';
import { Link } from 'react-router-dom';
import '../../../components/styles.css';

function Home() {
    return (
      <Container styling="mainWrapper">
        
        <ContentContainer styling="homeImageContainer">
          <img className="mainImage" src={process.env.PUBLIC_URL + `/assets/apartments-architecture.jpg`} alt='head shot' />  
        </ContentContainer>
        <ContentContainer styling="homeContentContainer">
          <div id="bio">
          BIO.
          </div>
          <Header styling="homeHeader">Welcome!</Header>
          <ContentContainer styling="miniBioContainer">
            <div>
              <p>Whatever the reason, I am glad that you are here. My name is <span id="name">Alex Odem</span> and I am a React developer with a full-stack education. I am a dreamer and aspire to impact my community in some way, shape or form. </p>
              <br/>
              <p>Traveling, cooking and having ginuine experiences are what I enjoy in life but over all I just want to make <span className="multi-color">d</span><span className="multi-color">o</span><span className="multi-color">p</span><span className="multi-color">e</span> stuff for the people. </p>
            </div>
          </ContentContainer>
          <Link to='/experience'>
            <Button name="Meat & Potatoes"/>
          </Link>
        </ContentContainer>
        
      </Container>
    );
}

export default Home;
