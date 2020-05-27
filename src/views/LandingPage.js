import React from 'react'
import '../assets/css/Landing.css'
import Header from 'components/Header'
import womanSVG from '../assets/images/remote-work-woman.png'
import autoApply from '../assets/images/auto-apply.svg'
import findJobs from '../assets/images/find-jobs.svg'
import stepByStep from '../assets/images/step-by-step.svg'
import Grid from '@material-ui/core/Grid'
import { Hidden, Paper, TextField, Button } from '@material-ui/core'
import Footer from 'components/Footer'

export default function LandingPage() {
  return (
    <div>
      <div className='background'>
        <Header />
        <div style={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
          <h1>
            Let’s navigate this together.
          </h1>
          <h4>
            COVID-19 has led to mass unemployment globally. NextStep is a simple easy-to-use platform to help you understand what financial aid, benefits and other resources you are eligible for and help you navigate through what’s next.
          </h4>
          <Button variant="outlined" color="primary" size="large">About NextStep</Button>
          <Button variant="contained" color="primary" size="large" style={{ marginLeft: 25 }}>Get started</Button>
        </div>
      </div>
      <div className="container" style={{ marginTop: 100 }}>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <h3>Get on track to financial stability in 10 minutes</h3>
            <h5>
              We guide you through what you need to do after you are laid off and handle all the heavy lifting.
              Spend 10 minutes filling out a bit of information, and we’ll help you apply for eligible grants,
              find jobs and manage finances.
            </h5>
          </Grid>
          <Grid item sm={6} style={{ textAlign: 'center' }}>
            <Hidden xsDown>
              <img src={womanSVG} style={{ width: '70%', height: 'auto' }} />
            </Hidden>
          </Grid>
        </Grid>
        <Grid container spacing={8} style={{ marginTop: 100 }}>
          <Grid item sm={4} xs={12} style={{ textAlign: 'center' }}>
            <img src={stepByStep} style={{ maxWidth: '50%' }} />
            <h4>Step by step guidance</h4>
            <p>
              Get back on track with ease. We’ve done all the research and simplified everything into a few simple steps.
            </p>
          </Grid>
          <Grid item sm={4} xs={12} style={{ textAlign: 'center' }}>
            <img src={autoApply} style={{ maxWidth: '50%' }} />
            <h4>Step by step guidance</h4>
            <p>
              Get matched to gigs that fit your skill sets and start making income again today.
            </p>
          </Grid>
          <Grid item sm={4} xs={12} style={{ textAlign: 'center' }}>
            <img src={findJobs} style={{ maxWidth: '46%' }} />
            <h4>Step by step guidance</h4>
            <p>
              Fill in one quick master form and apply to all eligible grants and benefits. No printing, mailing or faxing necessary.
            </p>
          </Grid>
        </Grid>
        <div style={{ backgroundColor: '#ECF5FF', width: '100vw', marginLeft: '-5vw', paddingTop: 50, marginTop: 50, paddingBottom: 50, textAlign: 'center' }}>
          <h2>
            We need your help!
          </h2>
          <h5>
            We are actively looking for volunteers to help expand to more countries and look for content and partners that could help the cause. Please get in touch if you are interested!
          </h5>
          <Grid container spacing={4} id="volunteerCards">
            <Grid item md={4} sm={12} style={{ margin: 'auto' }}>
              <Paper className="volunteer-card" elevation={10}>
                <h4>General</h4>
                <p>Develop partnerships with HR and employee training companies <br /> <br />
                Expand grant database to cover more countries <br /> <br />
                Help research and add documentation requirements for HK
                </p>
              </Paper>
            </Grid>
            <Grid item md={4} sm={12} style={{ margin: 'auto' }}>
              <Paper className="volunteer-card" elevation={10}>
                <h4>Design</h4>
                <p>Pls help us with UI/UX design! We are just a couple of programmers with minimal design sense
                </p>
              </Paper>
            </Grid>
            <Grid item md={4} sm={12} style={{ margin: 'auto' }}>
              <Paper className="volunteer-card" elevation={10}>
                <h4>Development</h4>
                <p>Build PDF form autofiller <br /><br />
                  Set up user accounts and save/retrieve filled documents
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Paper elevation={2} style={{ width: '80%', margin: 'auto', marginTop: 100 }}>
            <div style={{ padding: '10%', paddingTop: 50 }}>
              <h3> Get in touch </h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Your name" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Your email" style={{ width: '100%' }} />
                </Grid>
              </Grid>
              <div style={{ marginTop: 50 }}>
                <TextField
                  placeholder="Message"
                  multiline
                  rows={4}
                  rowsMax={8}
                  style={{ width: '100%' }}
                />
              </div>
              <Button variant="contained" size="large" color="primary" style={{ marginTop: 50 }}>Send message</Button>
            </div>
          </Paper>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
