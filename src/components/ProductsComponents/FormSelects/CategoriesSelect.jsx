import Select, { components } from 'react-select';
import { useSelector} from 'react-redux';
import { StyledSelectArrow } from './selects.styled';
import { styleGuide } from "../../../constants/styleGuide";
import sprite from '../../../assets/images/sprite.svg';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
        <StyledSelectArrow>
            <use href={sprite + '#selectArrow'}></use>
          </StyledSelectArrow>
    </components.DropdownIndicator>
  );
};

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '146px',
    height: '46px',
    '@media (max-width: 374px)': {
      width: '120px',
    },
    '@media (min-width: 768px)': {
      width: '192px',
      height: '52px',
    },
  }),
  control: (provided, state) => ({
    ...provided,
    width: '146px',
    height: '46px',
    borderRadius: '12px',
    border: `1px solid ${styleGuide.greyTextColor}`,
    backgroundColor: 'inherit',
    cursor: 'pointer',
    outline: 'none !important',
    boxShadow: state.isFocused ? `0 0 0 2px ${styleGuide.orangeColor}` : 0,
    transition: `all ${styleGuide.animation}`,
    '&:hover': {
      borderColor: `${styleGuide.orangeColor}`,
    },
    '@media (max-width: 374px)': {
      width: '120px', 
    },
    '@media (min-width: 768px)': {
      width: '192px', 
      height: '52px',
    },
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: `all ${styleGuide.animation}`,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
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
    color: `${styleGuide.whiteColor}`,
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    borderRadius: '12px',
    backgroundColor: 'inherit',
    color: state.isSelected ? `${styleGuide.successColor}` : `${styleGuide.whiteColor}`,
      fontSize: '16px',
    '&:hover': {
      backgroundColor: `${styleGuide.orangeColor}`,
      color: `${styleGuide.whiteColor}`,
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
      background: `${styleGuide.greyTextColor}`,
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '12px',
      background: `${styleGuide.orangeColor}`,
      width: '6px',
      height: '147px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: `${styleGuide.whiteColor}`,
    },
  }),
};
export const SelectCategory = ({ dataFunc, currentValue }) => {
  const { categories } = useSelector(state => state.products);
  const updatedOptions = categories && categories.map(item => ({ value: item, label: item }));
  const optionsWithDefault = [
    { value: 'Categories', label: 'Categories' },
    ...updatedOptions
  ];
  
  return (
    <Select
      onChange={dataFunc}
      options={optionsWithDefault}
      components={{ DropdownIndicator }}
      styles={customStyles}
      value={
        currentValue === ''
          ? { value: 'Categories', label: 'Categories' }
          : optionsWithDefault.find((option) => option.value === currentValue)
      }
    />
  );
};
