const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});


function salary(){
  var arr = document.getElementsByTagName("input");
  var salary = arr[0].value;
  var days = arr[1].value;
  var e = salary * days;
  document.getElementById("txtSalary").innerHTML = e;
}

function average(){
  // var arr = document.getElementsByTagName("input");
  // var num1 = arr[0].value;
  // var num2 = arr[1].value;
  // var num3 = arr[2].value;
  // var num4 = arr[3].value;
  // var num5 = arr[4].value;
  // var e = (num1+num2+num3+num4+num5);
  // var average = e/5;
  // document.getElementById("txtAverage").innerHTML = average.toFixed(0);
  let e = document.querySelectorAll(".bai2 .formInput")
  t = 0;
  for (let i = 0; i < e.length; i++) {
    t += parseInt(e[i].value);
  }
  document.getElementById("txtAverage").innerHTML = t/e.length;
}

function exchangeCurrency(){
  var usd = document.getElementById("currencyUSD").value;
  var e = new Intl.NumberFormat("vn-Vn").format(usd * 23500);
  document.getElementById("txtCurrency").innerHTML = e;
}

function calcRectangle(){
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var e = width * height;
  var t = 2 * (width+height);
  document.getElementById("txtCalc").innerHTML = `\n        Diện tích: ${e};\n        Chu vi: ${t}\n    `
}

function sumOfTens(){
  var e = document.getElementById('sumTens').value;
  var t = Math.floor(e/10);
  var n = e%10;
  document.getElementById("txtSum").innerHTML = t+n;
}