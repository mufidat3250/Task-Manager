import './style.scss'

const Button = ({title, otherClass, handleSubmit}:{title:string, otherClass:string, handleSubmit?:() => void}) => {
  return (
    <button className={`${otherClass} button bg-blue-600`}  type='submit' onClick={handleSubmit}>{title}</button>
  )
}

export default Button
