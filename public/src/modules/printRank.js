function printRank(rankArr, rankDisplay) {
  for(let i=0; i<3; i++) {
    if(rankArr[i] === undefined) {
      rankArr[i] = '0.00';
    }
  }
  rankDisplay.childNodes[3].childNodes[3].textContent = `${rankArr[0]}`;
  rankDisplay.childNodes[5].childNodes[3].textContent = `${rankArr[1]}`;
  rankDisplay.childNodes[7].childNodes[3].textContent = `${rankArr[2]}`;
}

export { printRank };