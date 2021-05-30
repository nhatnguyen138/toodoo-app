import { useState, useEffect ,useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from 'reactstrap'

import { CategoryDef } from '../utils/TypeDef'
import API from '../utils/API'

export default function CategoriesList() {
    const listRef = useRef<HTMLDivElement>(null)
    const [toggledList,setToggledList] = useState<boolean>(true)
    const [categoryList, setCategoryList] = useState<Array<CategoryDef>>()
    useEffect(() => {
        API.getAllCategories()
        .then((res) => {
            if (res.data.success)
                setCategoryList(res.data.categories)
            else
                console.log(res.data.message)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const showCategoriesList = () => {
        setToggledList(!toggledList)
        if (toggledList) {
            listRef.current!.style.display = "block"
            listRef.current!.style.animation = "Category-Appear 0.2s"
        }
        else {
            listRef.current!.style.animation = "Category-Disappear 0.2s"
            setTimeout(() => listRef.current!.style.display = "none", 200)
        }
    }

    return (
        <div id="NotesCategories">
            <div className="Header">
                Categories
                <ButtonGroup className="ButtonGroup">
                    <Button id="ManageCategories">Manage</Button>
                    <Button id="CollapsedSection" onClick={showCategoriesList}>{toggledList ? "+" : "-"}</Button>
                </ButtonGroup>
            </div>
            <div className="CategoriesList" ref={listRef}>
                {
                    categoryList?.length!==0 ? categoryList && categoryList.map((category, i) => {
                        if (category.titles.length>0) {
                            const NoteTitle = category.titles.map((title,j) => {
                                return (
                                    <Link to={`#${title._id}`} key={j}>
                                        <div id="NoteTitle" style={{marginLeft: "15px",padding:"3px"}}>
                                            {title.title}
                                        </div>
                                    </Link>
                                )   
                            })

                            return (
                                <div className="CategoryName" key={i}>
                                    {category.name}
                                    {NoteTitle}
                                    <hr />
                                </div>
                            )
                        }
                        else return (
                            <div className="CategoryName" key={i}>
                                {category.name}
                                <div style={{fontSize:"0.95rem",fontStyle:"italic",fontWeight:"normal",marginLeft: "15px",padding:"3px"}}>
                                    &lt; no notes here &gt;
                                </div>
                                <hr />
                            </div>
                        )
                    })
                    : <div style={{fontSize:"0.95rem",fontStyle:"italic",fontWeight:"normal",marginLeft: "15px",padding:"3px"}}>
                        &lt; no category &gt;
                    </div> 
                }
            </div>
        </div>
    )
}