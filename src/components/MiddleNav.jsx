import React from "react";

const MiddleNav = () => {
    const navlinks = [
        { text: "Home", link: "#home" },
        { text: "About", link: "#about" },
        { text: "Services", link: "#services" },
        { text: "Contact", link: "#contact" },
    ];

    return (
        <div className="flex items-center justify-center gap-8">
            {navlinks.map((item, idx) => (

                <a
                    key={idx}
                    href={item.link}
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
    );
};

export default MiddleNav;
