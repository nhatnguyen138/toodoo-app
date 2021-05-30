import { useState, useEffect } from 'react'

import { NoteDef } from '../utils/TypeDef'
import API from '../utils/API'

export default function NotesList() {
    const [notes, setNotes] = useState<Array<NoteDef>>()
    useEffect(() => {
        API.getAllNotes()
        .then((res) => {
            if (res.data.success)
                setNotes(res.data.notes)
            else
                console.log(res.data.message)
        })
    }, [])
    return (
        <div id="Notes">
            {
                notes?.length!==0 ? notes && notes.map((note,i) => {
                    let s:string
                    if (!!note.content)
                        s = note.content.toString()
                    else s = ''
                    
                    return (
                        <div className="NotePaper" id={`${note._id}`}>
                            <div className="Title">{note.title}</div>
                            <div className="Content" dangerouslySetInnerHTML={{__html: s}} />
                        </div>
                    )

                        
                })
                : <div style={{fontSize:"1.3rem",marginTop:"20px"}}>
                    No notes to show.
                </div>
            }
        </div>
    )
}
