import './JournalItem.css'

export interface IJournalItem {id: string, title: string, date: Date, text: string, body: string, metki: string }

function JournalItem({data}:{data:IJournalItem} ) {
  return (
      <>
        <h2 className="journal-item-name">{data.title}</h2>
        <div className="journal-item-body">
            <p className="date">{new Intl.DateTimeFormat('ru-RU').format(new Date(data.date))}</p>
            <p className="description">{data.text}</p>
        </div>
      </>
  )
}

export default JournalItem
