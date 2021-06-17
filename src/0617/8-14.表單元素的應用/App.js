import React, { useState } from 'react'
import './App.css'

function App() {
  const [textField, setTextfield] = useState('')
  const [textarea, setTextarea] = useState('')
  //下拉選單初始值如果不在option 則不會顯示
  const [seletedOption, setSeletedOption] = useState('')
  //checkbox
  const [gender, setGender] = useState('')
  //單一勾選
  const [agree, setAgree] = useState('')
  // 多勾選(核取方塊)，用陣列
  const [likeList, setLikeList] = useState([])
  
  // 多勾選(核取方塊)，用物件
  const [like, setLike] = useState({
    optionA: false,
    optionB: false,
  })

  return (
    <>
      {/* input實際應用 */}
      <h1>文字輸入框</h1>
      <input
        type="text"
        value={textField}
        onChange={(e) => {
          setTextfield(e.target.value)
        }}
      />
      <hr />
      <hr />
      <h1>文字輸入區</h1>
      {/* React中的文字區域是單個元素標記的 */}
      <textarea
        value={textarea}
        onChange={(e) => {
          setTextarea(e.target.value)
        }}
      />
      <hr />
      <h2>下拉選單</h2>
      <select
        value={seletedOption}
        onChange={(e) => {
          setSeletedOption(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="雞腿">雞腿</option>
        <option value="魯肉">魯肉</option>
        <option value="排骨">排骨</option>
        <option value="水果">水果</option>
      </select>
      <hr />
      <h2>radio 單選按鈕的應用</h2>
      <input
        type="radio"
        value="男"
        // 透過checked回傳的布林值確認是否勾選
        checked={gender === '男'}
        // 如果有勾選就將radio的value回傳
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>男</label>
      <input
        type="radio"
        value="女"
        checked={gender === '女'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>女</label>
      <input
        type="radio"
        value="未定"
        checked={gender === '未定'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>未定</label>
      <hr />

      {/* 用陣列產生單選按鈕 */}
      <h2>用陣列產生radio 單選按鈕</h2>
      {['男性', '女性', '未定義'].map((v, i) => {
        return (
          <React.Fragment key={i}>
            {/* <>裡面不可以加key */}
            <input
              type="radio"
              value={v}
              checked={gender === v}
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
            <label>{v}</label>
          </React.Fragment>
        )
      })}
      <hr />

      {/* 單一勾選按鈕 */}
      <h2>單一的勾選按鈕</h2>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>我同意</label>
      <hr />

      {/* 用陣列產生checkBox 單選按鈕 */}
      <h2>用陣列產生多個checkBox 單選按鈕</h2>
      <input
        type="checkbox"
        value="雞腿"
        onChange={(e) => {
          const value = e.target.value

          // 陣列沒有包含->加入
          // 加return中斷以下的程式碼
          if (!likeList.includes(value))
            return setLikeList([...likeList, value])

          // 陣列有包含->移出
          if (likeList.includes(value)) {
            // 產生一個新陣列沒有包含雞腿的丟進newlikeList
            const newLikeList = likeList.filter((v) => v !== value)
            // 再將參數newlikeList帶入setLikeList()
            setLikeList(newLikeList)
          }
        }}
        //返回布林值 是否凡有雞腿這個value
        checked={likeList.includes('雞腿')}
      />
      <label>雞腿</label>

      <input
        type="checkbox"
        value="排骨"
        onChange={(e) => {
          const value = e.target.value
          if (!likeList.includes(value))
            return setLikeList([...likeList, value])

          if (likeList.includes(value)) {
            const newLikeList = likeList.filter((v) => v !== value)
            setLikeList(newLikeList)
          }
        }}
        checked={likeList.includes('排骨')}
      />
      <label>排骨</label>

      <hr />

      {/* 用一個陣列來一次產出核取方塊群組 */}
      <h1>用一個陣列來一次產出核取方塊群組</h1>
      {['魯肉', '牛排'].map((v, i) => {
        return (
          <React.Fragment key={i}>
            <input
              type="checkbox"
              value={v}
              onChange={(e) => {
                const value = e.target.value

                if (!likeList.includes(value)) {
                  return setLikeList([...likeList, value])
                }

                if (likeList.includes(value)) {
                  const newLikeList = likeList.filter(
                    (v) => v !== value
                  )
                  setLikeList(newLikeList)
                }
              }}
              checked={likeList.includes(v)}
            />
            <label>{v}</label>
          </React.Fragment>
        )
      })}
      <hr />
      {/* 用一個物件來一次產出核取方塊群組 */}
      <h3>用一個物件來一次產出核取方塊群組</h3>
      <input
        type="checkbox"
        value="optionA"
        onChange={(e) => {
          const key = e.target.value
          setLike({
            ...like,
            [key]: !like[key],
          })
        }}
        checked={like.optionA}
      />
      <label>雞腿</label>
      <input
        type="checkbox"
        value="optionB"
        onChange={(e) => {
          const key = e.target.value
          setLike({
            ...like,
            [key]: !like[key],
          })
        }}
        checked={like.optionB}
      />
      <label>排骨</label>

    </>
  )
}

export default App
