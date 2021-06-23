import React, { useState, useEffect } from 'react'
import './App.css'
import FilterBar from './components/FilterBar'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import SortBar from './components/SortBar'

//仿造從後端得來已經轉化成物件型態的資料
import { data } from './data/'

function App() {
  //因為有重設的按鈕 因此需要一個陣列記住原本的狀態
  const [products, setProducts] = useState([])
  //過濾後顯示的資料陣列
  const [displayProducts, setDisplayProducts] = useState([])
  //四個標籤的狀態
  const [tags, setTags] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    setProducts(data)
    setDisplayProducts(data)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <FilterBar />
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    <SearchBar />
                    <div className="padding"></div>
                    <SortBar />
                    <ProductList products={displayProducts} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
