
import React from 'react';
import { Button } from 'react-bootstrap'

function BuchEintrag({wert,key,loeschen}){
  const {beschreibung,preis} = wert;
  return (
  <tr>
    <td>
      {beschreibung}
    </td>
    <td>
      {preis}
    </td>
    <td width="1%">
      <Button onClick={loeschen}>x</Button>
    </td>
  </tr>
)};

export default BuchEintrag;
