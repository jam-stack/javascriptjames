/*if (1 ==="1"){
    console.log(true);
}
else {
    console.log(false);
}
*/
/*if (1!= "1") {
    console.log(true);
}
else {
    console.log(false);
}*/
/*let age = 31
let country = "Uk";
if (age > 30 && country == "UK") {
    console.log("you are old enough.");
}
else {
    console.log("you aren't old enough")
}*/
/*let password = "robot1234";
if (password.lenght < 8){
    console.log("The password is too short");
} else {
    console.log(password);
} 
let num = 10
let x = 3
let y = 5
if (num %x===.0 || y===.0){
    console.log("this number is divisable by 3 or 5");
}    
else {
    console.log("this number is not divisable by 3 or 5")
}*/

/*let num = 3;

if (num % 5 == 0 || num % 3 == 0){
console.log ("This number is divisible by 3 or 5");
}
else {
    console.log("This number is not divisible 3 or 5");
}*/
/*let num = 15;

if (num % 3 == 0 && num % 5 == 0) {
    console.log(`fizz buzz`);
}
else if (num % 3 == 0) {
    console.log(`fizz`);
}
else {
    console.log(num);
}*/
/*let num = 8;
if (num % 32 == 0 || num % 64 == 0 || num % 128 == 0) {
    console.log("this number is divisible by 32, 64 and 128.")
}
else {
    console.log("this number is not")
}*/

/*let password = "mindsoup";
if (password.length < 8){
console.log ("password is too short");
} else { console.log(password);
}
*/
/*let password = "window"
if (password.lenght >=6){
    console.log("then value is eligable")
}
else{
    console.log ("then value is invalid")
}*/
let space1="x";
let space2="x";
let space3="x";
let space4="o";
let space5="o";
let space6=" ";
let space7="o";
let space8=" ";
let space9=" ";

console.log("   |      |");
console.log(`${space1}  |  ${space2}   | ${space3}`);
console.log("   |      |");
console.log("- - - - - - - -");
console.log("   |      |");
console.log(`${space4}  |  ${space5}   | ${space6}`);
console.log("   |      |");
console.log("- - - - - - - - ");
console.log("   |      |");
console.log(`${space7}  |  ${space8}   | ${space9}`);
console.log("   |      |");

if (space1=="x" && space2=="x" && space3=="x"){
    console.log("you are a winner")
}
else{
    console.log ("you dont win")
}