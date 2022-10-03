import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../Components/GlobalStyles'
import Footer from './Footer'
import Navigation from './Navigation';

const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color: '#fff',
  background: '#222',
}

const Layout = () => {
  const [baseTheme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!baseTheme)
  }

  return (
    <>
      <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
        <GlobalStyles />
        <Container>
          <Navigation />
          <ContentWrapper>
            <Button onClick={toggleTheme}>sdf</Button>
            <Outlet />
          </ContentWrapper>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

const Container = styled.div`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`

const Button = styled.button`
  margin-left: auto;
  margin-right: 0;
  width: 1rem;
  height: 0.5rem;
  border: none;
  color: ${BaseTheme.background};
`

const ContentWrapper = styled.div`
  display: flex;
  background-color: #f2f2f2;
  min-height: 75vh;
  flex-direction: column;
  align-items: center;
`
export default Layout
