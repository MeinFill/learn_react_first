import './addJournalItemButton.css'

import {type IJournalItem} from "../../Components/JournalItem/JournalItem.tsx"
import {LS_NOTE_DATA} from '../../constants.jsx'
import imgSrc from "../../assets/images/Frame.svg"

function addJournalItemButton({setData}: {setData: React.Dispatch<React.SetStateAction<IJournalItem[]>>}) {

  function addJournalItemButtonClick(){
    const data = JSON.parse(localStorage.getItem(LS_NOTE_DATA) ?? '');
    const lastItem = data[data.length-1];
    if (lastItem) data.push({id: parseInt(lastItem.id) + 1, title: 'Новая заметка', date: new Date().toISOString(), text: 'Новое описание', body: ''});
    else data.push({id: 1, title: 'Новая заметка', date: new Date().toISOString(), text: 'Новое описание', body: ''});
    localStorage.setItem(LS_NOTE_DATA, JSON.stringify(data));

    setData(data);
  }

  return (
      <button className='newCardButton' onClick={addJournalItemButtonClick}>
        <img className='addItemImage' src={imgSrc}></img>
        <p className='addItem'>Добавить заметку</p>
      </button>
  )
}

export default addJournalItemButton