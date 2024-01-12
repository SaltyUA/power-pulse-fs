import Select, { components } from 'react-select';
import { ReactComponent as SelectArrow } from '../img/selectArrow.svg';

const options = [
  { value: 'Alcoholic drinks', label: 'Alcoholic drinks' },
  { value: 'Berries', label: 'Berries' },
  { value: 'Cereals', label: 'Cereals' },
  { value: 'Dairy', label: 'Dairy' },
  { value: 'Dried fruits', label: 'Dried fruits' },
  { value: 'Eggs', label: 'Eggs' },
  { value: 'Fish', label: 'Fish' },
  { value: 'Flour', label: 'Flour' },
  { value: 'Meat', label: 'Meat' },
];
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectArrow />
    </components.DropdownIndicator>
  );
};

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '146px',
    height: '46px',
    '@media (max-width: 375px)': {
      width: '120px',
    },
    '@media (min-width: 768px)': {
      width: '192px',
    },
  }),
  control: (provided, state) => ({
    ...provided,
    width: '146px',
    height: '46px',
    borderRadius: '12px',
    border: '1px solid rgba(239, 237, 232, 0.30)',
    backgroundColor: 'inherit',
    cursor: 'pointer',
    outline: 'none !important',
    boxShadow: state.isFocused ? '0 0 0 2px #E6533C' : 0,
    '&:hover': {
      borderColor: '#E6533C',
    },
    '@media (max-width: 375px)': {
      width: '120px', // Adjust as needed for smaller screens
    },
    '@media (min-width: 768px)': {
      width: '192px', // Adjust as needed for smaller screens
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '12px',
    background: '#1C1C1C',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: '#EFEDE8',
  }),
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
    borderRadius: '12px',
    backgroundColor: 'inherit',
    '&:hover': {
      backgroundColor: '#E6533C',
      color: '#EFEDE8',
    },
  }),
  menuList: (base) => ({
    ...base,

    marginRight: '7px',
    '::-webkit-scrollbar': {
      width: '6px',
      height: '0',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '12px',
      background: 'rgba(239, 237, 232, 0.10)',
      width: '6px',
      height: '147px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  }),
};
export const SelectCategory = ({ dataFunc, currentValue }) => {
  return (
    <Select
      onChange={dataFunc}
      options={options}
      components={{ DropdownIndicator }}
      styles={customStyles}
      value={
        currentValue === ''
          ? { value: 'Categories', label: 'Categories' }
          : options.find((option) => option.value === currentValue)
      }
    />
  );
};
