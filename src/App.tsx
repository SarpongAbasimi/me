import React, { useState } from 'react'
import './App.css'
import { Home } from './pages/Home/Home'
import { Nav } from './components/Nav/Nav'
import { NavLinks } from './components/NavLinks/NavLinks'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navSocials } from './utils/socialsLinks'
import {
  navLinksCss,
  navCss,
  liElementCss,
  fontAwesonIconCss,
} from './utils/stylesDefinitions'
import { useSpring, animated, easings } from 'react-spring'
import { CssStyleProps } from './Interfaces/Types'
import { Blog } from './pages/Blogs/Blog'
import { Vedios } from './pages/Vedios/Videos'

export function App() {
  const useSpringFunction = (to: CssStyleProps, from: CssStyleProps) => {
    return useSpring({
      to: to,
      from: from,
      config: {
        duration: 1000,
        easing: easings.easeInCirc,
      },
    })
  }

  const initialSpring = useSpringFunction({ color: 'gold' }, fontAwesonIconCss)

  let spingAnimationWhenHover = useSpring({
    to: { color: 'red' },
    from: { ...fontAwesonIconCss, color: 'gold' },
    config: {
      duration: 1000,
      easing: easings.easeInOutElastic,
    },
  })

  let [sprintEffect, setSprintEffect] = useState(initialSpring)

  const handleMouseOver = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    setSprintEffect(spingAnimationWhenHover)
    event.currentTarget.style.color = 'var(--textLink)'
  }

  return (
    <>
      {/* <Router>
        <Nav styles={navCss}>
          <NavLinks
            links={[{ id: 'main', to: '/profilo', name: 'SΩΨ' }]}
            ulElementStyles={{
              display: 'flex',
              alignItems: 'center',
            }}
            liElementStyles={{
              ...liElementCss,
              fontWeight: 'bold',
              fontSize: '20px',
            }}
            otherCssProps={{ textDecoration: 'none' }}
          ></NavLinks>
          <NavLinks
            links={[
              { id: 'blog', to: '/blog', name: 'Blog' },
              // { id: 'projects', to: '/projects', name: 'Projects' }, // Add back when ready
              { id: 'talks', to: '/talks', name: 'Talks' },
            ]}
            ulElementStyles={navLinksCss}
            liElementStyles={liElementCss}
            otherCssProps={{ textDecoration: 'none' }}
          >
            {navSocials.map((value, _) => {
              return (
                <animated.a
                  className={value.id}
                  href={value.link}
                  key={value.id}
                  style={sprintEffect}
                  onMouseOver={handleMouseOver}
                  onMouseLeave={() => setSprintEffect(initialSpring)}
                >
                  <FontAwesomeIcon
                    icon={value.fontAwesonIcon}
                    style={{ font: '5px', margin: '1px' }}
                  />
                </animated.a>
              )
            })}
          </NavLinks>
        </Nav>
        <Routes>
          <Route path="/profilo" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/talks" element={<Vedios />} />
        </Routes>
      </Router> */}
      <h1 style={{ color: 'red' }}>Hello</h1>
    </>
  )
}
