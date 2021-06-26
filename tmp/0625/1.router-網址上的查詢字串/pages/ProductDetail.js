import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// 模擬從伺服器端來的產品資料
import { data } from '../data/'

function ProductDetail(props) {
  console.log(props)
  const [productItem, setProductItem] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  useEffect(() => {
    //console.log(123);
    const product = data.find((v, i) => {
      return props.match.params.id === v.id
    })

    console.log(product)
    setProductItem(product)
  }, [])

  return (
    <>
      <h1>ProductDetail</h1>
      <p>目前產品的id：{props.match.params.id}</p>
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

export default withRouter(ProductDetail)
