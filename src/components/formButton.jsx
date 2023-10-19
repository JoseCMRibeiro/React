import { useContext } from 'react';
import { ThemeContext } from './context';
import { ClickCounter } from './context';


export default function FormButton({children }) 
{
  const { theme, setTheme } = useContext(ThemeContext);
  const { count, setCount} = useContext(ClickCounter)
  const className = 'button-' + theme;

 function HandleClic()
 {
    setTheme(children = children === "dark" ? "light" : "dark");
    setCount(count +1);
    console.log(count)
 }

  return (
    <button className={className} onClick={HandleClic}>
      {children}      
    </button>
  );
}