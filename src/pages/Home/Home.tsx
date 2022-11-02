import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { NavLinks } from '../../components/NavLinks/NavLinks'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Introduction } from '../../components/Introduction/Introduction'
import { summary } from '../../utils/summary'

export const Home = () => {
  const navLinksCss = {
    backgroundColor: 'gold',
    width: '5%',
    height: '40px',
  }

  const navCss = {
    backgroundColor: 'red',
    with: '100%',
    height: '50px',
  }

  return (
    <>
      <Nav styles={navCss}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <NavLinks
                  links={[{ id: 'home', to: '/', name: 'Home' }]}
                  styles={navLinksCss}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </Nav>
      <Introduction intro={summary}></Introduction>
    </>
  )
}
