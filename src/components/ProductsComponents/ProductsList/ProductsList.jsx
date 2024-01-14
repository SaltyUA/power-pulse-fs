import { StyledList } from './ProductsList.styled';
import { ProductsPlaceholder } from './ProductsPlaceholder/ProductsPlaceholder';
import { ProductsListItem } from './ProductsListItem/ProductsListItem';
import { AddProductModal } from '../AddProductModal/AddProductModal';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'https://power-4vwy.onrender.com/api/v1/';
const queryParams = {
  bloodType: '1',
};
export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
console.log(showModal)
    useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    }, [showModal]);
  
  const handleOpenModal = data => {
    setModalData(data)
    setShowModal(true)
     }
   const handleCloseModal = () => {
       setShowModal(false)
  }

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { search, category, recommended } = params;

  if (search) {
    queryParams.q = search;
  } else {
    delete queryParams.q;
  }

  if (category) {
    queryParams.cat = category.toLowerCase();
  }

  if (recommended && recommended !== 'All') {
    queryParams.rec = recommended;
  } else {
    delete queryParams.rec;
  }

  useEffect(() => {
    const FetchData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}products`, {
          params: queryParams,
        });
                setProducts(data);
      } catch (error) {
        console.log(error.message);
        setProducts([]);
      }
    };
    FetchData();
  }, [category, recommended, search]);
  return (
      products.length > 0 ? (
        <>
          
        <StyledList>
          {products.map((item) => (
            <ProductsListItem showModal={showModal} modalData={modalData} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} key={item._id} data={item} />
          ))}
                  </StyledList>
          {showModal && <AddProductModal showModal={showModal} closeModal={handleCloseModal} data={modalData} />}
          </>
      ) : (
        <ProductsPlaceholder />
      )
  
  );
}