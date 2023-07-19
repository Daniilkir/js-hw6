// -----1-----


const btn = document.querySelector(".btn")


btn.addEventListener("click", ()=> {
    const pole1 = document.querySelector(".pole1")
    const pole2 = document.querySelector(".pole2")

    const poles1 = pole1.value
    const poles2 = pole2.value


if (poles1 !== "" && poles2 !== "") {
     alert("Обидва поля заповнені")
  } else {
    alert("Не всі поля заповнені")
  }

})

// -----2-----


const btnwithnumb = document.querySelector("#btnNumb")

btnwithnumb.addEventListener("click", ()=> {

const numberInput1 = document.querySelector("#numb1").value
const numberInput2 = document.querySelector("#numb2").value

const sum = parseInt(numberInput1) + parseInt(numberInput2);

if (sum > 10){
    alert("Сума більша за 10")
} else {
  alert("Сума менша або дорівнює 10")
  }
}
)

// -----3-----

const btnstring = document.querySelector("#btnstring")

btnstring.addEventListener("click", ()=> {
const string = document.querySelector("#string").value

if (string.includes("JavaScript")) {
    alert("Текст містить слово")
}
else {
    alert("Текст не містить слово ")
}
})

// -----4-----

const justbtn = document.querySelector("#justbtn")

justbtn.addEventListener("click", ()=> {
const justnumber = parseInt(document.querySelector("#justnumber").value)

if (20 > justnumber && justnumber > 10){
alert("Число в діпазоні від 10 до 20")
} 
else {
alert("Число не в діапазоні від 10 до 20")
  }
}
)

// -----5-----
const btnlogin = document.querySelector("#btnlogin")


btnlogin.addEventListener("click", ()=> {
const name = document.querySelector("#name").value
const mail = document.querySelector("#mail").value
const password = document.querySelector("#password").value

const nameLentgh = name.length

const passwordLentgh = password.length

if (nameLentgh >= 3 && mail.includes("@") && mail.includes(".") && passwordLentgh >= 6) {
    window.location.href = "https://www.youtube.com/";
}
else {
    alert("Ой йой!Щось пішло не так.")
}

})