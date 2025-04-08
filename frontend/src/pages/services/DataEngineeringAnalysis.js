import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const DataEngineeringAnalysis = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 12, minHeight: '100vh' }}>
      <Container>
        <Typography variant="h2" gutterBottom color="text.primary">
          Data Engineering & Analysis
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Unlock the power of your data with Hono Technology’s data engineering and analysis services. We transform raw data into actionable insights, helping businesses and individuals make informed decisions with Zvertex AI-driven analytics.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Use Case: Retail Optimization
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A retail chain partnered with us to streamline their supply chain. We built a data pipeline and predictive analytics model, reducing overstock by 25% and boosting profitability.
        </Typography>
        <Typography variant="h4" gutterBottom color="text.primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
          - Scalable data pipelines for real-time insights.<br />
          - AI-powered analysis for precision.<br />
          - Customized solutions for any industry.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Ready to harness your data? Contact us today!
          </Typography>
          <Button variant="contained" color="secondary" href="mailto:Hr@honotech.com" size="large">
            Contact Us via Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DataEngineeringAnalysis;