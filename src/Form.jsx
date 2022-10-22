import useGlobal from './context'

const Form = () => {
  const { handleChange, handleSubmit, text, isEditing } = useGlobal()

  return (
    <>
      <form
        className='border-2 border-[#292929] rounded-full flex w-[70%] mx-auto py-1'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='enter item here...'
          className='bg-transparent w-full mx-3 px-1 placeholder-[#292929]/60 capitalize focus:outline-none'
          value={text}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='bg-[#292929] text-[#eeeed3] text-lg rounded-full mr-3 px-5 py-1 uppercase tracking-widest'
        >
          {isEditing ? 'edit' : 'add'}
        </button>
      </form>
    </>
  )
}
export default Form
