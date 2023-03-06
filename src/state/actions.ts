import {Priority, Status, View} from "./state";

export enum ActionType {
    ChangeView,
    ChangeSelectedNote,
    FormatNote,
    ChangeSearchValue,
    DeleteNote,
    ChangeTilesNoteIsOpened
}

export interface IChangeView {
    type: ActionType.ChangeView;
    payload: { view: View }
}

export interface IChangeSelectedNote {
    type: ActionType.ChangeSelectedNote;
    payload: { id: number }

}

export interface IFormatNote {
    type: ActionType.FormatNote;
    payload: { id: number }

}

export interface IChangeSearchValue {
    type: ActionType.ChangeSearchValue;
    payload: { value: string }

}

export interface IDeleteNote {

    type: ActionType.DeleteNote;
    payload: { id: number }
}

export interface IChangeTilesNoteIsOpened {

    type: ActionType.ChangeTilesNoteIsOpened;
    payload: { value: boolean }
}

export type AppActions =
    IChangeView
    | IChangeSelectedNote
    | IFormatNote
    | IChangeSearchValue
    | IDeleteNote
    | IChangeTilesNoteIsOpened
    ;
