// mais ou menos assim que react funciona por baixo dos panos
function createGame(player1, player2, hour){
    return `
        <li>
            <img src="./assets/Bandeiras dos países/icon=${player1}.svg" alt="bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/Bandeiras dos países/icon=${player2}.svg" alt="bandeira do ${player2}">
        </li>
    `;
}
function createCard(date, day, games){
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
           ${games}
        </ul>
    </div>
    `;
}


document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="logo da nlw">
    </header>

    <main id="cards">
        <div class="card">
            <h2>24/11 <span>Quinta</span></h2>

            <ul>
                <li>
                    <img src="./assets/Bandeiras dos países/icon=swaziland.svg" alt="bandeira da swaziland">
                    <strong>7:00</strong>
                    <img src="./assets/Bandeiras dos países/icon=cameroon.svg" alt="bandeira dos camarões">
                </li>
                <li>
                    <img src="./assets/Bandeiras dos países/icon=uruguay.svg" alt="bandeira do uruguai">
                    <strong>10:00</strong>
                    <img src="./assets/Bandeiras dos países/icon=south korea.svg" alt="bandeira da coreia do sul">
                </li>
                <li>
                    <img src="./assets/Bandeiras dos países/icon=portugal.svg" alt="bandeira do portugal">
                    <strong>13:00</strong>
                    <img src="./assets/Bandeiras dos países/icon=ghana.svg" alt="bandeira da gana">
                </li>
                <li>
                    <img src="./assets/Bandeiras dos países/icon=brazil.svg" alt="bandeira do brasil">
                    <strong>16:00</strong>
                    <img src="./assets/Bandeiras dos países/icon=serbia.svg" alt="bndeira da servia">
                </li>
            </ul>

        </div>

      
        ${createCard("28/11", "segunda", 
        createGame("cameroon", "serbia", "07:00") +
        createGame("south korea", "ghana", "10:00") +
        createGame("brazil", "switzerland", "13:00") +
        createGame("portugal", "uruguay", "16:00") 
        )}
       
        ${createCard("30/11", "quarta", 
        createGame("tunisia", "france", "12:00") +
        createGame("australia", "denmark", "12:00") +
        createGame("poland", "argentina", "16:00") +
        createGame("saudi arabia", "mexico", "16:00")
        )}
       
        ${createCard("02/12", "sexta", 
        createGame("south korea", "portugal", "12:00") +
        createGame("ghana", "uruguay", "12:00") +
        createGame("serbia", "switzerland", "16:00") +
        createGame("cameroon", "brazil", "16:00")
        )}

    </main>
`;