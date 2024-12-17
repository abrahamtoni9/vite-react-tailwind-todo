import { useEffect, useRef, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => 
{
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  const refHeader = useRef(null);

  useEffect(() => {
    if (darkMode) 
    {
      document.documentElement.classList.add('dark'); 
      // console.log(refHeader.current);
      refHeader.current.classList.add('bg-gray-900');
      localStorage.setItem('theme', 'dark');
    }
    else
    {
      document.documentElement.classList.remove('dark');  
      refHeader.current.classList.remove('bg-gray-900');
      localStorage.setItem('theme', 'light');
    }
  })
  
  return (
      <header className="container mx-auto px-4 pt-8 transition-all duration-1000"  ref={refHeader}>
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          >
          { darkMode ? <IconSun/> : <MoonIcon/>}
        </button>
      </div>
    </header>
  )
}

export default Header;
