import React, {FC, useContext, useEffect, useMemo, useState} from 'react';
import {AppContext} from "../state/context";
import {changeSelectedNote, changeTilesNoteIsOpened} from "../state/reducer";
import {INote} from "../state/state";

const TilesView: FC = () => {
    const {state, dispatch} = useContext(AppContext);
    let getNotesItemClassName = (id: number) => {
        return state.selectedNoteId === id ? "notes-item notes-item_selected" : "notes-item"
    }
    let getNote = () => {
        return state.notes.find(e => e.id === state.selectedNoteId)
    }
    let note = state.notes.find(e => e.id === state.selectedNoteId)


    const notesVisible = useMemo(() => {
        if (state.searchValue === '') return state.notes
        return state.notes.filter(e =>
            e.body.toLowerCase().includes(state.searchValue.toLowerCase())
            || e.title.toLowerCase().includes(state.searchValue.toLowerCase())
        )
    }, [state.notes, state.searchValue]);

    const [isEditing, setIsEditing] = useState(false)
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')

    let setIsEditing_ = (note: INote) => {
        setIsEditing(true)
        setTitle(note.title)
        setBody(note.body)
    }

    let open_ = (note: INote) => {
        dispatch(changeTilesNoteIsOpened(true))
        dispatch(changeSelectedNote(note.id))
    }
    return (
        <div className="tiles-view">
            {state.tilesNoteIsOpened
                ? <div className="note">
                    <div className="date">
                        {note!!.date}
                    </div>
                    {isEditing
                        ? <div className="note-editing">
                            <input className="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <input className="body" value={body} onChange={(e) => setBody(e.target.value)}/>
                        </div>
                        : <div className="note-editable" onClick={() => setIsEditing_(note!!)}>
                            <div className="title">
                                {note!!.title}
                            </div>
                            <div className="body">
                                {note!!.body.replace(/ /g, "\u00A0")}
                            </div>
                        </div>
                    }
                </div>
                : <div className="notes-tiles">
                    {notesVisible.map(note => {
                        return <div className={getNotesItemClassName(note.id)} key={note.id}
                                    onClick={() => open_(note)}>
                            <div className="notes-item-wrapper" onClick={() => dispatch(changeSelectedNote(note.id))}>
                                <div className="notes-item__title">
                                    {note.title}
                                </div>
                                <div className="notes-item__date-and-body">
                                    <p>{note.date}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            }
        </div>
    );
};

export default TilesView;
