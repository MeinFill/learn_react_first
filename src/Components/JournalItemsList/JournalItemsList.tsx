import './JournalItemsList.css'

function JournalItem({children}: {children: React.ReactNode} ) {
  

  return (
      <div className="CardButtonItemsPanel">
        {children}
      </div>
  )
}

export default JournalItem
