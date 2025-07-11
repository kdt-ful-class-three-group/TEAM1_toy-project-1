function makeForm(gameOverDisplay, timeScore, form, input) {
  // form.method = "post";
  // form.action = "/data";
  // input.type = "hidden";
  // input.name = "playTime"
  // input.value = timeScore;
  // form.append(input);
  // gameOverDisplay.appendChild(form);
  // form.submit();

  async function submitScore(timeScore) {
  try {
    const response = await fetch("/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {playTime: timeScore} ),
    });

    if (!response.ok) {
      throw new Error("서버 응답 실패");
    }

    const result = await response.json();
    console.log("서버 응답:", result);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}
submitScore(timeScore);
}

export { makeForm };