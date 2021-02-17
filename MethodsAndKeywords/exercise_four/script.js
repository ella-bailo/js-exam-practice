function myFunction() {
  let input = document.getElementById("input").value;

  try {
    if (isNaN(parseInt(input))) {
      throw "please enter a number";
    } else {
      document.getElementById("demo").innerHTML = input;
    }
  } catch (err) {
    document.getElementById("demo").innerHTML = err;
  } finally {
    document.getElementById("input").value = "";
  }
}
