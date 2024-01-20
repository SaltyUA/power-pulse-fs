
import {
  ExercisesFilter,
  ExercisesNavList,
  FilterBtn,
} from './ExercisesNavigation.styled';

 export const ExercisesNavigation = ({ activeFilter, handleFilterClick }) => {
  return (
    <ExercisesNavList>
      <ExercisesFilter
        className={activeFilter === 'Body parts' ? 'active' : ''}
      >
        <FilterBtn
          type="button"
          onClick={() => handleFilterClick('Body parts')}
          className={activeFilter === 'Body parts' ? 'selected' : ''}
        >
          Body parts
        </FilterBtn>
      </ExercisesFilter>
      <ExercisesFilter className={activeFilter === 'Muscles' ? 'active' : ''}>
        <FilterBtn
          type="button"
          onClick={() => handleFilterClick('Muscles')}
          className={activeFilter === 'Muscles' ? 'active' : ''}
        >
          Muscles
        </FilterBtn>
      </ExercisesFilter>
      <ExercisesFilter className={activeFilter === 'Equipment' ? 'active' : ''}>
        <FilterBtn
          type="button"
          onClick={() => handleFilterClick('Equipment')}
          className={activeFilter === 'Equipment' ? 'active' : ''}
        >
          Equipment
        </FilterBtn>
      </ExercisesFilter>
    </ExercisesNavList>
  );
};



// import {
//   ExercisesFilter,
//   ExercisesNavList,
//   FilterBtn,
// } from './ExercisesNavigation.style';

//  const ExercisesNavigation = ({ activeFilter, handleFilterClick }) => {
//   return (
//     <ExercisesNavList>
//       <ExercisesFilter
//         className={activeFilter === 'Body parts' ? 'active' : ''}
//       >
//         <FilterBtn
//           type="button"
//           onClick={() => handleFilterClick('Body parts')}
//           className={activeFilter === 'Body parts' ? 'active' : ''}
//         >
//           Body parts
//         </FilterBtn>
//       </ExercisesFilter>
//       <ExercisesFilter className={activeFilter === 'Muscules' ? 'active' : ''}>
//         <FilterBtn
//           type="button"
//           onClick={() => handleFilterClick('Muscules')}
//           className={activeFilter === 'Muscules' ? 'active' : ''}
//         >
//           Muscules
//         </FilterBtn>
//       </ExercisesFilter>
//       <ExercisesFilter className={activeFilter === 'Equipment' ? 'active' : ''}>
//         <FilterBtn
//           type="button"
//           onClick={() => handleFilterClick('Equipment')}
//           className={activeFilter === 'Equipment' ? 'active' : ''}
//         >
//           Equipment
//         </FilterBtn>
//       </ExercisesFilter>
//     </ExercisesNavList>
//   );
// };

// export default ExercisesNavigation