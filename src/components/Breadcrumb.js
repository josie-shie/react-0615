import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  
  
    const pathnameList = ['/product-list', '/product-detail']
  
  
  const pathnameTextList = ['商品列表', '商品詳細頁']
  
  
  const convertPathnameToText = () => {
    const index = pathnameList.indexOf(props.location.pathname)
    return pathnameTextList[index]
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="#">Home</Link>
          </li>
          <li className="breadcrumb-item">{convertPathnameToText()}</li>
        </ol>
      </nav>
    </div>
  )
}

export default withRouter(Breadcrumb)
