import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#009270',
    color: theme.palette.common.white,
    padding: '.8rem',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '.4rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginTop: '.4rem',
    },
  },
  anchor: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container sx={{ width: '90%', mx: 'auto' }}>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <p>Bheemudu Guguloth </p>
          <CopyrightIcon fontSize="small" />
          <span>2022</span>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.social}>
          <a
            href="https://www.linkedin.com/in/bheemudu-guguloth-290089202/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.anchor}>
            <LinkedInIcon />
          </a>
          <a
            href="https://portfolio-bheema.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.anchor}>
            <LanguageIcon />
          </a>
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.anchor}>
            <InstagramIcon />
          </a> */}
          <a
            href="https://github.com/bheema-284"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.anchor}>
            <GitHubIcon />
          </a>
          <a
            href="https://www.facebook.com/bheem.bheemudu"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.anchor}>
            <FacebookIcon />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
