import CheckBoxIcon from "../../atoms/vectors/CheckboxIcon"
import { useDispatch } from "react-redux"
const CustomCheckBox = ({completed, handleChecked}:{completed:boolean, handleChecked:any}) => {
    console.log(completed)
    return <div className={`h- h-4 w-4  rounded-sm cursor-pointer ${completed ? 'bg-blue-600':' bg-gray-200'}`} onClick={handleChecked}>
        <CheckBoxIcon/>
    </div>
}
export default CustomCheckBox
