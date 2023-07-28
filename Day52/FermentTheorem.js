module.exports = { 
    //param A : integer
    //param B : integer
    //return an integer
    
	solve: function(A, B){
        return this.powerofn(A, B-2, B);
	},

    powerofn: function(a, n, mod) {
        if(n == 0)
            return 1;
        let tmp = this.powerofn(a, Math.floor(n / 2), mod);
        let res = ((tmp % mod) * (tmp % mod) + mod) % mod;
        if(n % 2 != 0)
            res = ((res % mod) * (a % mod) + mod) % mod;
        return res;
    }
};
