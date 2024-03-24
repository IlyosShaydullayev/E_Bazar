import Filter from '@/components/filter-menu_Layout/menu-filter/Filter'
import Menu from '@/components/filter-menu_Layout/menu-filter/Menu'
import Main from '@/pages/main-page'
import Product from '@/pages/product-page'
import Profile from '@/pages/profile/Profile'
import CreateProduct from '@/pages/seller/create-product'
import SellerProducts from '@/pages/seller/seller-products'
import {Routes, Route} from 'react-router-dom'

function RoutePage() {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Main />}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/my-products' element={<SellerProducts />} />
        <Route path='/filter' element={<Filter />}/>
        <Route path='/menu' element={<Menu />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='create-product' element={<CreateProduct />}/>
      </Routes>
    </>
  )
}

export default RoutePage
