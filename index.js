let date = document.querySelector(".date");
let newDate = new Date().toDateString();
date.innerHTML = newDate;

let startTicket = 0;

let count = document.querySelector(".btn");
let ticketList = document.getElementById("newTicketList");
let time = document.querySelector(".currnetTime");
count.addEventListener("click", () => {
  startTicket += 1;
  createTicket(startTicket);
});

function createTicket(x) {
  let newTicket = ` <li style="list-style: none;">00-00${x} 
    <button onClick="currentTime()" style="width:150px; 
    height: 40px; 
    color: #ffffff; 
    margin: 20px; 
    background-color: #3F51B5;
    border: none;
    cursor: pointer;
    ">Clock In</button> 

    <button style="width:150px; 
    height: 40px; 
    color: #ffffff; 
    margin: 20px; 
    background-color: #3F51B5;
    border: none;
    ">Clock Out</button></li>`;
  ticketList.insertAdjacentHTML("afterBegin", newTicket);
}

function currentTime() {
  let newTime = new Date();
  let dateTime = `${newTime.getHours()} : ${newTime.getMinutes()} : ${newTime.getSeconds()}`;
  time.insertAdjacentHTML("afterBegin", dateTime);
}
