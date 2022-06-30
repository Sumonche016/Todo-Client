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
            <div class="navbar bg-base-100 w-[80%] mx-auto py-[15px]">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu text-[17px] text-[#1f1f25] font-medium gap-5 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl"><img src="logo.png" alt="" /><span className="text-4xl ml-2">TODO</span></a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal gap-5 text-[17px] p-0 text-[#1f1f25] font-medium">
                        {menu}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;