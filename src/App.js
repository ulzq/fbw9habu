
import React, { useState } from 'react';

import Eingabe   from './component/Eingabe'
import BuchListe from './component/BuchListe'

let buchDefault;
try {
  buchDefault = JSON.parse(
    localStorage.getItem('haushaltsbuch')
  )||[];
} catch (e){
  buchDefault = [];
};

const haushaltsbuchSpeichern = haushaltsbuch => {
  try {
    localStorage.setItem('haushaltsbuch',JSON.stringify(haushaltsbuch));
  } catch(e){}
}

function App(){
  const [ buch, setzeBuch ] = useState(buchDefault);
  const [ livePreis, setzeLivePreis ] = useState(0);

  const loeschen = (nummer)=> {
    const neueListe = buch.filter( (_,n)=> !( n === nummer ) );
    setzeBuch( neueListe );
    haushaltsbuchSpeichern( neueListe );
  }

  const hinzufuegen = (eingabe) => {
    const neueListe = [eingabe,...buch];
    setzeBuch( neueListe );
    haushaltsbuchSpeichern( neueListe );
  }

  return (
  <>
    <Eingabe setzeLivePreis={setzeLivePreis} hinzufuegen={hinzufuegen} titel="+"/>
    <BuchListe livePreis={livePreis} buch={buch} loeschen={loeschen}/>
  </>
)};

export default App;
