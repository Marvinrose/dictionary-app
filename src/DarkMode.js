import { useEffect, useState } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem(`theme`) || `light sun`);
  const toggleTheme = () => {
    if (theme === `light`) {
      setTheme(`dark`);
    } else {
      setTheme(`light`);
    }
  };

  useEffect(() =>{
    localStorage.setItem(`theme`, theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <button className="sun" onClick={toggleTheme}>
        <i class="fa fa-sun-o" aria-hidden="true"></i>
      </button>
     
    </div>
  );
}
