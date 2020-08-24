import React, { useRef } from 'react';

import './choice-menu.css';

const ChoiceMenu = ({ nameList, selectChoice, onClick }) => {

    const selectRef = useRef();

    return (
        <div className="choice-menu">
            <select
                ref={selectRef}
                className="choice-menu__select">
                {nameList.map((name, ind) => {
                    return <option key={ind} value={name}>{name}</option>
                })}
            </select>
            <button
                onClick={() => onClick(selectRef.current.value)}
                className="choice-menu__button">
                Применить
            </button>
        </div>
    )
}

export default ChoiceMenu;
