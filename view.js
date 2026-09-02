updateView()

function updateView(){
    let html = /*HTML*/ `
    <h2>Tamamonsen Larsagochi</h2>

    <button onclick="itemFeed('Kvikklunsj')">Kvikklunsj</button>
    <button onclick="itemFeed('vann')">Vann</button>
    <button onclick="itemFeed()">Våtserviett</button>
    <button onclick="itemFeed()">Hund</button>
    <button onclick="itemFeed()">Bål</button>

    <div id="sultDiv">Sult: ${larsStats.sult}</div>
    
    <div>Tørst: ${larsStats.tørst}</div>
    <div>hygiene: ${larsStats.hygiene}</div>
    <div>komfort: ${larsStats.komfort}</div>
    <div>humør: ${larsStats.humør}</div>

    `;
    
    document.getElementById('app').innerHTML = html;
    
}