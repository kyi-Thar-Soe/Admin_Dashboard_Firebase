import Box from '@mui/material/Box';
import BasicTab from './Tabs';
import { useAppStore } from '../../AppStore';
export default function Settings() {
    const open = useAppStore((state)=> state.dopen);
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div style={{marginLeft:open ? "15rem" : "4rem"}}>
            <BasicTab/>
            </div>
        </Box>
    )
}