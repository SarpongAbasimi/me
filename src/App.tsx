import React, { useEffect, useRef, useState } from 'react'
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

export function App() {
  const initialSpring = useSpring({
    to: { color: 'gold' },
    from: fontAwesonIconCss,
    config: {
      duration: 1000,
      easing: easings.easeInCirc,
    },
  })

  let spingAnimationWhenHover = useSpring({
    to: { color: 'red' },
    from: { ...fontAwesonIconCss, color: 'gold' },
    config: {
      duration: 1000,
      easing: easings.easeInOutElastic,
    },
  })

  let [sprintEffect, setSprintEffect] = useState(initialSpring)

  return (
    <>
      <Router>
        <Nav styles={navCss}>
          <NavLinks
            links={[
              { id: 'blog', to: '/blog', name: 'Blog' },
              { id: 'projects', to: '/projects', name: 'Projects' },
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
                  onMouseOver={() => setSprintEffect(spingAnimationWhenHover)}
                  onMouseLeave={() => setSprintEffect(initialSpring)}
                >
                  <FontAwesomeIcon icon={value.fontAwesonIcon} />
                </animated.a>
              )
            })}
          </NavLinks>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
