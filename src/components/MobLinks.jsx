import React from 'react'

const MobLinks = ({closeMenu}) => {
    const navlinks = [
        { text: "Home", link: "#home" },
        { text: "About", link: "#about" },
        { text: "Services", link: "#services" },
        { text: "Contact", link: "#contact" },
    ];
    return (
        <>
            <div className=" flex flex-col mt-5 items-center justify-center gap-8 w-full">
                {navlinks.map((item, idx) => (

                    <a
                        key={idx}
                        href={item.link}
                        onClick={() => closeMenu()}

                        className={`relative text-gray-600 font-medium
                        text-lg
            
                     transition-colors duration-300
                     hover:text-blue-600
                     
                     after:absolute after:left-0 after:-bottom-1
                     after:h-[2px] after:w-0 after:bg-blue-600
                     after:transition-all after:duration-300
                     hover:after:w-full`}
                    >
                        {item.text}
                    </a>
                ))}

            </div>
            <div className='flex items-center justify-center mt-3  p-2'>
                <button className='bg-blue-600 text-gray-200 px-4 py-2 hover:bg-blue-700 transition-colors duration-300 ease-in-out hover:text-white rounded-xl text-lg'>Find Services</button>
            </div>

        </>
    )
}

export default MobLinks
