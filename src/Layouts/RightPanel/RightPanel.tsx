import './RightPanel.css'
import JournalItemForm from '../../Components/JournalItemForm/JournalItemForm.tsx'

import {type IJournalItem} from "../../Components/JournalItem/JournalItem.tsx"

function RightPanel({data, selectedId, setData}: {data: Array<IJournalItem>, selectedId?: number, setData: React.Dispatch<React.SetStateAction<IJournalItem[]>>}) {
  console.log('🎯 RightPanel render. selectedId:', selectedId);
  const selectedItem = data.find(item => Number(item.id) === selectedId);
  return (
    <div className="rightPanel">
      {selectedItem ?
        <JournalItemForm data={selectedItem} setData={setData}  />
      : <div className="choose">Выберите воспоминание</div>}
    </div>
  )
}

export default RightPanel