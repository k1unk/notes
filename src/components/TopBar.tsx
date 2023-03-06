import React, {FC, useContext, useEffect, useState} from 'react';
import {AppContext} from "../state/context";
import {View} from "../state/state";
import {changeSearchValue, changeTilesNoteIsOpened, changeView, deleteNote, formatNote} from "../state/reducer";
import {Modal} from "@material-ui/core";

const TopBar: FC = () => {
    const {state, dispatch} = useContext(AppContext);
    const classNameViewSelected = useState('')
    let getClassName = (view: View) => {
        return state.listOrTiles === view ? 'view-btn view-btn_selected' : 'view-btn'
    }
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e: any) => {
        dispatch(changeSearchValue(e.target.value))
    };
    const deleteNote_ = () => {
        setOpen(false);
        dispatch(deleteNote(state.selectedNoteId))
    };
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <div className="view-buttons">
                    <button className={getClassName(View.List)} onClick={() => dispatch(changeView(View.List))}>
                        List
                    </button>
                    <button className={getClassName(View.Tiles)} onClick={() => dispatch(changeView(View.Tiles))}>
                        Tiles
                    </button>
                    {
                        state.tilesNoteIsOpened
                        &&
                        <button className="tiles-back-btn" onClick={() => dispatch(changeTilesNoteIsOpened(false))}>
                            Back
                        </button>
                    }
                </div>

                <button className="remove-btn" onClick={handleOpen}>
                    Delete
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div>
                        <p>Are you sure? </p>
                        <button onClick={deleteNote_}>Yes</button>
                        <button>No</button>
                    </div>
                </Modal>
            </div>
            <div className="top-bar-right">
                <button className="format-btn" onClick={() => dispatch(formatNote(state.selectedNoteId))}>
                    Format
                </button>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
