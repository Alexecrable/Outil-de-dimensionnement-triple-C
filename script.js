//////ecritures des calculs

const palindromes = function (array) {
    let palindrome = true;
    array = array.toUpperCase();
    array = array.replace(/[^\w\']|_/g, "")
    for (let i = 0 ; i < array.length/2 ; i++){
        if (array[i] !== array[array.length-i-1]){
            palindrome = false;
        }
    }
    
    return palindrome;
};


//let result = palindromes(X);

window.alert("miaou");