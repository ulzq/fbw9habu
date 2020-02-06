
import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

function Eingabe({setzeLivePreis,hinzufuegen,titel}){

  const [beschreibung,beschreibungSetzen] = React.useState('');
  const [preis,preisSetzen]     = React.useState('');

  const beschreibungHaendler = (e) =>
    beschreibungSetzen(e.target.value)

  const preisHaendler = (e) => {
    let preis = e.target.value;
    preisSetzen(preis);
    let preisAlsZahl = Number(preis.replace(',','.'));
    setzeLivePreis( isNaN(preisAlsZahl)? 0 : preisAlsZahl );
  }

  const hinzufuegenHaendler = e => {
    let preisAlsZahl = Number(preis.replace(',','.'));
    if ( isNaN(preisAlsZahl) ) return;    hinzufuegen({beschreibung,preis:preisAlsZahl});
    beschreibungSetzen('');
    preisSetzen('');
  }

  return (
    <InputGroup>
      <FormControl value={beschreibung} onChange={beschreibungHaendler}/>
      <FormControl value={preis} onChange={preisHaendler}/>
      <InputGroup.Append>
        <Button onClick={hinzufuegenHaendler}>{titel}</Button>
      </InputGroup.Append>
    </InputGroup>
)};

export default Eingabe;
