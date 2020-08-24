import React from 'react';

import Slider from '../slider/slider'

import './monitor.css';

const Monitor = (props) => {

    let { name, monitor_type } = props;

    let mediaContent;

    // choosing action considering the monitor type
    if (monitor_type === 'image') {
        let { image1: image } = props;
        mediaContent = <img className="table__media" src={image} />
    } else if (monitor_type === 'video') {
        let { video } = props;
        mediaContent = (
            <video className="table__media" controls>
                <source src={video} />
            </video>
        )
    } else {
        mediaContent = <Slider {...props} />
    }
    return (
        <>
            <td className="table__data">{name}</td>
            <td className="table__data table__data--media">{mediaContent}</td>
            <td className="table__data">
                {monitor_type === 'slider' ? '15 секунд' : ''}
            </td>
        </>
    )
};

export default Monitor;
