import { FaEdit, FaTrash } from 'react-icons/fa'
import useGlobal from './context'

const List = () => {
  const { list, clearItems, deleteItem, editItem } = useGlobal()
  return (
    <section className='my-10 '>
      <h2 className='text-center'>your list</h2>
      <div className='bg-[#292929] w-[100px] h-[5px] mx-auto mt-2 mb-6'></div>

      {list.map((item) => {
        return (
          <article
            className='bg-white/70 py-3 px-6 text-[#292929] text-lg capitalize my-3 flex justify-between items-center'
            key={item.id}
          >
            <p>{item.text}</p>
            <div className='grid grid-cols-2 gap-3'>
              <button
                className='text-green-800'
                onClick={() => editItem(item.id)}
              >
                <FaEdit />
              </button>
              <button
                className='text-darkRed'
                onClick={() => deleteItem(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}

      <button
        className='bg-[#292929] text-[#eeeed3] capitalize px-5 py-2 grid mx-auto mt-4 rounded-full'
        onClick={clearItems}
      >
        clear items
      </button>
    </section>
  )
}
export default List
