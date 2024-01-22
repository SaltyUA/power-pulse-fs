import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExercisesUl } from './ExercisesCategories.styled';
import { ExercisesItem } from '../ExercisesCategoriesItem/ExercisesItem';
import { fetchEquipment} from '../../../store/exercises/operationExercises';
import  {getEquipment} from '../../../store/exercises/selectorsExercises';
import Pagination from '../ExercisesPagination/ExercisesPagination';
import { PaginationContainer } from '../ExercisesPagination/ExercisesPagination.styled';
import { setCurrentCategorie } from '../../../store/exercises/sliceExercises';

export const Equipment = ({ handleSetExName }) =>{
    const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchEquipment());
      }, [dispatch]);

     const handleFilterClick = filter => {
    dispatch(setCurrentCategorie(filter));
  };
      const equipment = useSelector(getEquipment);

      const [currentPage, setCurrentPage] = useState(1);
        
        //   визнaчити кількість елементи на сторінці
          const determineItemsPerPage = () => {
            const windowWidth = window.innerWidth;
        
            if (windowWidth >= 768 && windowWidth <= 1439) {
              return 9;
            } else {
              return 10;
            }
          };
        
          const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage);
        
          // змінити розмір
          const handleResize = () => {
            setItemsPerPage(determineItemsPerPage());
          };
        
          useEffect(() => {
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => {
              window.removeEventListener('resize', handleResize);
            };
          }, );
        
          const handlePageChange = newPage => {
            setCurrentPage(newPage);
          };
        
          const indexOfLastItem = currentPage * itemsPerPage;
          const indexOfFirstItem = indexOfLastItem - itemsPerPage;
          const currentItems = equipment.slice(indexOfFirstItem, indexOfLastItem);
    

  return (
    <PaginationContainer>
      <ExercisesUl>
        {currentItems.map(item => (
          <ExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
          />
        ))}
      </ExercisesUl>
       {itemsPerPage <equipment.length && (
        <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={equipment.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
               />
        )}
   </PaginationContainer>
      );
    };
  