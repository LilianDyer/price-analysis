import React from 'react';
import { CompanyData } from '../models/CompanyData';
import { FormControlLabel, FormGroup, Paper, Checkbox } from '@mui/material';
import styled from '@emotion/styled';

interface SelectorTickerProps {
  companyData: CompanyData[];
  tickers: number[];
  onTickerChange: (ticker: number) => void;
}

const CompanySelector: React.FC<SelectorTickerProps> = ({
  companyData,
  tickers,
  onTickerChange,
}) => {
  
  const StyledPaper = styled(Paper)({
    padding: '0 0 0 5%',
    margin: '5% auto'
  });

  return (
    <StyledPaper elevation={3}>
      <FormGroup row className='mb-4'>
        {companyData.map((company) => (
          <FormControlLabel
            key={company.id}
            control={
              <Checkbox
                checked={tickers.includes(company.id)}
                onChange={() => onTickerChange(company.id)}
                sx={{
                  color: company.color,
                  '&.Mui-checked': {
                    color: company.color,
                  },
                }}
              />
            }
            label={company.name}
            className='mr-4'
          />
        ))}
      </FormGroup>
    </StyledPaper>
  );
};

export default CompanySelector;
