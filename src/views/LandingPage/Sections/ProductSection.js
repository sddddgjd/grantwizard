import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
import ListAlt from '@material-ui/icons/ListAlt'
import SearchIcon from '@material-ui/icons/Search'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js'

const useStyles = makeStyles(styles)

export default function ProductSection() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Get on track to financial stability in 10 minutes</h2>
          <h5 className={classes.description}>
            We guide you through what you need to do after you are laid off and handle all the heavy lifting. Spend 10 minutes filling out a bit of information, and we’ll help you apply for eligible grants, find jobs and manage finances.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Step-by-step guidance"
              description="Get back on track with ease. We’ve done all the research and simplified everything into a few simple steps. Apply for grants/aid -> find temporary jobs -> manage finances -> apply for full time jobs all on one platform."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Auto apply to grants"
              description="Fill in one quick master form and apply to all eligible grants and benefits. No printing, mailing or faxing necessary."
              icon={ListAlt}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Find jobs"
              description="Get matched to gigs that fit your skill sets and start making income again today."
              icon={SearchIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div></div>
    </div>
  )
}
