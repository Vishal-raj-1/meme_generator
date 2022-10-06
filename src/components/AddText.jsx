import React, {useState} from 'react'
import Draggable from 'react-draggable'
const AddText = () => {
    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState('Double click to edit & Drag to Place it');

    return (
        <Draggable>
            {
                editMode 
                ? <input value={text} onChange={(e) => setText(e.target.value)} onDoubleClick={() => setEditMode(false)} className='py-2 pl-3 font-bold my-2 text-primary w-100'/>
                : <p className='text-3xl font-bold font-helvetica text-primary' onDoubleClick={() => setEditMode(true)}>{text}</p>
            }
        </Draggable>
    )
}

export default AddText