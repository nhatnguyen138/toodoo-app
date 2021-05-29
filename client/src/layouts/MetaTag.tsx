import { Helmet } from 'react-helmet'

export default function MetaTag(props:any) {
    let {section} = props
    if (section!=="")
        section+=" | "
    return (
        <Helmet>
            <title>{section}TooDoo</title>
            <link rel="icon" href="TooDooLogo.png"/>
        </Helmet>
    )
}
