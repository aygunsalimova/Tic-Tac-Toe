let arr = [];
let show = document.getElementById("show");
let reset = document.getElementById("reset");
let x = "X";
let o = "O";
let count;
let point1 = 0;
let point2 = 0;
let player1;
let player2;

Start();

//girish uchun yazilan funksiya: player adlari teleb olunur

function Start() {
    count = 1;
    player1 = player1 == undefined ? prompt("Player 1's Name", x) : player1;
    player2 = player2 == undefined ? prompt("Player 2's Name", o) : player2;

    show.innerHTML = `${player1}: ${point1} </br> ${player2}: ${point2}`;
    Arr();
    Table();

}

// table qurmaq

function Table() {
    let tableId = document.getElementById("table");
    let tbl = " ";

    for (let i = 0; i < 3; i++) {
        tbl += `<tr>`;
        for (let j = 0; j < 3; j++) {
            tbl += `<td class="display"  onclick="Click(${i},${j})"> ${arr[i][j] == undefined ? " " : arr[i][j] }</td>`;
        }
        tbl += `</tr>`;
    }
    tableId.innerHTML = tbl;
}

//array yaratmaq: 

function Arr() {
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
    }
}

//click zamani bash veren proses

function Click(i, j) {
    if (arr[i][j] == undefined) {
        if (count % 2 == 0) {
            arr[i][j] = o;
        } else {
            arr[i][j] = x;
        }
        count++;
        Table();
        Check();


    }
}


function Check() {
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] !== undefined && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
            Finish(arr[i][0]);
        }
    }
    for (let j = 0; j < 3; j++) {
        if (arr[0][j] !== undefined && arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j]) {
            Finish(arr[0][j]);
        }
    }
    if (arr[0][2] !== undefined && arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
        Finish(arr[0][2]);
    }
    if (arr[0][0] !== undefined && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
        Finish(arr[0][0]);
    }
    if (count == 10) {
        alert("Siz berabere qaldiniz"); //yeni oyun elave ede bilmedim
    }
}



function Finish(participant) {
    alert(participant == player1 ? `${player1} Won` : `${player2} Won`);
    participant == player1 ? point1++ : point2++;
    Start();
}

function Reset() {
    location.reload();
}