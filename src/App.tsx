import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <StyledScope>
      <StyledMain>
        <img src="assets/images/logo.png" alt="Web 3 Philippines Logo" />
        <h1>Web 3 Philippines</h1>
        <h2>Helping Filipinos build in the Web3 space!</h2>
        <section>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=fake-email@gmail.com&tf=cm"
            target="_blank"
            rel="noreferrer noopener"
          >
            fake-email@gmail.com
          </a>
          <a
            href="https://www.facebook.com/groups/web3philippines"
            target="_blank"
            rel="noreferrer noopener"
          >
            Facebook Group
          </a>
          <a
            href="https://www.facebook.com/web3phl"
            target="_blank"
            rel="noreferrer noopener"
          >
            Facebook Page
          </a>
          <a
            href="https://twitter.com/web3phl"
            target="_blank"
            rel="noreferrer noopener"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/web3phl/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>
        </section>
      </StyledMain>
    </StyledScope>
  );
}
// https://mail.google.com/mail/u/0/?fs=1&to=kmquirapas@gmail.com&tf=cm

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

    &:hover {
      transform: translateY(-10px);
      border: 1px solid white;
    }
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
