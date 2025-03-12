function printRank(rankArr, rankDisplay) {
  rankDisplay.childNodes[3].childNodes[3].textContent = `${rankArr[0]}`;
  rankDisplay.childNodes[5].childNodes[3].textContent = `${rankArr[1]}`;
  rankDisplay.childNodes[7].childNodes[3].textContent = `${rankArr[2]}`;
}

export { printRank };