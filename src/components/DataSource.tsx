import styled from '@emotion/styled';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: '/prices', label: 'Prices API' },
  { value: '/pricesSlow', label: 'Prices API (slow)' },
];

interface Props {
  selectedValue: string;
  updateSelected: (selectedValue: string) => void;
}
const DataSource: React.FC<Props> = ({ selectedValue, updateSelected }) => {
  const handleSelection = (event: SelectChangeEvent) => {
    updateSelected(event.target.value);
  };

  const StyledDropdown = styled(FormControl)({
    height: '4vh',
  });
  return (
    <StyledDropdown className='p-2 w-full md:w-1/3'>
      <InputLabel id='select-label'>Data Source</InputLabel>

      <Select
        id='select1'
        label='Select a source'
        value={selectedValue}
        onChange={handleSelection}
        className='w-full'
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </StyledDropdown>
  );
};

export default DataSource;
