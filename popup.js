const INPUT_ID = "textInput";
const RESULT_ID = "result";
const ENCODE_BUTTON_ID = "encodeButton";
const DECODE_BUTTON_ID = "decodeButton";

window.addEventListener("load", function()
{
  function transform(e, magicFun) {
    const inputText = document.getElementById(INPUT_ID).value;
    const resultElement = document.getElementById(RESULT_ID);
    resultElement.innerText = magicFun(inputText);
  }

  const encodeButton = document.getElementById(ENCODE_BUTTON_ID);
  const decodeButton = document.getElementById(DECODE_BUTTON_ID);
  const inputField = document.getElementById(INPUT_ID);
  inputField.focus();

  if (encodeButton) {
    encodeButton.addEventListener('click', event => transform(event, encodeURIComponent));
  }
  if (decodeButton) {
    decodeButton.addEventListener('click', event => transform(event, decodeURIComponent));
  }
}, false)