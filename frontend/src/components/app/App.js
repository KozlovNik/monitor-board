import React, { useEffect, useState } from 'react';

import Monitor from '../monitor/monitor';
import ChoiceMenu from '../choice-menu/choice-menu';

import './app.css';

const App = () => {

  const [monitorList, setMonitorList] = useState([]);
  const [selectChoice, setSelectChoice] = useState('Все')

  // list of monitor options
  let nameList = monitorList.map(({ name }) => name);
  nameList.unshift('Все');

  const onClick = (value) => {
    setSelectChoice(value)
  }

  // uploading json with monitor data from backend when page loaded
  useEffect(() => {
    fetch('/api/monitors/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async res => {
      const data = await res.json();
      setMonitorList(data);
    })
  }, [])

  let monitors = selectChoice === 'Все'
    ? [...monitorList]
    : monitorList.filter(({ name }) => name === selectChoice)

  let filteredMonitors = monitors.map(item => {
    const { id } = item;
    return (
      <tr key={id} className="table__row">
        <Monitor {...item} />
      </tr>
    )
  })

  return (
    <>
      <ChoiceMenu onClick={onClick} nameList={nameList} selectChoice={selectChoice} />
      <table className="table">
        <thead className="table__head">
          <tr className="table__row">
            <th className="table__th">Имя монитора</th>
            <th className="table__th table__th--media">Файл для воспроизведения</th>
            <th className="table__th">Интервал слайдшоу</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {filteredMonitors}
        </tbody>
      </table>
    </>
  )
}

export default App;