const display = document.getElementById("display");
let mode;
document.addEventListener('DOMContentLoaded', updateButtonStyles);
function setDefaultMode(){
    mode = "basic";
    console.log(mode);
}
function updateMode(){
    mode = $('#mode').val();
    console.log(mode);
}
function appendToDisplay(input){
    display.value += input;
    console.log(display);
}
function allClear(){
    display.value = " ";
}
let isAlphaMode = false;

function toggleAlphaMode() {
    isAlphaMode = !isAlphaMode; // Toggle the alpha mode
    updateButtonStyles();
}

function toggleFunction(func) {
    if (isAlphaMode && func === 'sin') {
        antiSinMethods();
    } else if (isAlphaMode && func === 'cos') {
        antiCosMethods();
    } else if (isAlphaMode && func === 'tan') {
        antiTanMethods();
    } else if (isAlphaMode && func === 'eql') {
        display.value = display.value + "=";
    } else if (isAlphaMode && func === 'ang') {
        calculateDegree();
    } else if(!isAlphaMode && func === 'sin' ){
        sinMethods();
    } else if(!isAlphaMode && func === 'cos' ){
        cosMethods();
    } else if(!isAlphaMode && func === 'tan' ){
        tanMethods();
    } else if(!isAlphaMode && func === 'eql' ){
        calculate();
    } else if(!isAlphaMode && func === 'ang' ){
        calculateRadian();
    }
}
function updateButtonStyles() {
    const buttonsToUpdate = ['alfa', 'sin', 'cos', 'tan','eql','ang'];

    buttonsToUpdate.forEach(buttonId => {
        const buttonElement = document.getElementById(buttonId);
        if (isAlphaMode) {
            buttonElement.classList.add('alpha-mode');
        } else {
            buttonElement.classList.remove('alpha-mode');
        }
    });
    if (isAlphaMode) {
        document.getElementById('sin').textContent = 'Asin';
        document.getElementById('cos').textContent = 'Acos';
        document.getElementById('tan').textContent = 'Atan';
        document.getElementById('eql').textContent = '"="';
        document.getElementById('ang').innerHTML= 'deg';
    } else {
        document.getElementById('sin').textContent = 'Sin';
        document.getElementById('cos').textContent = 'Cos';
        document.getElementById('tan').textContent = 'Tan';
        document.getElementById('eql').textContent = '=';
        document.getElementById('ang').innerHTML = 'rad';
    }
}
function calculate() {
    try {
        if (mode === "basic") {
            basicAlgorithms();
        }
        if(mode === "dif"){
            differentiation();
        }
        if(mode === "int"){
            integration();
        }
        if (mode === "com"){
            complexAlgorithms();
        }
        if(mode === "fa"){
            findFactors();
        }
        if(mode === "roo"){
            solveEquation();
        }
        if(mode === "base"){
            convertNumberBase();
        }
        if(mode === "pol"){
            convertComplexNumberIntoPolor();
        }

    } catch (error) {
        display.value= "Error!";
    }
}

function basicAlgorithms(){
    try {
        const result = eval(display.value);

        if (isNaN(result)) {
            display.value = "Invalid Input";
        } else if (!isFinite(result)) {
            display.value = "Infinity";
        } else {
            display.value = result;
        }
    }catch (Exception){
        display.value= "Error!";
    }
}
function differentiation(){
    try {
            const input = display.value.toString();
            console.log(input);
            if(input != null){
                display.value = Algebrite.derivative(input, 'x');
            }else{
                display.value = "Invalid Input"
            }
    }catch (e){
        display.value= "Error!";
    }
}
function integration(){
    try {
        const input = display.value.toString();
        console.log(input);
        if(input != null){
            let result = Algebrite.integral(input,'x');
            display.value = result.toString();
        }else{
            display.value = "Invalid Input"
        }
    }catch (e){
        display.value= "Error!";
    }
}

function calculatePercentage() {
    try {
        if (mode === "basic") {
            const inputValue = parseFloat(display.value);

            if (!isNaN(inputValue)) {
                 // Calculate 1% of the input
                display.value = (inputValue * 0.01).toFixed(2)+"%";
            } else {
                display.value = "Invalid Input";
            }
        } else {
            display.value = "Set Mode as Basic";
        }
    } catch (e) {
        display.value = "Error!";
    }
}
function factorialMethods(){
    try {
        if(mode === "fac"){
            calculateFactorial()
        }else if(mode === "dif"){
            display.value = display.value +"!";
        }else if(mode === "int"){
            display.value = display.value+"!";
        }
        else {
            display.value = "Misuse Function!"
        }

    }catch (e){
        display.value = "Error!";
    }
}

function calculateFactorial(){
    try{
        const input = display.value ;
        if(input !== ""){
            display.value = Algebrite.factorial(input);
        }else {
            display.value = "Invalid Input";
        }

    }catch (e){
        display.value = "Error!";
    }
}
function complexAlgorithms(){
    try {
        const input = display.value;
        console.log(input);
        if(input !== ""){
            display.value = math.evaluate(input);
            console.log(display.value)
        }else{
            display.value = "Invalid Input"
        }
    }catch (e){
        display.value = "Error!";
    }
}
function findFactors(){
    try {
        const input = display.value.toString();
        if(input !==""){
            let factors = Algebrite.factor(input);
            display.value = factors.toString();
        }else {
            display.value = "Invalid Input";
        }
    }catch (e){
        display.value = "Error!";
    }
}
function logMethods(){
    try {
        if(mode === "basic"){
            calculateLogValue();
        }else if(mode === "dif"){
            display.value = display.value+"log";
        }else if(mode === "int"){
            display.value = display.value+"log";
        }
        else {
            display.value = "Misuse Function!"
        }

    }catch (e){
        display.value = "Error!";
    }
}
function calculateLogValue() {
    try {
        let input = display.value.toString();
        let parts = input.split(',');

        let base = parseFloat(parts[0]);
        let num = parseFloat(parts[1]);
        if (!isNaN(base) && !isNaN(num)) {
            display.value = Math.log(num) / Math.log(base);
        } else {
            display.value = "Invalid numeric values.";
        }
    } catch (e) {
        display.value = "Error!";
    }
}
function sinMethods(){
    try{
        if(mode === "tri"){
            calculateSinValue();
        }else if(mode === "dif"){
            display.value = display.value+"sin(";
        }else if(mode === "int"){
            display.value = display.value+"sin(";
        }
        else {
            display.value = "Misuse Function!"
        }
    }catch (e){
    display.value = "Error!";
    }
}
function calculateSinValue(){
    try{
        const input = display.value ;
        let radians = (input * Math.PI) / 180;
        if(radians !== ""){
            display.value = Algebrite.sin(radians);
        }else {
            display.value = "Invalid Input";
        }
    }catch (e){
        display.value = "Error!7";
    }
}
function antiSinMethods(){
    try{
        if(mode === "tri"){
            calculateAntiSinValue();
        }else if(mode === "dif"){
            display.value = display.value+"arcsin(";
        }else if(mode === "int"){
            display.value = display.value+"arcsin(";
        }
        else {
            display.value = "Misuse Function!"
        }
    }catch (e){
        display.value = "Error!";
    }
}
function calculateAntiSinValue() {
    try {
        const input = display.value;
        if (input !== "") {
            let radians = Math.asin(input);
            let degrees = (radians * 180) / Math.PI;
            display.value = degrees+"°";
        } else {
            display.value = "Invalid Input";
        }
    } catch (e) {
        display.value = "Error1!";
    }
}
function cosMethods(){
    try{
        if(mode === "tri"){
            calculateCosValue();
        }else if(mode === "dif"){
            display.value = display.value+"cos(";
        }else if(mode === "atri"){
            antiCosMethods();
        }else if(mode === "int"){
            display.value = display.value+"cos(";
        }
        else {
            display.value = "Misuse Function!"
        }
    }catch (e){
        display.value = "Error!";
    }
}
function calculateCosValue(){
    try{
        const input = display.value ;
        let radians = (input * Math.PI) / 180;
        if(radians !== ""){
            display.value = Algebrite.cos(radians);
        }else {
            display.value = "Invalid Input";
        }
    }catch (e){
        display.value = "Error!";
    }
}
function antiCosMethods(){
    try{
        if(mode === "tri"){
            calculateAntiCosValue();
        }else if(mode === "dif"){
            display.value = display.value+"arccos(";
        }else if(mode === "int"){
            display.value = display.value+"arccos(";
        }
        else {
            display.value = "Misuse Function!"
        }
    }catch (e){
        display.value = "Error!";
    }
}
function calculateAntiCosValue() {
    try {
        const input = display.value;
        if (input !== "") {
            let radians = Math.acos(input);
            let degrees = (radians * 180) / Math.PI;
            display.value = degrees+"°";
        } else {
            display.value = "Invalid Input";
        }
    } catch (e) {
        display.value = "Error1!";
    }
}
function tanMethods(){
    try{
        if(mode === "tri"){
            calculateTanValue();
        }else if(mode === "dif"){
            display.value = display.value+"tan(";
        }else if(mode === "int"){
            display.value = display.value+"tan(";
        }
        else {
            display.value = "Misuse Function!"
        }
    }catch (e){
        display.value = "Error!";
    }
}
function calculateTanValue(){
    try{
        const input = display.value ;
        let radians = (input * Math.PI) / 180;
        if(radians !== ""){
            display.value = Algebrite.tan(radians);
        }else {
            display.value = "Invalid Input";
        }
    }catch (e){
        display.value = "Error!7";
    }
}
function antiTanMethods(){
    try{
        if(mode === "tri"){
            calculateAntiTanValue();
        }else if(mode === "dif"){
            display.value = display.value+"arctan(";
        }else if(mode === "int"){
            display.value = display.value+"arctan(";
        }
        else {
            display.value = "Misuse Function!"
        }
    }catch (e){
        display.value = "Error!";
    }
}
function calculateAntiTanValue() {
    try {
        const input = display.value;
        if (input !== "") {
            let radians = Math.atan(input);
            let degrees = (radians * 180) / Math.PI;
            display.value = degrees+"°";
        } else {
            display.value = "Invalid Input";
        }
    } catch (e) {
        display.value = "Error!";
    }
}
function getSqrt(){
    try {
        const input = display.value;
        if(!isNaN(input)){
            display.value = math.sqrt(input);
        }else{
            display.value = "Invalid Input"
        }
    }catch (e){
        display.value = "Error!";
    }
}
function solveEquation() {
    try {
        let input = display.value.toString();
        input = input.replace(/\s/g, '').toLowerCase();
        console.log(input);
        const regex = /([-+]?\s*[0-9]*\.?[0-9]*)?\*?x\^2\s*([-+]?\s*[0-9]*\.?[0-9]*)?\*?x?\s*([-+]?\s*[0-9]*\.?[0-9]*)?\s*=\s*([-+]?\s*[0-9]*\.?[0-9]*)/;
        const match = input.match(regex);
        console.log(match);
        if (match !== null) {
            let a = parseFloat(match[1]) || 1;  // Default to 1 if coefficient is not provided
            let b = parseFloat(match[2]) || 0;  // Default to 0 if coefficient is not provided
            let c = parseFloat(match[3]) || 0;  // Default to 0 if coefficient is not provided
            console.log(a,b,c);
            solveQuadraticEquation(a, b, c);
        }else {
            const linearRegex = /([-+]?\s*[0-9]*\.?[0-9]*)\*?x\s*([-+]?\s*[0-9]*\.?[0-9]*)\s*=\s*([-+]?\s*[0-9]*\.?[0-9]*)/;
            const linearMatch = input.match(linearRegex);

            if (linearMatch) {
                let a = parseFloat(linearMatch[1]) || 1;
                let b = parseFloat(linearMatch[2]) || 0;
                let c = parseFloat(linearMatch[3]) || 0;

                const result = solveLinearEquation(a, b, c);
                console.log(a, b, c);
            } else {
                display.value = "Invalid Input";
            }
        }
    } catch (e) {
        display.value = "Error";
        console.log('Error', e.message);
    }
}
function solveQuadraticEquation(a, b, c) {
        // Use the quadratic formula for quadratic equations
    try{
        const discriminant = (b * b) - (4 * a * c);

        if (discriminant >= 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            display.value = "Roots : x1= "+root1+" x2= "+root2;
        } else {
            const realPart = -b / (2 * a);
            const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
            display.value =  "Complex Roots: x1= "+realPart+" "+ imaginaryPart+"i"+" x2= "+realPart+" "+ "-"+imaginaryPart+"i";
        }
    } catch (e){
        display.value = "Error!";
    }
}
function solveLinearEquation(a, b, c) {
    if (a === 0) {
        display.value = "Invalid linear equation";
    }else{
        const x = (c - b) / a;
        display.value = "Solution: "+x;
    }
}
function convertNumberBase() {
    try {
        let input = display.value.toString();
        let parts = input.split(',');

        let num = parseFloat(parts[0]);
        let toBase = parseInt(parts[1], 10);

        if (!isNaN(num) && !isNaN(toBase) && Number.isInteger(toBase) && toBase >= 2 && toBase <= 36) {
            let result = num.toString(toBase);
            if(toBase === 2){
                display.value = "BIN: "+result;
            }else if(toBase === 8){
                display.value = "OCT: "+result;
            }else if(toBase === 16){
                display.value = "HEX: "+result;
            }else if(toBase === 10){
                display.value = "DEC: "+result;
            }else{
                display.value = "Base "+input+": "+result;
            }
        } else {
            display.value = "Invalid numeric values or base.";
        }
    } catch (e) {
        console.log('Error: ' + e.message);
    }
}
function calculateRadian(){
    try {
        let input = display.value.toString();
        input = parseFloat(input);
        if(!isNaN(input)){
            let rad = (input*math.PI)/180;
            display.value = rad+" rad";
            console.log(rad);
        }else {
            display.value = "Invalid Input";
        }
    }catch (e){
     display.value = "Error";
        console.log(e.message);
    }
}
function calculateDegree(){
    try {
        let input = display.value.toString();
        input = parseFloat(input);
        if(!isNaN(input)){
            let deg = (input*180)/math.PI;
            console.log(deg);
            display.value = deg+"°";
        }else {
            display.value = "Invalid Input";
        }
    }catch (e){
        display.value = "Error!";
        console.log(e.message);
    }
}
function convertComplexNumberIntoPolor(){
    try {
        const complexNum = display.value;
        const complex = math.complex(complexNum);

        if (!isNaN(complex.re) && !isNaN(complex.im)) {
            const r = math.sqrt(math.add(math.square(complex.re), math.square(complex.im)));
            const theta = math.atan2(complex.im, complex.re);
            display.value = `r: ${r}, θ: ${theta}`;
        }else{
            display.value = "Invalid Input";
        }

    }catch (e){
        display.value = "Error!";
        console.log(e.message);
    }
}
function expMethods(){
    try {
        if(mode === "basic"){
            getExpValue();
        }else if(mode === "dif"){
            display.value = display.value+"e";
        }else if(mode === "int"){
            display.value = display.value+"e";
        }
        else {
            display.value = "Misuse Function!"
        }
    }catch (e){
        display.value = "Error!";
    }
}
function getExpValue() {
    try {
        let input = display.value.toString();
        input =  parseFloat(input);
        if(!isNaN(input)){
            display.value = math.exp(input);
        }else if(isNaN(input)) {
            display.value = math.exp(1);
        }else {
            display.value = "Invalid Input";
        }
    } catch (e) {
        display.value = "Error!";
        console.log(e.message);
    }
}
function piMethods(){
    try {
        if(mode === "basic"){
            getPiValue();
        }else if(mode === "dif"){
            display.value = display.value+"π";
        }else if(mode === "int"){
            display.value = display.value+"π";
        }
        else {
            display.value = "Misuse Function!"
        }
    }catch (e){
        display.value = "Error!";
    }
}
function getPiValue() {
    try {
         display.value = display.value+math.PI;
    } catch (e) {
        display.value = "Error!";
        console.log(e.message);
    }
}
function deleteElement(){
    try{
        const input = display.value.trim();
        if(input !== ""){
            display.value = input.slice(0,-1);
            console.log(display.value);
        }else {
          setTimeout(() =>{
              display.value = " ";
          }, 3000);
        }
    }catch (e) {
        display.value = "Error!";
    }
}



