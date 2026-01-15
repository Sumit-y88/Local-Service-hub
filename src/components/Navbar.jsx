import React, { useState } from 'react'

import LeftNav from './LeftNav'
import MiddleNav from './MiddleNav'
import RightNav from './RightNav'
import Ham from './Ham'
import MobLinks from './MobLinks'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (<>
        <nav className='w-full p-4 md:p-3 fixed top-0 left-0 flex items-center justify-between z-50 bg-white 
                border-b border-blue-100 shadow-md'>
            <div className="left w-full h-fit flex flex-row items-center gap-2">
                <LeftNav />
            </div>
            <div className="middle hidden md:inline-block w-full h-fit">
                <MiddleNav />
            </div>
            <div className="right md:inline-block w-full h-fit">
                <RightNav />
            </div>
            <div className='md:hidden'>
                <Ham
                    isOpen={menuOpen}
                    toggle={() => setMenuOpen(!menuOpen)}
                />
            </div>

        </nav>
        {menuOpen && (
            <div className='fixed flex flex-col gap-2 top-20 left-4 right-4 h-fit bg-gray-300 p-3 rounded-xl z-10'>
                <MobLinks closeMenu={() => setMenuOpen(false)} />
            </div>
        )}
    </>
    )
}

export default Navbar
