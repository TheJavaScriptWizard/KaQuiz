import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <div className="bg-green-500 w-fit h-24 mt-6 mx-auto rounded-lg text-[3rem] place-content-center px-8">
          hello, this is blerp, laallalalalal, gooby goop
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[32.5rem] grid grid-cols-2 gap-4 p-4">
          <div className="bg-[#E21B3C] rounded-md place-content-center p-12 h-[14.75rem]">
            <div class="w-0 h-0 
              border-l-[51.96px] border-l-transparent
              border-b-[90px] border-b-white
              border-r-[51.96px] border-r-transparent">
            </div> 
          </div>
          <div className="bg-[#1368CE] rounded-md place-content-center p-12">
            <div class="w-[5.303rem] h-[5.303rem] bg-white rotate-45"></div>
          </div>
          <div className="bg-[#D89E00] rounded-md place-content-center p-12">
            <div class="w-[120px] h-[120px] bg-white rounded-full">
            </div> 
          </div>
          <div className="bg-[#26890C] rounded-md place-content-center p-12">
            <div class="w-[5.303rem] h-[5.303rem] bg-white"></div>
          </div>
        </div>
      </>   
  )
}

export default App
