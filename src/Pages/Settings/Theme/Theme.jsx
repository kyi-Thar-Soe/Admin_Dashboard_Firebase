import { useContext} from 'react';
import './Theme.css';
import Switch from '@mui/material/Switch';
import { Context } from '../../../Context/Context';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function Theme() {
   const {themes,toggleTheme} = useContext(Context);

    return(
        <>
        <div>
            <h5>Theme</h5>
        </div>
        <div>
            <h6>Light Theme</h6>
            <span className='switch'><Switch {...label} checked={themes === 'light'} size="small" onChange={toggleTheme}/></span>
        </div>
        <div>
            <h6>Dark Theme</h6>
            <span className='switch'><Switch {...label} checked={themes === 'dark'} size="small" onChange={toggleTheme}/></span>
        </div>
        </>
    )
}