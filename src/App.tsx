import React, {useEffect} from 'react';
import './App.css';
import Timeline from './components/Timeline';
import Header from "./components/Header";
import {useDispatch} from "react-redux";
import {fetchTimelineData} from "./redux/dataReducer";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTimelineData())
    }, [])

    return (
        <div className="App">
            <Header/>
            <Timeline/>
        </div>
    );
}

export default App;
