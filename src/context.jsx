import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AppContext = React.createContext()

const getLocalStorage = () => {
  const storage = localStorage.getItem('list')
  if (storage) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

export const AppProvider = ({ children }) => {
  const [text, setText] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState('')
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      toast.error('Please enter a value')
      return
    }
    if (isEditing) {
      setList((old) => {
        return old.map((item) => {
          if (item.id === editId) {
            return { ...item, text }
          }
          return item
        })
      })
      toast.success('Item Modified')
      setIsEditing(false)
      setEditId('')
      setText('')
      return
    }
    setList((old) => {
      const obj = { id: new Date().getTime(), text }
      return [...old, obj]
    })

    setText('')
    toast.success('Item Added')
  }
  const clearItems = () => {
    setList([])
    toast.error('Items Cleared')
  }
  const deleteItem = (id) => {
    setList((old) => {
      return old.filter((item) => item.id !== id)
    })
    toast.error('Item Deleted')
  }
  const editItem = (id) => {
    setIsEditing(true)
    const edit = list.find((item) => id === item.id)

    setText(edit.text)
    setEditId(id)
  }

  return (
    <AppContext.Provider
      value={{
        text,
        list,
        handleChange,
        handleSubmit,
        clearItems,
        deleteItem,
        editItem,
        isEditing,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobal = () => {
  return useContext(AppContext)
}

export default useGlobal
