document.querySelectorAll(".bingo-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    tile.classList.toggle("active");
  });
});

function exportCard() {
  const bingoContainer = document.getElementById("bingo-container");
  html2canvas(bingoContainer, {
    backgroundColor: null,
    scale: 5,
    useCORS: true,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "bingo-card.png";
    link.click();
  });
}
