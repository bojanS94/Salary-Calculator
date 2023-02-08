import { useEffect, useState } from "react";

function SalaryCalculator() {
  let [bruto, setBruto] = useState(1016.39);
  let [dobitak, setDobitak] = useState(1000.0);
  let [umanjenje, setUmanjenje] = useState(0.00);
  let [neto, setNeto] = useState(700.0);
  let [isplata, setIsplata] = useState(0.00);
  let porez = 0;
  let solidarnost = 1.75;

  //Ukupni doprinosi
  let doprinosi = ((bruto * 31) / 100).toFixed(2);
  //Doprinosi za PIO
  let pio = ((bruto * 18.5) / 100).toFixed(2);
  //Doprinosi za ZDR
  let zdr = ((bruto * 10.2) / 100).toFixed(2);
  //Doprinosi za DJ
  let djDoprinosi = ((bruto * 1.7) / 100).toFixed(2);
  //Doprinosi za NZ
  let nzDprinosi = ((bruto * 0.6) / 100).toFixed(2);

  //Licni dobitak
  dobitak = Math.min(bruto, dobitak);

  //Umanjenje po poreskoj kartici
  if ((dobitak + umanjenje) > bruto) {
    umanjenje = bruto - dobitak;
    umanjenje = umanjenje.toFixed(2);
  }
    
  //Porez batice...
  let calculatePorez = () => {
    porez = (bruto - (dobitak + umanjenje) * (8 / 100)).toFixed(2);
  };

  //Neto plata
  neto = bruto - doprinosi - porez;
  neto = neto.toFixed(2);

  //Doprinosi za solidarnost
  solidarnost = neto * (0.25 / 100)
  solidarnost = solidarnost.toFixed(2)

  //Isplata radniku
  isplata = (neto - solidarnost).toFixed(2);

  //Ukupne obaveze
  let obaveze = doprinosi + porez + solidarnost;

  const calculateSalary = () => {
    solidarnost = neto * (0.25 / 100);
  };

  return (
    <div className="divTable">
      <div className="divTableBody">
        <div className="divTableRow">
          <div className="divTableCell">Bruto plata</div>
          <div className="divTableCell">
            B ={" "}
            <input
              style={{ background: "lightblue" }}
              value={bruto}
              type="text"
              onChange={(event) => {
                setBruto(event.target.value);
              }}
            />{" "}
            KM
          </div>
          <div className="divTableCell">
            {`B=N+D+P, ako je N<=(O+U)*0.69, onda B=N/0.69, ako je N>(O+U)*0.69, onda B=(N-(O+U)*0.08)/0.61`}
          </div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Ukupni doprinosi</div>
          <div className="divTableCell">
            D ={" "}
            <input
              style={{ background: "#f75640" }}
              value={doprinosi}
              type="text"
            />{" "}
            KM
          </div>
          <div className="divTableCell">D=B*31%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Doprinosi za PIO</div>
          <div className="divTableCell">
            PIO = <input readOnly value={pio} type="text" /> KM
          </div>
          <div className="divTableCell">PIO-18.5%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Doprinosi za ZDR</div>
          <div className="divTableCell">
            ZDR = <input readOnly value={zdr} type="text" /> KM
          </div>
          <div className="divTableCell">ZDR-10.2%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Doprinosi za DJ</div>
          <div className="divTableCell">
            DJ = <input readOnly value={djDoprinosi} type="text" /> KM
          </div>
          <div className="divTableCell">DJ-1.70%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Doprinosi za NZ</div>
          <div className="divTableCell">
            NZ = <input readOnly value={nzDprinosi} type="text" /> KM
          </div>
          <div className="divTableCell">NZ-0.6%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Lični odbitak</div>
          <div className="divTableCell">
            O ={" "}
            <input
              value={dobitak}
              type="text"
              onChange={(event) => {
                setDobitak(event.target.value);
              }}
            />{" "}
            KM
          </div>
          <div className="divTableCell">{`ako je O>B onda je O=B`}</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Umanjenje po poreskoj kartici</div>
          <div className="divTableCell">
            U ={" "}
            <input
              value={umanjenje}
              type="text"
              onChange={(event) => {
                setUmanjenje(event.target.value);
              }}
            />{" "}
            KM
          </div>
          <div className="divTableCell">{`ako je O+U>B onda je U=B-O`}</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Porez</div>
          <div className="divTableCell">
            P = <input readOnly value={porez} type="text" /> KM
          </div>
          <div className="divTableCell">{`P=(B-(O+U))*8%`}</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Neto plata:</div>
          <div className="divTableCell">
            N ={" "}
            <input
              value={neto}
              type="text"
              onChange={(event) => {
                setNeto(event.target.value);
              }}
            />{" "}
            KM
          </div>
          <div className="divTableCell">N=B-D-P</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Doprinos za solidarnost:</div>
          <div className="divTableCell">
            S = <input readOnly value={solidarnost} type="text" /> KM
          </div>
          <div className="divTableCell">S=N*0.25%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Isplata radniku:</div>
          <div className="divTableCell">
            I ={" "}
            <input
              value={isplata}
              type="text"
              onChange={(event) => {
                setIsplata(event.target.value);
              }}
            />{" "}
            KM
          </div>
          <div className="divTableCell">I=N-S</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell"></div>
          <div className="divTableCell"></div>
          <div className="divTableCell">
            Ukupne obaveze: &nbsp;
            <input value={obaveze} type="text" />
          </div>
        </div>
      </div>
      <button type="button" onClick={() => calculateSalary()}>
        Izracunaj
      </button>
    </div>
    
  );
}

export default SalaryCalculator;
