import React from 'react'

function Summary(props) {
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>Summary</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col" style={{ paddingLeft: 0 }}>
          Totale {props.productCount()} items
          </div>
        </div>
        <div
          className="row"
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.1);',
            padding: '2vh 0',
          }}
        >
          <div className="col" style={{ paddingLeft: 0 }}>
            TOTAL PRICE
          </div>
          <div className="col text-right">${props.total()}</div>
        </div>
        <button className="btn">CHECKOUT</button>
      </div>
    </>
  )
}

export default Summary
