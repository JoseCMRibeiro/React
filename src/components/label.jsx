import { useContext } from 'react'; 
import { ThemeContext } from './context';


export default function Label()
{
    const { theme, setTheme } = useContext(ThemeContext);
    return(
        <label>
            <input
            type="checkbox"
            checked={theme === 'dark'}//mark checked if theme is dark
            onChange={
                        (e) => { setTheme(e.target.checked ? 'dark' : 'light'); }
                    }
            />
            Use dark mode
        </label>
    )
}
