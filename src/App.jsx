import useGlobal from './context'
import Form from './Form'
import List from './List'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const { list } = useGlobal()
  return (
    <>
      <div className='w-[85vw] mx-auto max-w-4xl min-h-[calc(100vh-76px)] p-2'>
        <h1 className='text-center mb-8 mt-20'>todo application</h1>
        <Form />
        {list.length >= 1 && <List />}
        <ToastContainer position='top-center' />
      </div>

      <footer className='bg-[#292929] text-lg text-[#eeeed3] py-6 text-center capitalize'>
        developed by{' '}
        <a
          href='https://github.com/tifee1'
          target='_blank'
          className='font-black uppercase text-white'
        >
          tifee
        </a>{' '}
        &copy; {new Date().getFullYear()}
      </footer>
    </>
  )
}
export default App
