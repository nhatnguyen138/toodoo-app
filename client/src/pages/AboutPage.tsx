import MetaTag from '../layouts/MetaTag'
import Menu from '../layouts/Menu'

export default function AboutPage() {
    return (
        <div id="AboutContainer">
            <MetaTag section="About" />
            <Menu />
            <div id="Aside">
                Aside
            </div>
            <div id="Main">
                About Page
            </div>
        </div>
    )
}
