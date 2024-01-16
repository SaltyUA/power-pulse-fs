import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExercisesUl } from './ExercisesCategories.styled';
import { ExercisesItem } from '../ExercisesCategoriesItem/ExercisesItem';
import { fetchBodyParts} from '../../../store/exercises/operationExercises';
import  {getBodyParts} from '../../../store/exercises/selectorsExercises';
// import currentItems from '../../../filter.json'
export const BodyParts = ({ handleSetExName, handleFilterClick }) => {
    const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchBodyParts());
      }, [dispatch]);

    
      const bodyParts = useSelector(getBodyParts);
      console.log(bodyParts);


  return (
      <ExercisesUl>
        {bodyParts.map(item => (
          <ExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
          />
        ))}
      </ExercisesUl>
      )
    };
  


// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBodyParts } from ' ';
// import { selectBodyParts } from ' ';
// import { ExercisesUl } from './ExercisesCategories.styled';
// import { ExercisesItem } from '../ExercisesCategoriesItem/ExercisesItem';

// import Pagination from '../../ExercisesPagination/ExercisesPagination';
// import { PaginationContainer } from '../../ExercisesPagination/ExercisesPagination.styled';

// export const BodyParts = ({ handleFilterClick, handleSetExName }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchBodyParts());
//   }, [dispatch]);

//   const bodyParts = useSelector(selectBodyParts);
//   const [currentPage, setCurrentPage] = useState(1);

// //   визнaчити кількість елементи на сторінці
//   const determineItemsPerPage = () => {
//     const windowWidth = window.innerWidth;

//     if (windowWidth >= 768 && windowWidth <= 1439) {
//       return 9;
//     } else {
//       return 10;
//     }
//   };

//   const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage);

//   // змінити розмір
//   const handleResize = () => {
//     setItemsPerPage(determineItemsPerPage());
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, );

//   const handlePageChange = newPage => {
//     setCurrentPage(newPage);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = bodyParts.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <PaginationContainer>
//       <ExercisesUl>
//         {currentItems.map(item => (
//           <ExercisesItem
//             key={item._id}
//             exercisesItem={item}
//             handleFilterClick={handleFilterClick}
//             handleSetExName={handleSetExName}
//           />
//         ))}
//       </ExercisesUl>
//       {itemsPerPage < bodyParts.length && (
//         <Pagination
//           itemsPerPage={itemsPerPage}
//           totalItems={bodyParts.length}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//         />
//       )}
//     </PaginationContainer>
//   );
// };
