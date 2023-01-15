let arRay = [];

let x = document.getElementById("button-head").onclick = function () {
    let n = +document.getElementById("number-head").value;

    let show = document.getElementById("show-number");
    show.style.display = "block";

    arRay.push(n);

    console.log(arRay);

    show.innerHTML = " " +  arRay;
   
}

// bài 1 
document.querySelector("#button-bt1").addEventListener("click", () => {

    let showBt1 = document.getElementById("show-bt1");
    showBt1.style.display = "block";


    let sum = 0;
    for (let i = 0; i < arRay.length ; i++) {
        sum += arRay[i];
    }
    console.log(sum);
    showBt1.innerHTML = " Tổng Số Dương: " + sum;


} ); // () => {} : arrow function

// bài 2 

document.querySelector("#button-bt2").addEventListener("click", () => {

    let showBt2 = document.getElementById("show-bt2");
    showBt2.style.display = "block";


    let count = 0;
    for (let i = 0; i < arRay.length ; i++) {
        if(arRay[i] > 0){
            count++;
        } else {
            alert(" vui lòng nhập lại ");
        }
    }
    console.log(count);
    showBt2.innerHTML = " Số Dương: " + count;
} );

// bài 3 

document.querySelector("#button-bt3").addEventListener("click", () => {

    let showBt3 = document.getElementById("show-bt3");
    showBt3.style.display = "block";

    let min = arRay[0];

    arRay.forEach((value) => {
        if (value < min) {
            min = value;
        }
    });
    showBt3.innerHTML = "Số nhỏ nhất:: " + min;

});

// bài 4: 
document.querySelector("#button-bt4").addEventListener("click", () => {

    let showBt4 = document.getElementById("show-bt4");
    showBt4.style.display = "block";

    let min = arRay[0];

    arRay.forEach((value) => {
        if (value >= 0 && value < min ) {
            min = value;
        }  
    });
    showBt4.innerHTML = "Số dương nhỏ nhất: " + min;
});

// bài 5: 
document.querySelector("#button-bt5").addEventListener("click", () => {

    let showBt5 = document.getElementById("show-bt5");
    showBt5.style.display = "block";

    let SC = arRay[0];

    arRay.forEach((value) => {
        if (value % 2 == 0) {
            SC = value;
        }
    });
    showBt5.innerHTML = "Số Chẵn Cuối Cùng: " + SC;
});

// bài 6 ---

// bài 7 
document.querySelector("#button-bt7").addEventListener("click", () => {

    let showBt7 = document.getElementById("show-bt7");
    showBt7.style.display = "block";

    arRay.sort(NumSort);

    function NumSort(a,b) {
        return a - b;
    }

    showBt7.innerHTML = arRay;
});


// bài 8

document.querySelector("#button-bt8").addEventListener("click", () => {

    let showBt8 = document.getElementById("show-bt8");
    showBt8.style.display = "block";


    function KtSNT(x) {
        let count = 0;
        for (let i = 2; i <= x; i++) {
            if (x % i === 0 ) {
                count++;
            }
        }
        if (count === 1 ) {
            return true;
        }
        return false;
    }
   
    for (let i = 0; i < arRay.length; i++) {
       
        if ( KtSNT(arRay[i]) === true) {
            showBt8.innerHTML = arRay[i];
            break;
        }
    }
    
});

// Bài 10 

document.querySelector("#button-bt10").addEventListener("click", () => {

    let showBt10 = document.getElementById("show-bt10");
    showBt10.style.display = "block";


    let countD = 0;
    let countA = 0;

    for (let i = 0; i < arRay.length ; i++) {
        if(arRay[i] > 0){
            countD++;
        }

        if(arRay[i] < 0){
            countA++;
        }
    }

    if ( countD > countA) {
        showBt10.innerHTML = " Số Dương > Số Âm ";
    } else {
        showBt10.innerHTML = "  Số Âm > Số Dương ";
    }
} );



