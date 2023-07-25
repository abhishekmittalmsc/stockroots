import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Lens from '@mui/icons-material/FiberManualRecord';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: '80%',    /* Set the width to 70% */
  margin: '0 auto', /* Center the Accordion horizontally */
  border: `.1rem solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  border: 'none', // Remove the border
  '& .MuiAccordionSummary-root': {
    boxShadow: 'none', // Remove the box shadow
  },
  '& .MuiAccordionSummary-root.Mui-focused, .MuiAccordionSummary-root:hover': {
    outline: 'none', // Remove the outline
  },
  '& .MuiAccordionSummary-content': {
    margin: 0, // Remove the margin
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accord() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion  expanded={expanded === 'panel1'}
  onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ color: '#0099A9', fontFamily: 'Arial', fontSize:'2rem'}}>
        <Lens style={{ fontSize: 'inherit', marginRight: 5 }} />
          What is the Price of This Webinar:</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ color: 'black', fontFamily: 'Arial', fontSize:'2rem' }}>
          This Webinar is totally free of cost, you don’t have to pay even a single penny to join this wonderful webinar.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={expanded === 'panel2'}
  onChange={handleChange('panel2')}
 >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ color: '#EA6103', fontFamily: 'Arial', fontSize:'2rem' }}>
        <Lens style={{ fontSize: 'inherit', marginRight: 5 }} />
        Why this Webinar is Free of Cost:</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ color: 'black', fontFamily: 'Arial', fontSize:'2rem' }}>
        As a professional chartered accountant and truly Indian its my responsibility towards society to contribute and I find this way to give my contribution to save common trader hard earned money from big players of market, from unsocial elements (so called operators) of market that’s why my this initiative can give free of cost beginning towards success and knowledge.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={expanded === 'panel3'}
  onChange={handleChange('panel3')}
 >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ color: '#F69F1E', fontFamily: 'Arial', fontSize:'2rem' }}>
        <Lens style={{ fontSize: 'inherit', marginRight: 5 }} />
        When I can Join this Webinar:</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ color: 'black', fontFamily: 'Arial' , fontSize:'2rem'}}>
        you can join this webinar as per your convenient.  During this week it is going to held 3 days you can enroll yourself for any of these slots.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion  expanded={expanded === 'panel4'}
  onChange={handleChange('panel4')}
 >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ color: '#E9B0B3', fontFamily: 'Arial', fontSize:'2rem' }}>
        <Lens style={{ fontSize: 'inherit', marginRight: 5 }} />
        Do I need any Technical or Fundamental Knowledge to Join this Webinar:</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ color: 'black', fontFamily: 'Arial', fontSize:'2rem' }}>
        Not at all, no technical or Fundamental knowledge is required to join this webinar, even if you are new to the market this webinar is helpful for you.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={expanded === 'panel5'}
  onChange={handleChange('panel5')}
 >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ color: '#0070C0', fontFamily: 'Arial', fontSize:'2rem' }}>
        <Lens style={{ fontSize: 'inherit', marginRight: 5 }} />
        Why I should Join this Webinar, if lots of material is already there on Social Media:</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ color: 'black', fontFamily: 'Arial', fontSize:'2rem' }}>
        Social Media provides us information it does not provide wisdom to use such information, this webinar is going to provide you Unique methods which you wont find in any social media platform and this webinar also provide step-by-step guidance to implement those information to become profitable trader or investor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={expanded === 'panel6'}
  onChange={handleChange('panel6')}
 >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ color: '#0099A9', fontFamily: 'Arial', fontSize:'2rem' }}>
        <Lens style={{ fontSize: 'inherit', marginRight: 5 }} />
        Will This be Live or Pre-recorded:</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ color: 'black', fontFamily: 'Arial', fontSize:'2rem' }}>
        It will be absolutely live webinar
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={expanded === 'panel7'}
  onChange={handleChange('panel7')}
 >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ color: '#3A5723', fontFamily: 'Arial', fontSize:'2rem' }}>
        <Lens style={{ fontSize: 'inherit', marginRight: 5 }} />
        Will any Notes/Assignments will be provided in the Webinar        </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ color: 'black', fontFamily: 'Arial', fontSize:'2rem' }}>
        By end of this Webinar you will be having notes and assignment for important leaning of this webinar.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={expanded === 'panel8'}
  onChange={handleChange('panel8')}
 >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ color: '#9D93AE', fontFamily: 'Arial' , fontSize:'2rem'}}>
        <Lens style={{ fontSize: 'inherit', marginRight: 5 }} />
        How Long this webinar be.  How much time it will take </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ color: 'black', fontFamily: 'Arial', fontSize:'2rem' }}>
        You have to invest your 2 hrs for this webinar and I can assure you that these 2 hrs investment will change your trading style.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={expanded === 'panel9'}
  onChange={handleChange('panel9')}
 >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ color: '#EA5E66', fontFamily: 'Arial', fontSize:'2rem' }}>
        <Lens style={{ fontSize: 'inherit', marginRight: 5 }} />
        How can I earn Consistent Income in just 10-20 Minutes per day </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ color: 'black', fontFamily: 'Arial', fontSize:'2rem' }}>
        This is what you are going to learn in this webinar and These methods are results of my professional and Market Experience.  You will defiantly going to appreciate it after knowing these in detail.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
