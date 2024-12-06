import React from 'react';
import DataContainer from './components/core-components/DataContainer';
import { Container, Typography } from '@mui/material';
import styled from '@emotion/styled';

const App: React.FC = () => {
  const CenteredTypography = styled(Typography)({
    textAlign: 'center',
    height: '12vh'
  });
  return (
    <Container maxWidth='lg' className='py-8'>
      <CenteredTypography variant='h4'>
        Price Analysis
      </CenteredTypography>
      <DataContainer />
    </Container>
  );
};

export default App;
