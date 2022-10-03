import styled from "styled-components"
import Logo from "../Components/Logo"
import { StyledLink } from "../Components/StyledLink"
import { Data } from "../Data"

const Footer = () => {
  const {
    footer: { firstColumn, secondColumn, thirdColumn },
  } = Data

  return (
    <Wrapper>
      <footer className='footer-container'>
        <section className='footer-section'>
          <Logo />
        </section>
        <section className='footer-section'>
          {firstColumn.map((item, index) => {
            return (
              <StyledLink
                odd={(index + 1) % 2 !== 0}
                linktype='footer'
                {...item}
                key={item.id}
                size='1rem'
              />
            )
          })}
          <hr />
        </section>
        <section className='footer-section'>
          {secondColumn.map((item, index) => {
            return (
              <StyledLink
                first={index === 0}
                linktype='footer'
                {...item}
                key={item.id}
                size='1rem'
              />
            )
          })}
          <hr />
        </section>
        <section className='footer-section'>
          {thirdColumn.map((item, index) => {
            return (
              <StyledLink
                first={index === 0}
                linktype='footer'
                {...item}
                key={item.id}
                size='1rem'
              />
            )
          })}
        </section>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  .footer-container {
    min-height: 19rem;
    width: 100%;
    display: flex;
    border: none;
    padding: 10px;
    box-shadow: 0 0 10px 0 #888888;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
    padding: 2rem 3rem;
  }

  .footer-section {
    font-size: 1.5rem;
    align-self: flex-start;
    margin-top: 0.75rem;
    margin-left: 2rem;
  }

  .footer-container hr {
    margin-top: 2rem;
  }

  @media screen and (min-width: 600px) {
    .footer-container {
      flex-direction: row;
    }

    .footer-section {
      flex: 0 0 43%;
    }
    .footer-container hr {
      display: none;
    }
  }

  @media screen and (min-width: 992px) {
    .footer-container {
      flex-wrap: nowrap;
    }

    .footer-section {
      flex: 0 0 calc(25% - 2rem);
      margin-top: 5rem;
    }
  }
`

export default Footer
