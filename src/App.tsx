import "./App.css";
import styled from "styled-components";
import { Discord, Facebook, Instagram, Linkedin, Reddit, Twitter } from '@icons-pack/react-simple-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faVrCardboard } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <StyledScope>
      <StyledMain>
        <img src="assets/images/logo.png" alt="Web 3 Philippines Logo" />
        <h1>Web 3 Philippines</h1>
        <h2>Helping Filipinos build in the Web3 space!</h2>
        <section>
          <a
            href="https://directory.web3philippines.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faAddressBook} className='icon-style' size="lg" /> Directory
          </a>
          <a
            href="mailto:sudo@web3philippines.org?subject=GM%2C%20Web3%20Philippines%20Team!&body=LPG%20mga%20kabatak!"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faEnvelope} className='icon-style' size="lg" /> Contact Us
          </a>
          <a
            href="https://web3philippines.org/discord"
            target="_blank"className='icon-style'
            rel="noreferrer noopener"
          >
            <Discord color='#fff' size={24} className='icon-style'/> Discord
          </a>
          <a
            href="https://facebook.com/web3phl"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Facebook color='#fff' size={24} className='icon-style'/> Page
          </a>
          <a
            href="https://facebook.com/groups/web3philippines"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Facebook color='#fff' size={24} className='icon-style'/> Group
          </a>
          <a
            href="https://twitter.com/web3phl"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Twitter color='#fff' size={24} className='icon-style'/> Twitter
          </a>
          <a
            href="https://app.gather.town/app/EgdJnVXXhokxeu8g/web3philippines"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faVrCardboard} className='icon-style' size="lg" /> Gather
          </a>
          <a
            href="https://linkedin.com/company/web3phl"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Linkedin color='#fff' size={24} className='icon-style'/> Linkedin
          </a>
          <a
            href="https://instagram.com/web3phl/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Instagram color='#fff' size={24} className='icon-style'/> Instagram
          </a>
          <a
            href="https://reddit.com/r/web3philippines"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Reddit color='#fff' size={24} className='icon-style'/> Reddit
          </a>
        </section>
      </StyledMain>
    </StyledScope>
  );
}

const StyledScope = styled.div`
  background: rgb(1, 110, 234);
  background: -moz-radial-gradient(
    circle,
    rgba(1, 110, 234, 1) 0%,
    rgba(123, 63, 228, 1) 62%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(1, 110, 234, 1) 0%,
    rgba(123, 63, 228, 1) 62%
  );
  background: radial-gradient(
    circle,
    rgba(1, 110, 234, 1) 0%,
    rgba(123, 63, 228, 1) 62%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#016eea",endColorstr="#7b3fe4",GradientType=1);
`;

const StyledMain = styled.main`
  padding: 10vw;
  box-sizing: border-box;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100;
  min-height: 100vh;

  color: white;

  img {
    width 150px;
  }

  h1 {
    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-size: 2em;
    margin-top: 0.5em;
    margin-bottom: 0.1em;
    text-align: center;
  }

  h2 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 1.2em;
    text-align: center;
  }
  
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
  }

  a {
    margin-top: 20px;
    display: block;
    text-decoration: none;
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    background-color: #7b3fe4;
    border-radius: 20px;
    padding: 20px;
    transition: transform 0.2s ease-in-out;
    border: 1px solid transparent;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: translateY(-10px);
      border: 1px solid white;
    }
  }

  .icon-style {
    margin-right: 10px;
  }
  
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 1em;
    }
  }

  @media only screen and (max-width: 768px) {
    section {
      grid-template-columns: 1fr;
    }
  }
`;

export default App;
