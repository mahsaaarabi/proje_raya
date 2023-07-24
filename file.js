var url = "https://api.adviceslip.com/advice/"
let x = document.querySelector(".b")
let text = document.querySelector(".text2")
let id = document.querySelector(".text").children[0]
console.log(id);

function num(n) {

    return Math.floor(Math.random() * n)

}
x.onclick = () => {
    fetch(url + num(100)).then((response) => {
        return response.json()
    }).then((date) => {
        console.log(date.slip.advice);
        console.log(date.slip.id);
        text.innerHTML = date.slip.advice;
        id.innerHTML = date.slip.id;
        console.log(text.innerHTML);
    })
}