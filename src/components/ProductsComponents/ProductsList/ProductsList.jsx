import { StyledList, StyledLoader } from './ProductsList.styled';
import { ProductsPlaceholder } from './ProductsPlaceholder/ProductsPlaceholder';
import { ProductsListItem } from './ProductsListItem/ProductsListItem';
import { AddProductModal } from '../AddProductModal/AddProductModal';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../store/products/operations';
import { useInView } from 'react-intersection-observer';
import { SuccessPopUp } from '../SuccessPopUp/SuccessPopUp';
import { StyledLiItem } from './ProductsListItem/ProductsListItem.styled';
import { setPageStore, setAddProductFalse } from '../../../store/products/sliceProducts';
 import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryParams = {
  bloodType: '1',
  page: 1
};
export const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { products, isLoading, pageStore, totalPages,isSuccessPopUpShown } = useSelector(state => state.products);
  const [enableInView, setEnableInView] = useState(true);
  const listRef = useRef(null);
  const { ref, inView } = useInView({skip: !enableInView, threshold: 0.7});
  const dispatch = useDispatch();

  useEffect(() => { 
    if (!isSuccessPopUpShown) return;
    setShowModal(false)
  },[isSuccessPopUpShown])
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
    dispatch(setAddProductFalse(false))
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
    if (pageStore === 1 && products) {
  listRef.current.scrollTop = 0;
      setEnableInView(true)
    }
  },[pageStore, products])
  useEffect(() => {
    if (isLoading || (pageStore === 1 & totalPages === 1) ) return;
      
    if (pageStore >= totalPages && enableInView) {
                       toast.info('You have reached the end of search results', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
               });
                        return setEnableInView(false)  
    }
         if (inView) {
        if (pageStore === totalPages) return;
            dispatch(setPageStore(pageStore + 1));
                }
  }, [inView, pageStore, isLoading, dispatch, totalPages, enableInView]);

  useEffect(() => {
            queryParams.page = pageStore;
        dispatch(getProductsThunk(queryParams));
  }, [category, recommended, search, dispatch, pageStore, totalPages]);

  return isLoading && products === null ?
    <StyledLoader className="loader-1"/>
    :
   products && products.length > 0 ? (
    <>
      <StyledList ref={listRef}>
        {products.map((item) =>
          isLoading ? (
            <StyledLiItem
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              key={item._id}
            >
              <div className="loader"></div>
            </StyledLiItem>
          ) : (
            <ProductsListItem
              handleOpenModal={handleOpenModal}
              key={item._id}
                data={item}
                           />
          )
        )}
        <div ref={ref} />
      </StyledList>
      <AddProductModal
        showModal={showModal}
        closeModal={handleCloseModal}
        data={modalData}
      />
      <SuccessPopUp />
    </>
  ) : (
    <ProductsPlaceholder />
  );
};
