import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import ReactJson from 'react-json-view'; // Importing react-json-view

const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: '20px',
  borderRadius: '8px',
  fontFamily: 'monospace',
  fontSize: '14px',
  border: '1px solid #ddd',
  color: '#333',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: '16px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    padding: '0 16px',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  '& .MuiAccordionDetails-root': {
    backgroundColor: '#fafafa',
  },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  marginBottom: '24px',
  color: '#3f51b5',
  fontWeight: '600',
  textAlign: 'center',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  color: '#333',
}));

const CollapsibleDocPage = ({ Data, config, appearing }) => {
  return (
    <Box sx={{ padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <TitleTypography variant="h4" gutterBottom>
        Component Props Documentation
      </TitleTypography>

      {/* Collapsible Section for Data */}
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <SectionTitle variant="h6">Data Prop</SectionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <CodeBox>
            <ReactJson
              src={Data}
              theme="monokai"
              collapsed={false}  // Set to true to have it initially collapsed
              enableClipboard={false}
              displayDataTypes={false}
            />
          </CodeBox>
        </AccordionDetails>
      </StyledAccordion>

      {/* Collapsible Section for Config */}
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <SectionTitle variant="h6">Config Prop</SectionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <CodeBox>
            <ReactJson
              src={config}
              theme="monokai"
              collapsed={false}
              enableClipboard={false}
              displayDataTypes={false}
            />
          </CodeBox>
        </AccordionDetails>
      </StyledAccordion>

      {/* Collapsible Section for Appearing */}
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <SectionTitle variant="h6">Appearing Prop</SectionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <CodeBox>
            <ReactJson
              src={appearing}
              theme="monokai"
              collapsed={false}
              enableClipboard={false}
              displayDataTypes={false}
            />
          </CodeBox>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  );
};

export default CollapsibleDocPage;
