import './addJournalItemButton.css'

import {type IJournalItem} from "../../Components/JournalItem/JournalItem.tsx"

function addJournalItemButton({setData}: {setData: React.Dispatch<React.SetStateAction<IJournalItem[]>>}) {

  function addJournalItemButtonClick(){
    const data = JSON.parse(localStorage.getItem('data') ?? '');
    const lastItem = data[data.length-1];
    if (lastItem) data.push({id: parseInt(lastItem.id) + 1, title: 'Новая заметка', date: new Date().toISOString(), text: 'Новое описание', body: ''});
    else data.push({id: 1, title: 'Новая заметка', date: new Date().toISOString(), text: 'Новое описание', body: ''});
    localStorage.setItem('data', JSON.stringify(data));

    setData(data);
  }

  return (
      <button className='newCardButton' onClick={addJournalItemButtonClick}>
        <img className='addItemImage' src='./src/assets/images/Frame.svg'></img>
        <p className='addItem'>Добавить заметку</p>
      </button>
  )
}

export default addJournalItemButton