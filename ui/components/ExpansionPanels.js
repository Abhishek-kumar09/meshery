import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { withStyles } from '@mui/material';

export const ExpansionPanel = withStyles({ root : { border : '1px solid rgba(0,0,0,.125)', },
  expanded : { margin : 'auto', }, })(MuiAccordion);

export const ExpansionPanelSummary = withStyles({ root : { borderBottom : '1px solid rgba(0,0,0,.125)', },
  content : { '&$expanded' : { margin : '12px 0', }, },
  expanded : {}, })((props) => <MuiAccordionSummary {...props} />);
