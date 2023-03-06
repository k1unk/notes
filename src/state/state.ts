export interface IAppState {
    listOrTiles: View
    notes: INote[]
    searchValue: string
    selectedNoteId: number
    tilesNoteIsOpened: boolean
}

export interface INote {
    id: number,
    title: string,
    body: string,
    date: number
}

export enum View {
    List,
    Tiles
}

export const initialAppState: IAppState = {
    listOrTiles: View.List,
    selectedNoteId: 1,
    searchValue: '',
    tilesNoteIsOpened: false,
    notes: [
        {
            id: 1,
            title: "fff",
            body: " 23b         asdasd aaa    ",
            date: 123
        },
        {
            id: 2,
            title: "fff",
            body: "asdasd",
            date: 1234
        },
        {
            id: 3,
            title: "fff",
            body: "asdasd",
            date: 12366
        },
    ]
};



