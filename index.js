let startTicket = 0;

let count = document.querySelector(".btn");
let ticketList = document.getElementById("newTicketList");

count.addEventListener("click", () => {
  startTicket += 1;
  createTicket(startTicket);
});

function createTicket(x) {
  let ourHTML = ` <li>00-00${x}</li>`;
  ticketList.insertAdjacentHTML("beforeend", ourHTML);
}
