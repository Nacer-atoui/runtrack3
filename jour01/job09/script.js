let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function tri(numbers, order) {
    
    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    }

    if (order === "desc") {
       numbers.sort((a, b) => b - a);
    }

    return numbers;
}

console.log (tri(numbers, "asc"));
console.log (tri(numbers, "desc"));