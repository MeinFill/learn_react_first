import './App.css'

import LeftPanel from './Layouts/LeftPanel/LeftPanel.tsx'
import RightPanel from './Layouts/RightPanel/RightPanel.tsx'
import { useEffect, useState } from 'react';

import type { IJournalItem} from "./Components/JournalItem/JournalItem.tsx"



function App() {

  const [data, setData] = useState<IJournalItem[]>([]);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

console.log('🌀 App render, selectedId =', selectedId);

  useEffect(() => {
    const actualData = JSON.parse(localStorage.getItem('data') ?? '[]');
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
