import { useState, useEffect ,useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'reactstrap'

import { NoteDef } from '../utils/TypeDef'
import API from '../utils/API'

export default function Pinned() {
    const pinnedRef = useRef<HTMLDivElement>(null)
    const [toggledPinned,setToggledPinned] = useState<boolean>(true)
    const [notes, setNotes] = useState<Array<NoteDef>>()
    useEffect(() => {
        API.getPinnedNotes()
        .then((res) => {
            if (res.data.success)
                setNotes(res.data.notes)
            else
                console.log(res.data.message)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const showTodoLists = () => {
        setToggledPinned(!toggledPinned)
        if (toggledPinned) {
            pinnedRef.current!.style.display = "block"
            pinnedRef.current!.style.animation = "Category-Appear 0.2s"
        }
        else {
            pinnedRef.current!.style.animation = "Category-Disappear 0.2s"
            setTimeout(() => pinnedRef.current!.style.display = "none", 200)
        }
    }
    
    return (
        <div id="Pinned">
            <div className="Header">
                Pinned
                <Button id="CollapsedSection" onClick={showTodoLists}>{toggledPinned ? "+" : "-"}</Button>
            </div>
            <div className="TodoNotes" ref={pinnedRef}>
                {
                    notes?.length!==0 ? notes && notes.map((note,i) => {
                        return (
                            <AnchorLink href={`#${note._id}`} key={i}>
                                <div id="NoteTitle" style={{marginLeft: "15px",padding:"3px"}}>
                                    {note.title}
                                </div>
                            </AnchorLink>
                        )
                        
                    })
                    : <div style={{fontSize:"0.95rem",fontStyle:"italic",fontWeight:"normal",marginLeft: "15px",padding:"3px"}}>
                        &lt; no pinned notes &gt;
                    </div> 
                }
            </div>
        </div>
    )
}

/*

*/