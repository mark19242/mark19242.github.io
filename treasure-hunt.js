

var winningNum = Math.floor(Math.random() * 9);
var bomb = Math.floor(Math.random() * 9);

const treasure = (location) => {
    if (winningNum === location) {
        alert("You won! 🎊 👀🎉 ");
        location.reload();
        document.getElementById(location).innerHTML = "🏎️"
    } else if (bomb === location) {
        alert("Game over! 💣 Better luck next time.");
        location.reload();
        document.getElementById(location).innerHTML = "💣"
    } else if (winningNum === bomb) {
        document.getElementById(location).innerHTML = "💣"
    } else if (winningNum !== location && bomb !== location) {
        document.getElementById(location).innerHTML = "🚗"
    }
}
// const treasure = (location) => {
//     // return alert(location)
//     if (location === 0) {
//         document.getElementById("0").innerHTML = "🚗"
//     } else if (location === 1) {
//         document.getElementById("1").innerHTML = "🚗"
//     } else if (location === 2) {
//         document.getElementById("2").innerHTML = "🚗"
//     } else if (location === 3) {
//         document.getElementById("3").innerHTML = "🚗"
//     } else if (location === 4) {
//         document.getElementById("4").innerHTML = "🚗"
//     } else if (location === 5) {
//         document.getElementById("5").innerHTML = "🚗"
//     } else if (location === 6) {
//         document.getElementById("6").innerHTML = "🚗"
//     } else if (location === 7) {
//         document.getElementById("7").innerHTML = "🚗"
//     } else if (location === 8) {
//         document.getElementById("8").innerHTML = "🚗"
//     }
// }
