import { useState } from 'react';
import { ThemeContext } from '../components/context';
import Label from '../components/label';
import Form from '../components/form';
import RefButton from '../components/refButton';
import Panel from '../components/panel';
import FormButton from '../components/formButton';
import { ClickCounter } from '../components/context';

export default function ContextSamples() 
{
  const [theme, setTheme] = useState('dark')
  const [count, setCount] = useState(0)
  return (
    <div className='center_screen'>
      
      <ClickCounter.Provider value ={{count,setCount}}> 
          <ThemeContext.Provider value={{theme,setTheme}}>
                <Panel title="This is a panel">
                    <Form title="This is a form">
                        <FormButton children={theme}/>
                    </Form>
                </Panel>
                <Label/>
                <br></br>
                <FormButton children={theme}/>
                <RefButton>Click me</RefButton>
          </ThemeContext.Provider>
      </ClickCounter.Provider>

    </div>
  );
}