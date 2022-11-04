import React from 'react'

export const NavBar = () => {
    return (<>

        <div className='Navbar'>
            <button className='NavBarSearchButton'>
                <img src='/images/Search.svg' />
            </button>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{
                    border: 'none', justifyContent: 'center', marginTop: '-60px',
                    backgroundColor: 'transparent', zIndex: 10
                }}>
                    <img src='/images/Portal.svg' />
                </button>
            </div>
            <button style={{ border: 'none', justifyContent: 'flex-end', backgroundColor: 'transparent', zIndex: 10 }}>
                <img src='/images/Star.svg' />
            </button>
        </div>
    </>
    )
}
