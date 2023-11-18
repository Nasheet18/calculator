import { useState } from "react";







function App() {
  

  const [input, setInput] = useState('00');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('00');
    } else if (value === 'D') {
      setInput((prevInput) => (prevInput.length > 1 ? prevInput.slice(0, -1) : '00'));
    } else {
      setInput((prevInput) => (prevInput === '00' ? value : prevInput + value));
    }
  };
  return (
    <>
     <div className='flex justify-center items-center mt-[150px] bg-[#242424]'>
   <div className=' rounded-3xl shadow-[1px_1px_5px_5px_rgba(0,0,0,0.7)] bg-[#242424] '>
    <div className='flex items-center justify-center mt-3 '>
   <input  
   className="outline-none bg-black text-white pt-4 pb-2 pr-2 text-2xl text-right rounded-t-2xl  w-[90%]  " 
   type="text"
   value={input}
   onChange={(e) => setInput(e.target.value)}
   />
    </div>
    <div className='flex flex-wrap items-center '>
    <div className='w-14 h-8 rounded-md cursor-pointer ml-4 mt-2 hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]' onClick={() => handleButtonClick('C')}>C</div>
    <div className='w-14 h-8 rounded-md cursor-pointer ml-4 mt-2 hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]' onClick={() => handleButtonClick('D')}>Del</div>
    </div>
    <div className=''>
         
         <div className='flex flex-wrap items-center gap-[20px] m-4 '>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]' onClick={() => handleButtonClick('1')}>1</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]' onClick={() => handleButtonClick('2')}>2</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]' onClick={() => handleButtonClick('3')}>3</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]' onClick={() => handleButtonClick('/')}>/</div>
         </div>
         <div className='flex flex-wrap items-center gap-[20px] m-4 '>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('4')}>4</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('5')}>5</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('6')}>6</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('*')}>X</div>
         </div>
         <div className='flex flex-wrap items-center gap-[20px] m-4 '>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('7')}>7</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('8')}>8</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('9')}>9</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('-')}>-</div>
         </div>
         <div className='flex flex-wrap items-center gap-[20px] m-4 '>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('0')}>0</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('.')}>.</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-white text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)] bg-orange-500' onClick={() => handleButtonClick('=')}>=</div>
          <div className='w-12 h-12 rounded-full cursor-pointer hover:bg-gray-800 active:hover:shadow-[0.5px_1px_1px_3px_rgba(0,0,0,0.8)] text-orange-500 text-center flex items-center justify-center shadow-[1px_1px_10px_3px_rgba(5px,0,0,0.7)]'  onClick={() => handleButtonClick('+')}>+</div>
         </div>
    </div>
   </div>
   </div>


   
    </>
  )
}

export default App
