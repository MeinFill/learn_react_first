import './button.css'
function Button({text, className}: {text: string, className?: string}) {

  return (
      <button className={`button accent ${className}`}>{text}</button>
  )
}

export default Button
