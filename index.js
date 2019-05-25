let date = document.querySelector(".date");
date.innerHTML = new Date();

let startTicket = 0;

let count = document.querySelector(".btn");
let ticketList = document.getElementById("newTicketList");

count.addEventListener("click", () => {
  startTicket += 1;
  createTicket(startTicket);
});

function createTicket(x) {
  let newTicket = ` <li>00-00${x} 
  <button style="width:150px; 
  height: 40px; 
  color: #ffffff; 
  margin: 20px; 
  background-color: #3F51B5;
  border: none;
  cursor: pointer">Clock In</button>  
  <button style="width:150px; 
  height: 40px; 
  color: #ffffff; 
  margin: 20px; 
  background-color: #3F51B5;
  border: none;">Clock Out</button></li>`;
  ticketList.insertAdjacentHTML("afterend", newTicket);
}

function currentDate() {
  return Date.now();
}
currentDate();
