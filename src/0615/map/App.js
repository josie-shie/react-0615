//React為預設導入，{ useState }為部分導入 useState不是來字React而是另外寫的
//每個程式只會有一隻預設導入
import React, { useState } from 'react' //最新版本可以省略這行
import logo from './logo.svg'
import './App.css'

//檔案名稱(App.js) 元件名稱(function App) 導出元件的名稱(export default App) 這三者要一樣

//函式型元件
function App() {
  //使用狀態 勾子(hooks)
  //解構賦值(es6)
  //useState(0) = [0,f]
  const [total, setTotal] = useState(0)

  return (
    //加上這個不會增加多餘的div
    //也可使用<>省略中的的tage name

    <React.Fragment>
      {[1, 'foo', 2, 3, 4].map((v, i) => (
        //有map一定要加key
        <h1 key={i}>{v}</h1>
      ))}
    </React.Fragment>
  )
}

export default App
