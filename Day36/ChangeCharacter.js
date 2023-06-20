var minimumDistinctCharacter = function(A, B) {
    hashMap = {};
    for(let i = 0; i < A.length; i++) {
        if(hashMap[A.charAt(i)] == undefined) {
            hashMap[A.charAt(i)] = 1;
        }
        else {
            hashMap[A.charAt(i)] = hashMap[A.charAt(i)] + 1;
        }
    }

    let res = [];

    for(obj in hashMap) {
        console.log(obj);
    }
}

const A = "abcabbccd";
const B = 3;
const res = minimumDistinctCharacter(A, B);