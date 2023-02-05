import { useState } from "react";

function SalaryCalculator() {
  let [bruto, setBruto] = useState(1016.39);
  let [doprinosi, setDoprinosi] = useState(315.08);
  let [pio, setPio] = useState(188.03);
  let [zdr, setZdr] = useState(103.67);
  let [djDoprinosi, setDjDoprinosi] = useState(17.28);
  let [nzDprinosi, setNzDoprinosi] = useState(6.1);
  let [dobitak, setDobitak] = useState(1000.0);
  let [umanjenje, setUmanjenje] = useState(0.0);
  let [porez, setPorez] = useState(1.31);
  let [neto, setNeto] = useState(700.0);
  let [solidarnost, setSolidarnost] = useState(1.75);
  let [isplata, setIsplata] = useState(698.25);
  let [obaveze, setObaveze] = useState(318.14);

  const calculateSalary = () => {
    //Bruto plata
    const brutoCalc = (event) => {
      setBruto(event.target.value);
      isplata = neto - solidarnost;
    };
  };

  return (
    <div className="divTable">
      <div className="divTableBody">
        <div className="divTableRow">
          <div className="divTableCell">Bruto plata</div>
          <div className="divTableCell">
            B ={" "}
            <input
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
              value={doprinosi}
              type="text"
              onChange={(event) => {
                setDoprinosi(event.target.value);
              }}
            />{" "}
            KM
          </div>
          <div className="divTableCell">D=B*31%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Doprinosi za PIO</div>
          <div className="divTableCell">
            PIO ={" "}
            <input
              value={pio}
              type="text"
              onChange={(event) => {
                setPio(event.target.value);
              }}
            />{" "}
            KM
          </div>
          <div className="divTableCell">PIO-18.5%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Doprinosi za ZDR</div>
          <div className="divTableCell">
            ZDR ={" "}
            <input
              value={zdr}
              type="text"
              onChange={(event) => {
                setZdr(event.target.value);
              }}
            />{" "}
            KM
          </div>
          <div className="divTableCell">ZDR-10.2%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Doprinosi za DJ</div>
          <div className="divTableCell">
            DJ ={" "}
            <input
              value={djDoprinosi}
              type="text"
              onChange={(event) => {
                setDjDoprinosi(event.target.value);
              }}
            />{" "}
            KM
          </div>
          <div className="divTableCell">DJ-1.70%</div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">Doprinosi za NZ</div>
          <div className="divTableCell">
            NZ ={" "}
            <input
              value={nzDprinosi}
              type="text"
              onChange={(event) => {
                setNzDoprinosi(event.target.value);
              }}
            />{" "}
            KM
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
            P ={" "}
            <input
              value={porez}
              type="text"
              onChange={(event) => {
                setPorez(event.target.value);
              }}
            />{" "}
            KM
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
            S ={" "}
            <input
              value={solidarnost}
              type="text"
              onChange={(event) => {
                setSolidarnost(event.target.value);
              }}
            />{" "}
            KM
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
            <input
              value={obaveze}
              type="text"
              onChange={(event) => {
                setObaveze(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <button onClick={calculateSalary} type="submit">
        Calculate
      </button>
    </div>
  );
}

export default SalaryCalculator;
