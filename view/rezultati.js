export default (rezultat) => {
    return `
    <h2>Rezultati za pretragu sveučilišta:</h2>
    <table id="tablica">
    <tr>
    <th>Sveučilište</th>
    </tr>
    ${rezultat.slice(0,10).map((element)=> {
        return `<tr><td> <a href=${element.web_pages[0]}>${element.name} </a> </td></tr>`
    }).join("")}
    </table>
    `;
};