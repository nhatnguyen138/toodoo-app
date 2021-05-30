import MetaTag from '../layouts/MetaTag'
import Menu from '../layouts/Menu'
import Pinned from '../components/Pinned'
import CategoriesList from '../components/CategoriesList'

export default function HomePage() {  
    return (
        <div id="NotesContainer">
            <MetaTag section="" />
            <Menu />
            <div id="Aside">
                <Pinned />
                <CategoriesList />
            </div>
            <div id="Notes">
                Notes
            </div>
        </div>
    )
}
