import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Scrool({ setSelectBrandD }) {
    const [brandData, setBrandData] = useState([]);
    const [selectBrand, setSelectBrand] = useState([]);
    function getAllBrand(params) {
        axios.get('https://api.extrazone.com/tags/list', {
            headers: {
                'Content-Type': 'application/json',
                'X-Country-Id': 'TR',
                'X-Language-Id': 'TR',
            }
        }).then((brands) => {
            setBrandData(brands.data)
        })
    }
    useEffect(() => {
        setSelectBrandD(selectBrand);
    }, [selectBrand])

    function selectBrandHandle(param) {
        if (selectBrand.includes(param)) {
            const newArray = selectBrand.filter((x) => x !== param);
            setSelectBrand(newArray);
        } else {
            setSelectBrand(param);
        }

    }

    useEffect(() => {
        getAllBrand();

    }, []);
    return (
        <div style={{ overflowX: 'scroll', width: '100vw', display: 'inline-flex', padding: '12px' }}>
            <div className='d-flex justify-content-space-between align-items-center mt-2 ml-2' style={{ border: '1px solid rgba(236, 238, 239, 1)', overflowX: 'auto', borderRadius: 10, height: 36, width: 'auto' }}>
                <div>
                    <img src='/images/searchButton.svg' />
                </div>
                <div style={{ textAlign: 'center', marginLeft: 5 }}>
                    Fırsat Bul
                </div>
            </div>
            {brandData && brandData.map((brand) => (
                <a style={{ cursor: 'pointer' }} onClick={() => selectBrandHandle(brand.Name)}>,
                    <div className='d-flex justify-content-space-between align-items-center mt-2 ml-2' style={{ border: selectBrand.includes(brand.Name) === true ? '1px solid blue' : '1px solid rgba(236, 238, 239, 1)', borderRadius: 10, height: 36, width: 105, marginLeft: 8 }}>
                        <div>
                            <img style={{ borderRadius: 5, height: 24, width: 24 }} src={brand.IconUrl} />
                        </div>
                        <div style={{ textAlign: 'center', marginLeft: 5, width: 'auto', fontSize: 12 }}>
                            {brand.Name}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}
