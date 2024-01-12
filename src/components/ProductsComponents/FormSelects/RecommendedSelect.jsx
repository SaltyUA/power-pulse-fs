import Select, { components } from 'react-select';
import { ReactComponent as SelectArrow } from '../img/selectArrow.svg';

const options = [
    { value: 'All', label: "All"},
  { value: 'Recommended', label:  'Recommended'},
    { value: 'Not recommended', label: 'Not recommended' }
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
        width: '173px',
        height: '46px',
        '@media (min-width: 768px)': {
                   width: '204px', // Adjust as needed for smaller screens
    },
        '@media (max-width: 375px)': {
                   width: '160px', // Adjust as needed for smaller screens
        },
           }),
      control: (provided, state) => ({
        ...provided,
        width: '173px',
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
           '@media (min-width: 768px)': {
                   width: '204px', // Adjust as needed for smaller screens
        },
            '@media (max-width: 375px)': {
                   width: '160px', // Adjust as needed for smaller screens
        },
    }),
     indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
    }),
     menu: (provided) => ({
    ...provided,
     borderRadius: '12px',
background: '#1C1C1C',
    
    }),
       singleValue: provided => ({
    ...provided,
           fontSize: '14px',
    color: '#EFEDE8',
    }),
       option: (provided, ) => ({
        ...provided,
        cursor: 'pointer',
           borderRadius: '12px',
        backgroundColor: 'inherit',
 '&:hover': {
     backgroundColor: '#E6533C',
     color: '#EFEDE8',
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