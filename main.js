function creatGame(player1, hour, player2){
  return`
    <li>
      <img src="./assets/icon-${player1}.svg" alt="">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="">
    </li>
  `
}

let daley = -0.4;
function creatCard(date,day,games){
  daley = daley + 0.4;
  return `
    <div class="card" style="animation-daley: ${daley}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>   
    </div>
    `
}

document.querySelector("#cards").innerHTML =
    creatCard("24/11", "Quarta", 
      creatGame('novazelandia', '12:00', 'camaroes')
      )+
    creatCard("29/11", "Sabado",
      creatGame('brazil', '16:00', 'colombia')
      )+
    creatCard("30/11", "Domingo",
      creatGame('japan', '21:30', 'camaroes')
      )