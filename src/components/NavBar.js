import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
    return (<div>
            <ul className='navbar'>
                <li><Link to="/"> خانه </Link></li>
                <li><Link to="/blogs"> بلاگ پراپز پاس دادم </Link></li>
                <li><Link to="/products"> محصولات </Link></li>
                <li><Link to="/aboutUs"> درباره ما  </Link></li>
                <li><Link to="/wannaCheckFetch">استفاده از دستور  Fetch  </Link></li>
                <li><Link to="/create">  ایجاد پست جدید </Link></li>
            </ul>
        </div>);
};

export default NavBar;
