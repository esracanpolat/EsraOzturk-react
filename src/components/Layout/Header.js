import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <div className='mt-4 ml-4' style={{ marginLeft: 10 }}>
                <img src='/images/Logo.svg' />
            </div>
            <div className='mt-4 mr-4' style={{ display: "inline-flex", marginRight: 10 }}>
                <button style={{ textAlign: "center", fontSize: '12px', color: 'white', borderRadius: 20, backgroundColor: 'red', border: 'none', height: 40, width: 91 }}>
                    Giriş Yap </button>
                <div className='d-flex justify-content-center align-items-center' style={{ marginLeft: 10, borderRadius: 50, height: 40, width: 40, backgroundColor: 'black' }}>
                    <img src='/images/Profile.svg' />
                </div>
            </div>
        </div>
    )
}
