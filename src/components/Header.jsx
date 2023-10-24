import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className=' bg-indigo-950 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className=' font-bold text-sm sm:text-xl flex-wrap'>
          <span className=' text-slate-300 '>Sahand</span>
          <span  className=' text-slate-50 '>Estate</span>
        </h1>
        </Link>
        <form className=' bg-slate-100 p-3 rounded-sm flex items-center h-7'>
          <input 
          type="text" 
          placeholder='Search...' 
          className=' bg-transparent focus:outline-none h-7 w-24 sm:w-64 '
          ></input>
          <FaSearch className=' text-slate-500'></FaSearch>
        </form>

        <ul className=' flex gap-4 text-white'>
          <Link to='/'>
            <li className='hidden sm:inline hover:text-blue-300'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline  hover:text-blue-300'>About</li>
          </Link>
          <Link to='/sign-in'>
            <li className='hidden sm:inline hover:text-blue-300'>Sing in</li>
          </Link>
          
          
        </ul>

      </div>
      

    </header>
  )
}
