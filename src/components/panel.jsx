import { useContext } from 'react'; 
import { ThemeContext } from './context';

export default function Panel({ title, children }) 
{

  const { theme, setTheme } = useContext(ThemeContext);
  const className = 'panel-' + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      <br></br>
      {children}
    </section>
  );
}