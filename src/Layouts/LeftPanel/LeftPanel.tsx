import './LeftPanel.css'
import CardButton from '../../Components/CardButton/CardButton.tsx'
import JournalItem from '../../Components/JournalItem/JournalItem.tsx'
import JournalItemsList from '../../Components/JournalItemsList/JournalItemsList.tsx'
import AddJournalItemButton from '../../Components/addJournalItemButton/addJournalItemButton.tsx'

import {type IJournalItem} from "../../Components/JournalItem/JournalItem.tsx"

function LeftPanel({data, setData, setSelectedId}: {data: Array<IJournalItem>, setData: React.Dispatch<React.SetStateAction<IJournalItem[]>>, setSelectedId: (id: number) => void}) {
  
  const sortItems = (a: IJournalItem, b: IJournalItem) => {
    if (a.date < b.date){
      return 1;
    }
    else{
      return -1;
    }
  }
  
  return (
    <div className="leftPanel">
      <img className='logo' src='./src/assets/images/Group.svg'></img>
      <AddJournalItemButton setData={setData}/>
      <JournalItemsList>
        {data.sort(sortItems).map(el => (
        <CardButton id={el.id} setSelectedId={setSelectedId}>
          <JournalItem data={el} />
        </CardButton>
      ))}
      </JournalItemsList>
    </div>
  )
}

export default LeftPanel