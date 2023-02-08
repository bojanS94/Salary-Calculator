import { useEffect, useState } from "react";

function SalaryCalculator() {
  let [bruto, setBruto] = useState(1016.39);
  let [odbitak, setOdbitak] = useState(1000);
  let [neto, setNeto] = useState(0.0);

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

  //Licni odbitak
  let stvarniOdbitak = Math.min(bruto, odbitak);

  //Umanjenje po poreskoj kartici
  let umanjenje = Math.min(bruto - stvarniOdbitak, 0.0);
  if (odbitak + umanjenje > bruto) umanjenje = bruto - odbitak;

  //Porez batice...
  let stvarniPorez = (bruto - (stvarniOdbitak + umanjenje)) * (8 / 100);
  let porez = stvarniPorez.toFixed(2);

  //Neto plata
  let stvarniNeto = +(bruto - doprinosi - porez);
  neto = stvarniNeto.toFixed(2);

  //Doprinosi za solidarnost
  let solidarnostDoprinosi = neto * (0.25 / 100);
  let solidarnost = solidarnostDoprinosi.toFixed(2);

  //Ukupne obaveze
  let obaveze = 0;
  obaveze = Number(doprinosi + porez + solidarnostDoprinosi);
  obaveze = obaveze.toFixed(2);

  //Isplata radniku
  let isplata = +(neto - solidarnostDoprinosi).toFixed(2);

  useEffect(() => {
    console.log("Ove dvije vrijdnosti su se izmjenile");
  }, [bruto, neto]);

  return (
    <div className="max-w-7xl">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Salary Calculator by: <div className="logo"></div>
      </h1>
      <div className="relative overflow-x-auto rounded shadow-[0_0_20px_0_#1f2937]">
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
              <td className="px-6 py-4 td-style">
                {" "}
                B ={" "}
                <input
                  className=""
                  style={{ background: "lightblue" }}
                  value={bruto}
                  type="text"
                  onChange={(event) => {
                    setBruto(event.target.value);
                  }}
                />{" "}
                KM
              </td>
              <td className="px-6 py-4 font-bold">
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
              <td className="px-6 py-4 td-style">
                {" "}
                D ={" "}
                <input
                  style={{ background: "#f75640" }}
                  value={doprinosi}
                  type="text"
                />{" "}
                KM
              </td>
              <td className="px-6 py-4 font-bold">D=B*31%</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinosi za PIO
              </th>
              <td className="px-6 py-4 td-style">
                PIO = <input readOnly value={pio} type="text" /> KM
              </td>
              <td className="px-6 py-4 font-bold">PIO-18.5%</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinosi za ZDR
              </th>
              <td className="px-6 py-4 td-style">
                ZDR = <input readOnly value={zdr} type="text" /> KM
              </td>
              <td className="px-6 py-4 font-bold">ZDR-10.2%</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinosi za DJ
              </th>
              <td className="px-6 py-4 td-style">
                DJ = <input readOnly value={djDoprinosi} type="text" /> KM
              </td>
              <td className="px-6 py-4 font-bold">DJ-1.70%</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinosi za NZ
              </th>
              <td className="px-6 py-4 td-style">
                NZ = <input readOnly value={nzDprinosi} type="text" /> KM
              </td>
              <td className="px-6 py-4 font-bold">NZ-0.6%</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lični odbitak
              </th>
              <td className="px-6 py-4 td-style">
                O ={" "}
                <input
                  value={stvarniOdbitak}
                  type="text"
                  onChange={(event) => {
                    setOdbitak(event.target.value);
                  }}
                />{" "}
                KM
              </td>
              <td className="px-6 py-4 font-bold">{`ako je O>B onda je O=B`}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Umanjenje po poreskoj kartici
              </th>
              <td className="px-6 py-4 td-style">
                U = <input readOnly value={umanjenje} type="text" /> KM
              </td>
              <td className="px-6 py-4 font-bold">{`ako je O+U>B onda je U=B-O`}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Porez
              </th>
              <td className="px-6 py-4 td-style">
                P = <input readOnly value={porez} type="text" /> KM
              </td>
              <td className="px-6 py-4 font-bold">{`P=(B-(O+U))*8%`}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Neto plata:
              </th>
              <td className="px-6 py-4 td-style">
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
              <td className="px-6 py-4 font-bold">N=B-D-P</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Doprinos za solidarnost:
              </th>
              <td className="px-6 py-4 td-style">
                S = <input readOnly value={solidarnost} type="text" /> KM
              </td>
              <td className="px-6 py-4 font-bold">S=N*0.25%</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Isplata radniku:
              </th>
              <td className="px-6 py-4 td-style">
                I = <input readOnly value={isplata} type="text" /> KM
              </td>
              <td className="px-6 py-4 font-bold">I=N-S</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                <label className="px-6 py-4 font-bold">Ukupne obaveze: </label>
                <input readOnly value={obaveze} type="text" /> KM
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalaryCalculator;
