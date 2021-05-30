import { Helmet } from 'react-helmet'
import { MetaTagDef } from '../utils/TypeDef'
import Logo from '../assets/TooDooLogo.png'

export default function MetaTag(props:MetaTagDef) {
    let {section} = props
    if (section!=="") {
        section+=" | "
        return (
            <Helmet>
                <title>{section}TooDoo</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
        )
    }
    else
        return (
            <Helmet>
                <title>TooDoo - A minimalistic note app</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
        )
}
