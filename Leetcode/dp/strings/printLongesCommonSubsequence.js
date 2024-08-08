

const text1 = "abcde", text2 = "ace" 

function longestCommonSubsequence(text1, text2) {

    const m = text1.length
    const n = text2.length

    const dp = new Array(m+1).fill().map(()=>new Array(n+1).fill(0))


        for(let index1 = 1 ; index1<=m ; index1++){
            for(let index2 = 1 ; index2<=n ; index2++){
                if(text1[index1-1] === text2[index2-1]){
                    dp[index1][index2] = 1 + dp[index1-1][index2-1]
                }else{
                    dp[index1][index2] = Math.max(dp[index1][index2-1], dp[index1-1][index2])
                }
            }
        }


    let len = dp[m][n]
    let index = len-1
    const ans = new Array(len).fill("0")

    let index1 = m
    let index2 = n

    while(index1>0 && index2>0){
        if(text1[index1-1] === text2[index2-1]){
            ans[index] = text1[index1-1]
            index--
            index1--
            index2--
        }else if(dp[index1-1][index2] > dp[index1][index2-1]){
            index1--
        }else{
            index2--
        }
    }

    return ans.join("")

};

console.log(longestCommonSubsequence(text1,text2))
