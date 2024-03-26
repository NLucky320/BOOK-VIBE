

import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const MainLayouts = () => {
    return (
        <div className='max-w-[1170px] mx-auto p-4' >     
            <Nav></Nav>      
           <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayouts;