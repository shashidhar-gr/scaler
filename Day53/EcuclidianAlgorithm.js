/**
 * Euclidian algorithm says, 
 * If gcd(a, b) = x then gcd(a-b, b) = x iff a > b
 */
/**
 * Remember this
 * gcd(a, b) = gcd(a % b, b) iif a > b
 */

/**
 *  example gcd(6, 21)
    swap elements, so that a > b
    gcd(21, 6) = gcd(21 % 6, 6) = gcd(3, 6)
    gcd(3, 6)
    swap elements, so that a > b
    gcd(6, 3) = gcd(6 % 3, 3) = gcd(0, 3)
    gcd(0, 3)
    swap elements, so that a > b
    gcd(3, 0)
    If one number is zero then the other number is the gcd(a, b)
    So gcd(21, 6) = 3
 **/

/**
 * Time and Space Complexity: 
 *      Since we are reducing atleast number to its half atleast at each step,
        we can say each number will take log(x) to reach 0.
        And we will stop the iterations when one of the number becomes zero.
        So, TC : O(min(log(a), log(b))) 
            SC : O(min(log(a), log(b))) 
             or 
            O(log(min(a, b)))
 */
