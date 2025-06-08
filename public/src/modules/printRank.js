async function printRank(rankDisplay) {
  const response = await fetch('http://localhost:3000/rank');
  const data = await response.json();

  const sorted = data
    .map(item => parseFloat(item.playtime))
    .sort((a, b) => b - a)
    .slice(0, 3);

  // 3개 미만일 경우 0.00으로 채움
  for (let i = 0; i < 3; i++) {
    if (sorted[i] === undefined) {
      sorted[i] = '0.00';
    } else {
      sorted[i] = sorted[i].toFixed(2);
    }
  }

  rankDisplay.childNodes[3].childNodes[3].textContent = `${sorted[0]}`;
  rankDisplay.childNodes[5].childNodes[3].textContent = `${sorted[1]}`;
  rankDisplay.childNodes[7].childNodes[3].textContent = `${sorted[2]}`;
}

export { printRank };