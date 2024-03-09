import { useDispatch, useSelector } from 'react-redux';
import { TitlePage } from '../../../components/TitlePage/TitlePage';
import { useEffect } from 'react';
//import { ProductsFilter } from '../../components/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../../components/ProductsList/ProductsList';
// import { fetchProducts } from '../../redux/products/operations';
import { ProductsFilters } from '../../../components/ProductsFilters/ProductsFilters';
import { getProductCategories } from '../../../redux/products/operations';
import { selectToken } from '../../../redux/auth/selectors';

export default function ProductsPage() {
  const TOKEN = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategories(TOKEN));
  }, [dispatch]);

  //  const isLoading = useSelector(selectIsLoading);
  //  const error = useSelector(selectError);
  //const dispatch = useDispatch();
  //useEffect(() => {
  //  dispatch(fetchProducts());
  //}, [dispatch]);

  return (
    <>
      <TitlePage title="Products" />
      <ProductsFilters />
      <ProductsList />
    </>
  );
}
// повне версія
//  <>
//    <TitlePage title="Products" />
// <ProductsFilter />
// {isLoading && !error && <h1>зробити лодер</h1>}
// {error && <p>Sorry! {error}. Try again!</p>}
//<ProductsList />;
// </>
