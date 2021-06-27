import React, {useState, Fragment} from 'react';
import {MenuItems} from './MenuItems';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Link, NavLink} from 'react-router-dom'

import {NavButton} from './NavButton'
import MenuIcon from "./MenuIcon";
import logo from '../../Assets/Images/logos/logo-sm.png'
import './Nav.css'


function Navbar() {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus nav-sub"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }


    return (
        <nav className="NavbarItem">
            <div className='menu-logo'><img src={logo} alt="" width="100%" height="100%"/></div>
            <div className='menu-icon' onClick={handleClick}>
                <MenuIcon/>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) =>
                    (
                        <Fragment key={index}>
                            {item.children == null ?
                                <li><Link className={item.cName} to={item.url}>{item.title}</Link></li> :
                                <li onClick={toggleSubmenu}><Link className={item.cName} to={item.url}>{item.title}<KeyboardArrowDownIcon/> </Link>
                                    <ul className={boxClassSubMenu.join(' ')}>
                                        {item.children.map((item, index) => (
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={item.url}> {item.title} </NavLink></li>
                                        ))}
                                    </ul>
                                </li>
                            }

                        </Fragment>
                    )
                )
                }
                {/*<li onClick={toggleSubmenu} className="nav-link"><Link to="#"> Shop <KeyboardArrowDownIcon/> </Link>*/}
                {/*    <ul className={boxClassSubMenu.join(' ')}>*/}
                {/*        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Online`}> Online*/}
                {/*            Shop </NavLink></li>*/}
                {/*        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline*/}
                {/*            Shop </NavLink></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
            </ul>
            <NavButton><NavLink onClick={toggleClass} activeClassName='is-active' to="/give"> Donate </NavLink></NavButton>
        </nav>
    )


}

export default Navbar;
