import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsListItem, AddProductModal, SuccessPopUp,ProductsPlaceholder } from '../../ProductsComponents';
import { getProductsThunk } from '../../../store/products/operations';
import { setAddProductFalse } from '../../../store/products/sliceProducts';
import { notify, setBodyOverflow } from '../../../hooks';
import { StyledLiItem } from './ProductsListItem/ProductsListItem.styled';
import {
  StyledList,
  StyledLoader,
  StyledListLoader,
} from './ProductsList.styled';

const queryParams = {
  bloodType: '1',
  page: 1,
};
export const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { products, isLoading, isSuccessPopUpShown, totalPages } = useSelector(
    (state) => state.products
  );
  const listRef = useRef(null);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!isSuccessPopUpShown) return;
    setShowModal(false);
  }, [isSuccessPopUpShown]);
  useEffect(() => {
    setBodyOverflow(showModal);
  }, [showModal]);
  const handleOpenModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    dispatch(setAddProductFalse(false));
    setShowModal(false);
  };
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { q, category, recommended } = params;

  if (q) {
    queryParams.q = q;
  } else {
    delete queryParams.q;
  }
  if (category && category !== 'Categories') {
    queryParams.cat = category.toLowerCase();
  }  else {
    delete queryParams.cat;
  }
  if (recommended && recommended !== 'All') {
    queryParams.rec = recommended;
  } else {
    delete queryParams.rec;
  }

  useEffect(() => {
    setPage(1);
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [recommended, q, category]);

  useEffect(() => {
        if (
      page === totalPages ||
      (page === totalPages && page > 1 && totalPages > 1)
    )
      return ;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage(page + 1);
          if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollTop - 200;
          }
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      const currentRef = ref.current;
      if (ref.current) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoading]);

  useEffect(() => {
    if (page === totalPages && page !==1 ) {
      notify('info', 'You have reached the end of search results')
    }
    if (page > totalPages)return ;
    dispatch(getProductsThunk({ queryParams, page }));
  }, [recommended, q, category, dispatch, page, totalPages]);

  return isLoading && products === null ? (
    <StyledLoader className="loader-1" />
  ) : products && products.length > 0 ? (
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
        <div style={{ width: '100%', height: '1px' }}>
          {isLoading && <StyledListLoader></StyledListLoader>}
        </div>
        <div ref={ref} style={{ opacity: 0 }}>
          refdiv
        </div>
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
