let yes = document.getElementById("yes");
let no = document.getElementById("no");
let ans = (e) => {
  alert("I love you too😘");
};
let moveBtn = (e) => {
  let x = Math.floor(Math.random() * 200);
  let y = Math.floor(Math.random() * 200);
  no.style.top = e.clientX - x + "px";
  no.style.right = e.clientY - y + "px";
  console.log(x, y);
  console.log(no);
};
yes.addEventListener("click", ans);
no.addEventListener("mouseover", moveBtn);
