let result = document.getElementById("result");

function click_kb(button) {
  let get_value = button.innerHTML;
  //AC
  if (get_value == "AC") {
    result.innerHTML = "0";
  }
  //=
  else if (get_value == "=") {
    result.innerHTML = eval(result.innerHTML);
  }
  //0
  else if (result.innerHTML == 0) {
    if (get_value == "+" || get_value == "-" || get_value == "*" || get_value == "/") {
      result.innerHTML = "0";
    }
    else if (get_value == "00") {
      result.innerHTML = "0";
    }
    else {
      result.innerHTML = get_value;
    }
  }
  //+-*/.
  else if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/" || result.innerHTML.slice(-1) == ".") {
    if (get_value == "+" || get_value == "-" || get_value == "*" || get_value == "/" || get_value == ".") {
      result.innerHTML = result.innerHTML.slice(0, -1) + get_value;
    }
    else {
      result.innerHTML += get_value;
    }
  }
  //number
  else {
    result.innerHTML += get_value;
  }
}