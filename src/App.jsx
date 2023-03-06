import {useReducer} from 'react'
import {AppContext} from './state/context';
import {appReducer} from "./state/reducer.ts";
import {View, initialAppState} from "./state/state.ts";
import './styles/styles.scss'
import ListView from "./components/ListView.tsx";
import TopBar from "./components/TopBar.tsx";
import TilesView from "./components/TilesView.tsx";

function App() {
    const [state, dispatch] = useReducer(appReducer, initialAppState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            <div className="App">
                <TopBar/>
                {state.listOrTiles===View.List ? <ListView/> : <TilesView/>}
            </div>
        </AppContext.Provider>
    )
}

export default App
