function makeForm(gameOverDisplay, timeScore, form, input) {
  form.method = "post";
  form.action = "/data";
  input.type = "hidden";
  input.name = "playTime"
  input.value = timeScore;
  form.append(input);
  gameOverDisplay.appendChild(form);
  form.submit();
}

export { makeForm };