import MetaTag from '../layouts/MetaTag'
import Menu from '../layouts/Menu'

export default function HomePage() {  
    return (
        <div id="NotesContainer">
            <MetaTag section="" />
            <Menu />
            <div id="Aside">
                Aside
            </div>
            <div id="Notes">
                Notes
            </div>
        </div>
    )
}
