import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Parallax from 'components/Parallax/Parallax.js'

import styles from 'assets/jss/material-kit-react/views/landingPage.js'

// Sections for this page
import ProductSection from './Sections/ProductSection.js'
// import TeamSection from './Sections/TeamSection.js'
import WorkSection from './Sections/WorkSection.js'

const useStyles = makeStyles(styles)

export default function LandingPage() {
  const classes = useStyles()
  return (
    <div>
      <Parallax filter image={require('assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Let’s navigate this together.</h1>
              <h4>
                COVID-19 has led to mass unemployment globally. NextStep is a
                simple easy-to-use platform to help you understand what
                financial aid, benefits and other resources you are eligible for
                and help you navigate through what’s next. We’re in this
                together 💪
              </h4>
              <br />
              <Button
                color="warning"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET STARTED
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection />
        </div>
      </div>
    </div>
  )
}
