
import React from 'react'
import { Table } from 'react-bootstrap'

import BuchEintrag from './BuchEintrag'

function BuchListe({livePreis,buch,loeschen}){
  console.log(livePreis);
  let endSumme = livePreis + buch.reduce(
    (summe,obj)=> { return summe + obj.preis },
    0
  );
  return (
    <Table striped bordered hover variant="dark">
      <tbody>{
        buch.map( (wert,nummer)=>
        <BuchEintrag key={nummer}
          wert={wert}
          loeschen={loeschen.bind(null,nummer)}
        /> )
      }</tbody>
      <tfoot>
        <td>
          <b>Summe:</b>
        </td>
        <td colspan="2">
          {endSumme}
        </td>
      </tfoot>
    </Table>
  );
};

export default BuchListe;
