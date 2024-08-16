let output = document.querySelector(".input");
let buttons = document.querySelectorAll(".functions, .numbers");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let Value = e.target.innerHTML;

    if (
      output.innerHTML === "0" &&
      Value !== "AC" &&
      Value !== "DEL" &&
      Value !== "="
    ) {
      output.innerHTML = Value;
    } else {
      if (Value === "AC") {
        output.innerHTML = "0";
      } else if (Value === "DEL") {
        output.innerHTML =
          output.innerHTML.length > 1 ? output.innerHTML.slice(0, -1) : "0";
      } else if (Value === "=") {
        try {
          let result;
          if (output.innerHTML.includes("sin")) {
            let angle = parseFloat(output.innerHTML.replace("sin", ""));
            let radians = angle * (Math.PI / 180);
            result = Math.sin(radians);
          } else if (output.innerHTML.includes("cos")) {
            let angle = parseFloat(output.innerHTML.replace("cos", ""));
            let radians = angle * (Math.PI / 180);
            result = Math.cos(radians);
          } else if (output.innerHTML.includes("log")) {
            let value = parseFloat(output.innerHTML.replace("log", ""));
            result = Math.log10(value);
          } else if (output.innerHTML.includes("√x")) {
            let value = parseFloat(output.innerHTML.replace("√x", ""));
            result = Math.sqrt(value);
          } else {
            result = eval(output.innerHTML);
          }

          output.innerHTML = result.toFixed(4);
        } catch {
          output.innerHTML = "Error";
        }
      } else {
        output.innerHTML += Value;
      }
    }
  });
});
