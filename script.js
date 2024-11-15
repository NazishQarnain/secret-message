// Caesar cipher shift function
function caesarShift(str, shift) {
  return str.replace(/[a-zA-Z]/g, char => {
    const start = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - start + shift + 26) % 26) + start);
  });
}

// Encode function with a shift of +1
function encodeMessage() {
  const inputText = document.getElementById('inputText').value;
  const output = caesarShift(inputText, 1);
  document.getElementById('output').innerText = output;
}

// Decode function with a shift of -1
function decodeMessage() {
  const inputText = document.getElementById('inputText').value;
  const output = caesarShift(inputText, -1);
  document.getElementById('output').innerText = output;
}
