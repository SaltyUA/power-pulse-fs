import Select, { components } from 'react-select';
import { StyledSelectArrow } from './selects.styled';
import sprite from '../../../assets/images/sprite.svg';
import { styleGuide } from "../../../constants/styleGuide";

const options = [
    { value: 'All', label: "All"},
    { value: 'true', label:  'Recommended'},
    { value: 'false', label: 'Not recommended' }
];
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
        width: '173px',
        height: '46px',
        '@media (min-width: 768px)': {
                   width: '204px',
                   height: '52px',
    },
        '@media (max-width: 374px)': {
                   width: '160px', 
    },
        '@media (max-width: 334px)': {
                   width: '140px', 
        },
           }),
      control: (provided, state) => ({
        ...provided,
        width: '173px',
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
           '@media (min-width: 768px)': {
                   width: '204px', 
                   height: '52px',
        },
            '@media (max-width: 374px)': {
                   width: '160px',
        },
             '@media (max-width: 334px)': {
                   width: '140px',
        },
    }),
     indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
     dropdownIndicator: (base, state) => ({
    ...base,
    transition: `all ${styleGuide.animation}`,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
  }),
     menu: (provided) => ({
    ...provided,
     borderRadius: '12px',
background: '#1C1C1C',
    
    }),
       singleValue: provided => ({
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
   }
export const SelectRecommended = ({ dataFunc ,currentValue}) => {
      
    return (
        <Select
            onChange={dataFunc}
            options={options}
            components={{ DropdownIndicator }}
            styles={customStyles}
            value={options.find(option => option.value === currentValue)}
            defaultValue={currentValue}
        />
    )
  
}