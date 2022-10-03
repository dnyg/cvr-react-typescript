import React from 'react'
import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'
import { Icon } from '../Components/Icon'
import { StyledLink } from '../Components/StyledLink'
import { Data } from '../Data'

const Header = () => {
  const {
    title: { mainTitle, earthIcon, textIcons, titleLinks },
  } = Data
  
  return (
    <>
      <Wrapper>
        <h1>{mainTitle} </h1>
        <SmallLinks>
          {earthIcon.map((item) => <Icon key={item.id} {...item} />)}
        </SmallLinks>
        <LinkText>
          {textIcons.map((item) => <StyledLink key={item.id} {...item} />)}
        </LinkText>
      </Wrapper>
      <Links>
        {titleLinks.map((item) => <StyledLink linktype='top' size='1.2rem' key={item.id} {...item} />
        )}
        <hr />
      </Links>
    </>
  )
}

const SmallLinks = styled.div`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`

const LinkText = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`

const Wrapper = styled(CenterComponent)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;

  h1 {
    font-size: 1.33rem;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 1.66rem;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`

const Links = styled(CenterComponent)`
  align-self: flex-start;

  p {
    color: red;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 20rem;
  }
`

export default Header
