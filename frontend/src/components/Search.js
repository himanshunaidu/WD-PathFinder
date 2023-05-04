import React, { useState } from 'react';
import ListT from "./ListT"
import Autocom from "./Autocom"
import {connect, startGraph} from './../script/grafo.js'
const { baseURL } = require('config');
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Search(props) {
    const [entity, setEntity] = useState('');
    const [ansEntity, setAnsEntity] = useState([]);

    const handleEntitySubmit = async e => {
        e.preventDefault();
        if (entity != '') {
            addWord(entity);
            setEntity('');
        }   
    }

    const handleEntityChange = async (word) => {
        setEntity(word);
        // TODO PROBLEMA DE COOKIE AQUI
        let url = `${baseURL}/autocomplete?entity=${word}`
        fetch(url)
            .then(response => response.json())
            .then(data => setAnsEntity(data.search.map((x) => ({id: x.id, label: x.label, url: x.concepturi}))));
    }

    const addWord = (newWord) => {
        props.setWords(prevArray => [...prevArray, newWord]);
        console.log(props.words);
    }

    const deleteWord = (index) => {
        let copyActualWords = props.words;
        copyActualWords.pop(index);
        props.setWords(copyActualWords);
        console.log(props.words);
    }

    const clearWords = () => {
        props.setValues([]);
    }

    const launchGraph = () => {
        props.closeDrawer();
        let ids = props.values.map((entity) => (entity.id).replace("Q", ""));//})
        startGraph(ids);
        props.startCrono();
        console.log(ids);
    }

    return (
        <div className='column has-background-secondary'>

            <div>
                <button onClick={launchGraph} className='button is-info'> BUSCAR </button>
            </div>
            <Autocom addEntity={(newWord) => props.setValues(prevArray => [...prevArray, newWord])}></Autocom>

            <ListT entities={props.values} deleteEntity={
                (indEnt) => {
                    const newWords = props.values.filter((_, index) => index !== indEnt);
                    props.setValues(newWords);}}
            />
            <div>
                <button onClick={clearWords} className='button is-danger'> CLEAR </button>
            </div>

        </div>
    );
}