import React from 'react'

const Images = () => {
    return (
        <>
            <picture>
                <source media="(min-width:1440px)" srcSet="/images/background-desktop.png" />
                <source media="(min-width:992px)" srcSet="/images/background-tablet.png" />
                <source media="(max-width:991px)" srcSet="/images/background-mobile.png" />
                <img className="absolute top-0 left-0 -z-10 w-full h-full object-cover" src="/images/background-desktop.png" alt="Background Image" />
            </picture>
            <img className="absolute top-0 left-0 -z-10 w-full h-full object-cover" src="/images/pattern-lines.svg" alt="Pattern Lines" />
            <img className="absolute top-1/2 left-4/6 -z-10" src="/images/pattern-circle.svg" alt="Pattern Circle" />
            <picture>
                <source media="(min-width:992px)" srcSet="/images/pattern-squiggly-line-bottom-desktop.svg" />
                <source media="(max-width:991px)" srcSet="/images/pattern-squiggly-line-bottom-mobile-tablet.svg" />
                <img className="absolute bottom-0 left-0 -z-10" src="/images/pattern-squiggly-line-bottom-desktop.svg" alt="Squiggly Line Bottom" />
            </picture>
        </>
    )
}

export default Images