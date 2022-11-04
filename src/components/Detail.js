import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Detail = () => {
    const [detail, setDetail] = useState();
    const navigate = useNavigate();
    let { id } = useParams();
    useEffect(() => {
        console.log(id, " id");
        axios.get(`https://api.extrazone.com/promotions?Id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Country-Id': 'TR',
                'X-Language-Id': 'TR',
            }
        }).then((promotions) => {
            setDetail(promotions.data);
            console.log(promotions.data, "x");
        })
    }, [])
    return (
        <div>
            <img style={{ borderBottomLeftRadius: '40%', height: 400 }} src={detail && detail.ImageUrl} />
            <img style={{ position: 'absolute', bottom: '40vh', height: '12vh', left: '4vh' }} src={detail && detail.BrandIconUrl} />
            <a onClick={() => navigate('/')}>
                <img style={{ position: 'absolute', top: '3vh', left: '2vh' }} src='/images/Back_Button.png' />
            </a>
            <span style={{ position: 'absolute', right: 15, padding: 5, color: 'white', bottom: '40vh', backgroundColor: 'rgba(29, 30, 28, 1)', fontSize: 14, border: 'none', borderRadius: 20, textAlign: 'center' }}>
                {detail && detail.RemainingText}
            </span>
            <div style={{ padding: 30 }}>
                <div dangerouslySetInnerHTML={{ __html: detail && detail.Description }}></div>
            </div>
            <div className='d-flex justify-content-center'>
                <button style={{ position: 'fixed', border: 'none', bottom: 5, backgroundColor: 'red', color: 'white', height: 60, width: 160, borderRadius: 50, zIndex: 10 }}>
                    Hemen Katıl
                </button >
            </div>
        </div >
    )
}
