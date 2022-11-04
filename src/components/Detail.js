import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Detail = () => {
    const [detail, setDetail] = useState();
    const navigate = useNavigate();
    let { id } = useParams();
    useEffect(() => {
        axios.get(`https://api.extrazone.com/promotions?Id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Country-Id': 'TR',
                'X-Language-Id': 'TR',
            }
        }).then((promotions) => {
            setDetail(promotions.data);
        })
    }, [])
    return (
        <div>
            <img style={{ borderBottomLeftRadius: '40%', height: 400 }} src={detail && detail.ImageUrl} />
            <img className='detailImageIcon' src={detail && detail.BrandIconUrl} />
            <a onClick={() => navigate('/')}>
                <img style={{ position: 'absolute', top: '3vh', left: '2vh' }} src='/images/Back_Button.png' />
            </a>
            <span className='detailRemaningText'>
                {detail && detail.RemainingText}
            </span>
            <div style={{ width: '100vw', paddingTop: 10, display: 'flex' }} >
                <div dangerouslySetInnerHTML={{ __html: detail && detail.Description }}></div>
            </div>
            <div className='d-flex justify-content-center w-100' >
                <button className='JoinButton'>
                    Hemen Katıl
                </button >
            </div>
        </div >
    )
}
