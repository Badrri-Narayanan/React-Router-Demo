import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import AllisonCameron from './Characters/AllisonCameron'
import EricForeman from './Characters/EricForeman'
import GregoryHouse from './Characters/GregoryHouse'
import JamesWilson from './Characters/JamesWilson'
import LisaCuddy from './Characters/LisaCuddy'
import RobertChase from './Characters/RobertChase'

const CharactersNavLinks = () => (
    <div>
        <h1>Characters</h1>
        <Link className="btn btn-primary" to="/about">About</Link>
        <Link className="btn btn-primary" to="/">Home</Link>
        <br/>
        <Link className="btn btn-primary" to="/characters/gregory_house">Gregory House</Link>
        <Link className="btn btn-primary" to="/characters/eric_foreman">Eric Foreman</Link>
        <Link className="btn btn-primary" to="/characters/robert_chase">Robert Chase</Link>
        <Link className="btn btn-primary" to="/characters/allison_cameron">Allison Cameron</Link>
        <Link className="btn btn-primary" to="/characters/lisa_cuddy">Lisa Cuddy</Link>
        <Link className="btn btn-primary" to="/characters/james_wilson">James Wilson</Link>
        <br/>
        <Routes>
            <Route path="gregory_house" element={ <GregoryHouse /> } />
            <Route path="eric_foreman" element={ <EricForeman /> } />
            <Route path="robert_chase" element={ <RobertChase /> } />
            <Route path="allison_cameron" element={ <AllisonCameron /> } />
            <Route path="lisa_cuddy" element={ <LisaCuddy /> } />
            <Route path="james_wilson" element={ <JamesWilson /> } />
        </Routes>
    </div>
);

export default CharactersNavLinks;