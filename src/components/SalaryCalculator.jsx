import { useState } from "react";

function SalaryCalculator() {
  let [bruto, setBruto] = useState(1016.39);
  let [dobitak, setDobitak] = useState(1000.0);
  let [umanjenje, setUmanjenje] = useState(0.0);
  let [neto, setNeto] = useState(700.0);
  let [isplata, setIsplata] = useState(0.0);
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
  if (dobitak + umanjenje > bruto) {
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
  solidarnost = neto * (0.25 / 100);
  solidarnost = solidarnost.toFixed(2);

  //Isplata radniku
  isplata = (neto - solidarnost).toFixed(2);

  //Ukupne obaveze
  let obaveze = doprinosi + porez + solidarnost;

  return (
    <div className="max-w-7xl">
      <div className="relative overflow-x-auto rounded">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Bruto plata
              </th>
              <td className="px-6 py-4">
                {" "}
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
              </td>
              <td className="px-6 py-4">
                {" "}
                {`B=N+D+P, ako je N<=(O+U)*0.69, onda B=N/0.69, ako je N>(O+U)*0.69, onda B=(N-(O+U)*0.08)/0.61`}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Ukupni doprinosi
              </th>
              <td className="px-6 py-4">
                {" "}
                D ={" "}
                <input
                  style={{ background: "#f75640" }}
                  value={doprinosi}
                  type="text"
                />{" "}
                KM
              </td>
              <td className="px-6 py-4">D=B*31%</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinosi za PIO
              </th>
              <td className="px-6 py-4">
                PIO = <input readOnly value={pio} type="text" /> KM
              </td>
              <td className="px-6 py-4">PIO-18.5%</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinosi za ZDR
              </th>
              <td className="px-6 py-4">
                ZDR = <input readOnly value={zdr} type="text" /> KM
              </td>
              <td className="px-6 py-4">ZDR-10.2%</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinosi za DJ
              </th>
              <td className="px-6 py-4">
                DJ = <input readOnly value={djDoprinosi} type="text" /> KM
              </td>
              <td className="px-6 py-4">DJ-1.70%</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinosi za NZ
              </th>
              <td className="px-6 py-4">
                NZ = <input readOnly value={nzDprinosi} type="text" /> KM
              </td>
              <td className="px-6 py-4">NZ-0.6%</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lični odbitak
              </th>
              <td className="px-6 py-4">
                O ={" "}
                <input
                  value={dobitak}
                  type="text"
                  onChange={(event) => {
                    setDobitak(event.target.value);
                  }}
                />{" "}
                KM
              </td>
              <td className="px-6 py-4">{`ako je O>B onda je O=B`}</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Umanjenje po poreskoj kartici
              </th>
              <td className="px-6 py-4">
                U ={" "}
                <input
                  value={umanjenje}
                  type="text"
                  onChange={(event) => {
                    setUmanjenje(event.target.value);
                  }}
                />{" "}
                KM
              </td>
              <td className="px-6 py-4">{`ako je O+U>B onda je U=B-O`}</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Porez
              </th>
              <td className="px-6 py-4">
                P = <input readOnly value={porez} type="text" /> KM
              </td>
              <td className="px-6 py-4">{`P=(B-(O+U))*8%`}</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Neto plata:
              </th>
              <td className="px-6 py-4">
                N ={" "}
                <input
                  value={neto}
                  type="text"
                  onChange={(event) => {
                    setNeto(event.target.value);
                  }}
                />{" "}
                KM
              </td>
              <td className="px-6 py-4">N=B-D-P</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinos za solidarnost:
              </th>
              <td className="px-6 py-4">
                S = <input readOnly value={solidarnost} type="text" /> KM
              </td>
              <td className="px-6 py-4">S=N*0.25%</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Isplata radniku:
              </th>
              <td className="px-6 py-4">
                I ={" "}
                <input
                  value={isplata}
                  type="text"
                  onChange={(event) => {
                    setIsplata(event.target.value);
                  }}
                />{" "}
                KM
              </td>
              <td className="px-6 py-4">I=N-S</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                <label>Ukupne obaveze: </label>
                <input value={obaveze} type="text" /> KM
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalaryCalculator;
