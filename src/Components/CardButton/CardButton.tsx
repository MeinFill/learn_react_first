import type { ReactNode } from 'react';
import './CardButton.css'

function CardButton({children, className, id, setSelectedId}: {children: ReactNode, className?: string, id?: string, setSelectedId: (id: number) => void}) {
  
  function click(event: React.MouseEvent<HTMLButtonElement>){
    setSelectedId(Number(event.currentTarget.id));
  }
  
  return (
      <button id={id} onClick={click} className={`card-button ${className}`}>{children}</button>
  )
}

export default CardButton
