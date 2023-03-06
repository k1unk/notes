import {
    ColumnName,
    IAppState, INote,
    IProject,
    View
} from "./state";
import {
    ActionType,
    AppActions,
    IChangeSearchValue, IChangeSelectedNote, IChangeTilesNoteIsOpened,
    IChangeView, IDeleteNote, IFormatNote,
} from "./actions";

export function appReducer(state: IAppState, action: AppActions): IAppState {
    let project: IProject
    let notes: INote[]
    switch (action.type) {
        case ActionType.ChangeView:
            return {...state, listOrTiles: action.payload.view};

        case ActionType.ChangeSelectedNote:
            return {...state, selectedNoteId: action.payload.id};

        case ActionType.ChangeSearchValue:
            return {...state, searchValue: action.payload.value};

        case ActionType.ChangeTilesNoteIsOpened:
            return {...state, tilesNoteIsOpened: action.payload.value};

        case ActionType.DeleteNote:
            notes = state.notes.filter(note => note.id !== action.payload.id)
            let selectedNoteId = state.notes[0].id
            return {...state, notes, selectedNoteId};

        case ActionType.FormatNote:
            notes = state.notes.map(note => {
                if (note.id === action.payload.id) note.body = note.body.replace(/\s+/g, " ");
                return note
            })
            return {...state, notes};

        default:
            return state;
    }
}

export const changeView = (view: View): IChangeView => ({
    type: ActionType.ChangeView,
    payload: {view}
})

export const changeSelectedNote = (id: number): IChangeSelectedNote => ({
    type: ActionType.ChangeSelectedNote,
    payload: {id}
})
export const formatNote = (id: number): IFormatNote => ({
    type: ActionType.FormatNote,
    payload: {id}
})
export const changeSearchValue = (value: string): IChangeSearchValue => ({
    type: ActionType.ChangeSearchValue,
    payload: {value}
})

export const deleteNote = (id: number): IDeleteNote => ({
    type: ActionType.DeleteNote,
    payload: {id}
})

export const changeTilesNoteIsOpened = (value: boolean): IChangeTilesNoteIsOpened => ({
    type: ActionType.ChangeTilesNoteIsOpened,
    payload: {value}
})
