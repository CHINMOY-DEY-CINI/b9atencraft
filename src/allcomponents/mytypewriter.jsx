


import { useTypewriter } from 'react-simple-typewriter'

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ['CRAFITY' ],
    loop : {},
    typeSpeed: 120,
    deleteSpeed:90
  })

  /** Hook Output */
//   const { isType, isDelete, isDelay, isDone } = helper

  return (
    <div >
      <span>{text}</span>
    </div>
  )
}

export default MyComponent