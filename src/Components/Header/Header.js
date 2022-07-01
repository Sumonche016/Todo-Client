import { Link } from 'react-router-dom'

const Header = () => {
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/completed'>Completed</Link></li>
        <li><Link to='/todo'>ToDo</Link></li>
        <li><Link to='/calender'>Calender</Link></li>

    </>

    return (
        <div className=''>
            <div className="navbar bg-base-100  mx-auto py-[15px] md:fixed w-full md:bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu text-[17px] text-[#1f1f25]  font-medium gap-5 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img src="logo.png" alt="" /><span className="text-4xl ml-2 md:text-white">TODO</span></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 text-[17px] text-[#c6c9d8] p-0  font-medium">
                        {menu}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;