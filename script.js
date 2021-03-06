let text = document.getElementById("text-here");
let upperc = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let properc = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");
let downloadbtn = document.getElementById("save-text-file");

upperc.addEventListener("click", upperCase);
function upperCase() {
  let text_upper = document.getElementById("text-here").value;
  let text_upper2 = text_upper.toUpperCase();
  text.value = text_upper2;
}

lower.addEventListener("click", lowerCase);
function lowerCase() {
  let text_lower = document.getElementById("text-here").value;
  let text_lower2 = text_lower.toLowerCase();
  text.value = text_lower2;
}

properc.addEventListener("click", toProperCase);
function toProperCase() {
  let text_proper = document.getElementById("text-here").value.toLowerCase();
  let array = text_proper.split(" ");
  //convert the new array back to string by join() with " " as separator & assign the local var with converted string to source text
  document.getElementById("text-here").value = array
    .map(function properCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1); //every index 0 in a string is converted to uppercase + the rest of the string from index 1 to end is added
    })
    .join(" ");
}

sentence.addEventListener("click", toSentence);
function toSentence() {
  let array = document
    .getElementById("text-here")
    .value.toLowerCase()
    .split(". ");
  document.getElementById("text-here").value = array
    .map(function sentenceCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    })
    .join(". ");
}

downloadbtn.addEventListener("click", () => {
  downloadText("hell.txt", textDownload.value);
});
let textDownload = document.getElementById("text-here");
function downloadText(filename, text) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
