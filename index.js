let startTicket = 0;

const count = document.querySelector(".btn");
count.addEventListener("click", () => {
  startTicket += 1;

  console.log(startTicket);
});
