const imgGiro = [
    "./img/pescado-1.webp",
    "./img/pescado-2.jpg",
    "./img/pescado-3.jpg",
    "./img/pescado-4.jpg",
  ];

  const range = document.getElementById("range");
  const img = document.getElementById("img");

  img.setAttribute("src", imgGiro[0]);

  range.addEventListener("input", (e) => {
    let value = e.target.value;
    img.setAttribute("src", imgGiro[value]);
  });