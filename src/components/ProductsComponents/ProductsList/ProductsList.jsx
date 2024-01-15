import { StyledList } from './ProductsList.styled';
import { ProductsPlaceholder } from './ProductsPlaceholder/ProductsPlaceholder';
import { ProductsListItem } from './ProductsListItem/ProductsListItem';
import { AddProductModal } from '../AddProductModal/AddProductModal';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../store/products/operations';
import { useInView } from 'react-intersection-observer';
import { SuccessPopUp } from '../SuccessPopUp/SuccessPopUp';
import { StyledLiItem } from './ProductsListItem/ProductsListItem.styled';
import { setPageStore } from '../../../store/products/sliceProducts';
const queryParams = {
  bloodType: '1',
};
export const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { products, isLoading, pageStore, totalPages } = useSelector((state) => state.products);
  const { ref, inView } = useInView();
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [showModal]);

  const handleOpenModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

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
  if (isLoading) return;
  if (pageStore >= totalPages) return console.log('enough');
 
  if (inView) {
    dispatch(setPageStore(pageStore + 1));
          queryParams.page = pageStore;
  }
}, [inView, pageStore, isLoading, dispatch, totalPages]);

  useEffect(() => {
queryParams.page = pageStore;
    dispatch(getProductsThunk(queryParams));
  }, [category, recommended, search, dispatch, pageStore, totalPages]);
  return products.length > 0 ? (
    <>
      <StyledList>
        {products.map((item) => (
          isLoading ? <StyledLiItem style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={item._id}>
           <div className="loader"></div></StyledLiItem> : <ProductsListItem
            handleOpenModal={handleOpenModal}
            key={item._id}
            data={item}
          /> 
        ))}
        < div ref = { ref } /> 
      </StyledList>
      <AddProductModal
        showModal={showModal}
        closeModal={handleCloseModal}
        data={modalData}
      />
      <SuccessPopUp/>
    </>
  ) : (
    <ProductsPlaceholder />
  );
};
