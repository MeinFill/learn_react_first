
import './JournalItemForm.css'
import { useEffect, useState } from 'react'
import {LS_NOTE_DATA} from '../../constants.jsx'

export interface IJournalItem {id: string, title: string, date: Date, text: string, body: string, metki: string }

function JournalItemForm({data, setData}: {data: IJournalItem, setData: React.Dispatch<React.SetStateAction<IJournalItem[]>>}) {

    const [title, changeTitle] = useState(data.title);
    const [metki, changeMetki] = useState(data.metki);
    const [desc, changeDesc] = useState(data.text);
    const [date, changeDate] = useState(() => new Date(data.date));
    const [body, changeBody] = useState(data.body);


    useEffect(() => {
        changeTitle(data.title);
        changeMetki(data.metki);
        changeDesc(data.text);
        changeDate(new Date(data.date));
        changeBody(data.body);
    }, [data]);

    function titleChange(event: React.ChangeEvent<HTMLInputElement>){
        changeTitle(event.target.value);
    }
    
    function metkiChange(event: React.ChangeEvent<HTMLInputElement>){
        changeMetki(event.target.value);
    }

    function dateChange(event: React.ChangeEvent<HTMLInputElement>){
        changeDate(new Date(event.target.value));
    }

    function descChange(event: React.ChangeEvent<HTMLInputElement>){
        changeDesc(event.target.value);
    }

    function bodychange(event: React.ChangeEvent<HTMLTextAreaElement>){
        changeBody(event.target.value);
    }
    
    function archiveItem(event: React.MouseEvent<HTMLButtonElement>) {
        const data = JSON.parse(localStorage.getItem(LS_NOTE_DATA) ?? '');
        const newData = data.filter((dataItem: IJournalItem) => dataItem.id != event.currentTarget.parentElement?.id);
        localStorage.setItem(LS_NOTE_DATA, JSON.stringify(newData));

        setData(newData);
    }

    function saveItem(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newData = new FormData(event.currentTarget);
        const data = JSON.parse(localStorage.getItem(LS_NOTE_DATA) ?? '');
        const currentItem = data.find((item: IJournalItem) => Number(item.id) === Number(event.currentTarget.id));
        console.log(currentItem);

        currentItem.title = newData.get('title');
        currentItem.date = new Date(newData.get('date') as string).toISOString();
        currentItem.text = newData.get('desc');
        currentItem.metki = newData.get('metki');
        currentItem.body = newData.get('textArea');

        localStorage.setItem(LS_NOTE_DATA, JSON.stringify(data));

        setData(data);
    }

    return (
        <form id={data.id}  className="CardButtonItemsPanel" onSubmit={saveItem} >
            <div id={data.id} className='head'>
                <input name='title' className='title' value={title} onChange={titleChange}></input>
                <button type='button' className='archiveButton' onClick={archiveItem}>
                    <img className='archive' src='./src/assets/images/Archive.svg'></img>
                </button>
            </div>
            <div className='input'>
                <img className='imageInput' src='./src/assets/images/Kalendar.svg'></img>
                <p className='textInput'>Дата</p>
                <input name='date' className='inputDate' type='date' value={date.toISOString().split('T')[0]} onChange={dateChange}></input>
            </div>
            <div className='input'>
                <img className='imageInput' src='./src/assets/images/Metki.svg'></img>
                <p className='textInput'>Метки</p>
                <input name='metki' className='metki' type='text' value={metki} onChange={metkiChange}></input>
            </div>
            <div className='input'>
                <img className='imageInput' src='./src/assets/images/Metki.svg'></img>
                <p className='textInput'>Описание</p>
                <input name='desc' className='desc' type='text' value={desc} onChange={descChange}></input>
            </div>
            <textarea name='textArea' value={body} onChange={bodychange}></textarea>
            <button className="saveJournalItemButton">Сохранить</button>
        </form>
  )
}

export default JournalItemForm


