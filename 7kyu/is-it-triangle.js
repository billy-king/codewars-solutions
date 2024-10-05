// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 

// My Solution

// You can tell if it can be a triangle by using the "Triangle Inequality Theorem": the sum of the lengths of any two sides of a triangle must be greater than the length of the remaining side; if this condition is not met, a triangle cannot be formed with those side lengths.
function isTriangle(a,b,c) {
    return (a + b > c) && (b + c > a) && (c + a > b) ? true : false
}