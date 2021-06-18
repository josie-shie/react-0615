import React, { useState } from 'react'

function App() {
  // 養成習慣，先定義有哪些欄位屬性
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 處理每個欄位的變動
  const handleFieldChange = (e) => {
    // 更新輸入欄位
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }

    setFields(updatedFields)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    console.log(data.get('email'))
    console.log(data.get('password'))

    // ex. 送出表單資料到伺服器
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // })

    ///console.log('表單送出，輸入的欄位為', fields)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldChange}
          required
          placeholder="帳號"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
          placeholder="email信箱"
        />
        <label>密碼</label>
        <input
          type="password"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          placeholder="密碼"
          required
          minLength="6"
        />
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
