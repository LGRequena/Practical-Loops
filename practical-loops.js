//Part 1: Fizz Buzz
for (i = 1; i < 101; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Fizz Buzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

//Part 2: Prime Time

let n = 9;
while (true) {
    let isPrime = true;
    for (i = 2; i < n; i++){
        if (n % i === 0) {
            isPrime = false;
            break;
        }
        
    } 
    if (isPrime) {
        console.log(n);
        break;
    }
    n++;
}

//Part 3: Feeling Loopy
let newString = "ID , NAME , OCCUPATION, AGE;\n42, Bruce, Knight, 41 \n57, Bob, Fry Cook, 19 \n63, Blaine, Quiz Master,58 \n98, Bill, Doctor's Assistant, 26"

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let rows = newString.split("\n");

for (let i = 0; i < rows.length; i++){
    
    let cells = rows[i].split(",");
    cell1 += cells[0] + " ";
    cell2 += cells[1] + " ";
    cell3 += cells[2] + " ";
    cell4 += cells[3] + " ";
    console.log(cells);
}

let newString2 = "Index, Mass (kg), Spring 1 (m), Spring 2 (m);\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let cell5 = "";
let cell6 = "";
let cell7 = "";
let cell8 = "";

let rows2 = newString2.split("\n");

for (let i = 0; i < rows2.length; i++) {

    let cells = rows2[i].split(",");
    cell1 += cells[5] + " ";
    cell2 += cells[6] + " ";
    cell3 += cells[7] + " ";
    cell4 += cells[8] + " ";
    console.log(cells);
}