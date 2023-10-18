import Box from '@mui/material/Box';
import ProductList from './ProductList';
import { useAppStore } from '../../AppStore';

export default function Products() {
    const open = useAppStore((state)=> state.dopen);
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3,height: "100vh" }}>
            <div style={{marginLeft:open? "15rem" : "4rem"}}>
            <ProductList/>
            </div>
        </Box>
    )
}