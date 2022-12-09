import "./App.css";
import styled from "styled-components";
import links from "./data/links";
import { linkType } from "./data/links";
import LinkButton from "./components/LinkButton";

function App() {
  return (
    <StyledScope>
      <StyledMain>
        <img src="assets/images/logo.png" alt="Web 3 Philippines Logo" />
        <h2>Helping Filipinos build in Web3 space! 🚀</h2>
        {["Community", "Socials", "Projects"].map((section: string) => {
          return (
            <section key={section} id={section.toLowerCase()}>
              <h3>{section}</h3>
              {links[section.toLowerCase() as keyof typeof links].map(
                (item: linkType) => {
                  return (
                    <LinkButton
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      url={item.url}
                      icon={item.icon}
                    />
                  );
                }
              )}
            </section>
          );
        })}
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100;
  min-height: 100vh;

  color: white;

  img {
    width: 100%;
    max-width: 270px;
    margin-bottom: 2em;
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

  h3 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.25em;
    text-align: center;
  }

  section {
    min-width: 350px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
  }

  section h3 {
    grid-column: span 2 / span 2;
    margin-bottom: 0px;
    margin-top: 40px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    line-height: 100%;
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
      grid-template-columns: repeat(1, minmax(0, 1fr));
      min-width: 175px;
    }

    section h3 {
      grid-column: span 1 / span 1;
    }
  }
`;

export default App;
