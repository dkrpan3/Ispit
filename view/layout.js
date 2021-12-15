export default () => {
    return `
        <div> <span> Pretraži Sveučilišta po državi:</span>
            <input type"text" id="search" placeholder="upiši ime države">
        </div>
        <div>
           
            <div id="rezultati"></div>
            <div id="spinner"> <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner""></div>
        </div>
    `;
};