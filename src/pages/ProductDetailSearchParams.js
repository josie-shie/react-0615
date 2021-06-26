import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// 模擬從伺服器端來的產品資料
import { data } from '../data/'
import Breadcrumb from '../components/Breadcrumb'

function ProductDetailSearchParams(props) {
  console.log(props)

  //引用withRouter的參數
  //URLSearchParams返回一個Router的對象
  const searchParams = new URLSearchParams(props.location.search)
  
  //用網址上的?id=1來搜尋
  //網址上參數為一個字串
  const searchParamsId = searchParams.get('id')

  const [productItem, setProductItem] = useState({
    id: '',
    picture: 'https://via.placeholder.com/150',
    stock: 0,
    name: '預設商品',
    price: 2000,
    tags: '',
  })

  useEffect(() => {
    //console.log(123);

    const product = data.find((v, i) => {
      return searchParamsId === v.id
    })

    console.log(product)
    if (product) setProductItem(product)
  }, [])

  return (
    <>
      <h1>ProductDetailSearchParams</h1>
      <Breadcrumb />
      <p>目前產品的id：{searchParamsId}</p>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={productItem.picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{productItem.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              {productItem.tags}
            </a>
          </div>
        </div>
      </div>
      <h1>會員登入狀況：{props.auth ? '未登入' : '已登入'}</h1>
    </>
  )
}

export default withRouter(ProductDetailSearchParams)
