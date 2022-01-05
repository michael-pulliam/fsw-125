
import { useState } from "react"
import ItemFormHandler from "./ItemFormHandler"

export default function Items({ deleteData, btnText, editData, title, Description, date, _id}) {
    const [editToggle, setEditToggle] = useState(false)
    
    return (
        <div id="items">
            { !editToggle ?
            <>
            <h1>{title}</h1>
            <h2>{Description}</h2>
            <h3>{date}</h3>
            <button onClick={() => deleteData(_id)} className="delete-btn" >Delete</button>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className="edit-btn">Edit</button>
            </>
            :
            <ItemFormHandler
            title={title}
            Description={Description}
            _id={_id}
            btnText='Update'
            submit={editData}
            />
            }
        </div>
    )
}
