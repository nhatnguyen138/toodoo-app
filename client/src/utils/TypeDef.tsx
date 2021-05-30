export interface MetaTagDef {
    section?: String
}

export interface NoteDef {
    _id: String,
    title: String,
    pinned: boolean,
    content?: String
}

export interface CategoryDef {
    _id: String,
    name: String,
    titles: [{
        _id: String,
        title: String
    }]
}