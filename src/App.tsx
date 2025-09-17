import './App.css'

import LeftPanel from './Layouts/LeftPanel/LeftPanel.tsx'
import RightPanel from './Layouts/RightPanel/RightPanel.tsx'
import { useEffect, useState } from 'react';
import type { IJournalItem} from "./Components/JournalItem/JournalItem.tsx"
import {LS_NOTE_DATA} from './constants.jsx'

function App() {

  const [data, setData] = useState<IJournalItem[]>([]);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const actualData = JSON.parse(localStorage.getItem(LS_NOTE_DATA) ?? '[]');
    setData(actualData);
  }, [])


  return (
    <>
      <LeftPanel data={data} setData={setData} setSelectedId={setSelectedId}></LeftPanel>
      <RightPanel data={data} setData={setData} selectedId={selectedId}></RightPanel>
    </>
  )
}

export default App
