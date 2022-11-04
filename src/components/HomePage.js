import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Layout/Header';
import { NavBar } from './Layout/NavBar'
import Scrool from './Scrool'

export const HomePage = () => {
    const navigate = useNavigate();
    const [brandData, setBrandData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [SelectedBrand, setSelectedBrand] = useState([]);
    function setSelectBrandD(params) {
        setSelectedBrand(...params)
        let y = brandData.filter((x) => (
            x.Title.includes(params)
        ))
        setFilterData(y);
    }

    function getAllBrand() {
        axios.get('https://api.extrazone.com/promotions/list?Channel=PWA', {
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
        setSelectedBrand(null)
        getAllBrand();

    }, []);

    return (
        <div>
            <Header />
            <div>
                <Scrool setSelectBrandD={setSelectBrandD} />
            </div>
            <div style={{ width: '100vw', height: '100vh', overflowX: 'scroll' }}>
                <div style={{ display: 'inline-flex' }}>
                    {filterData.length === 0 && SelectedBrand === null && brandData.map((brands) => (<>
                        <div style={{ position: 'relative', display: 'flex', marginLeft: 15, justifyContent: 'center', marginTop: 10 }}>
                            <svg className='transformDiv' style={{ backgroundColor: brands.PromotionCardColor }}>
                            </svg>
                            <div className='HomePageContent'>
                                <span style={{ position: 'absolute', right: 15, padding: 5, color: 'white', top: '30vh', backgroundColor: 'rgba(29, 30, 28, 1)', fontSize: 14, border: 'none', borderRadius: 20, textAlign: 'center' }}>
                                    {brands.RemainingText}
                                </span>
                                <img style={{ maxWidth: '300px', borderBottomLeftRadius: 120 }} src={brands.ImageUrl} />
                                {/* <div style={{ backgroundColor: 'white', borderRadius: '50%', height: 80, width: 80, position: 'absolute', top: '50vh' }}> */}
                                <img style={{ position: 'absolute', left: '5vw', top: '200px', height: '11vh', zIndex: 20 }} src={brands.BrandIconUrl} />
                                <div style={{ textAlign: 'center', marginTop: 20 }} dangerouslySetInnerHTML={{ __html: brands.Title }}>
                                </div>
                                <a onClick={() => navigate(`campaign/${brands.SeoName}/${brands.Id}`)} style={{ color: brands.PromotionCardColor }}> Daha Daha</a>

                            </div>

                        </div>  </>))}
                    {filterData.length > 0 && filterData.map((brands) => (<>
                        <div style={{ position: 'relative', display: 'flex', marginLeft: 15, justifyContent: 'center', marginTop: 10 }}>
                            <svg className='transformDiv' style={{ backgroundColor: brands.PromotionCardColor }}>
                            </svg>
                            <div className='HomePageContent'>
                                <span style={{ position: 'absolute', right: 15, padding: 5, color: 'white', top: '30vh', backgroundColor: 'rgba(29, 30, 28, 1)', fontSize: 14, border: 'none', borderRadius: 20, textAlign: 'center' }}>
                                    {brands.RemainingText}
                                </span>
                                <img style={{ maxWidth: '300px', borderBottomLeftRadius: 120 }} src={brands.ImageUrl} />
                                {/* <div style={{ backgroundColor: 'white', borderRadius: '50%', height: 80, width: 80, position: 'absolute', top: '50vh' }}> */}
                                <img style={{ position: 'absolute', left: '5vw', top: '25vh', height: '11vh', zIndex: 20 }} src={brands.BrandIconUrl} />
                                <div style={{ textAlign: 'center', marginTop: 20 }} dangerouslySetInnerHTML={{ __html: brands.Title }}>
                                </div>
                                <a onClick={() => navigate(`campaign/${brands.SeoName}/${brands.Id}`)} style={{ color: brands.PromotionCardColor }}> Daha Daha</a>


                            </div>

                        </div>  </>))}
                </div>
            </div>
            <NavBar />
        </div>
    )
}
