const nums = [10,20,30,40,50]

const n = nums.length

const dp = new Array(n).fill().map(()=> new Array(n).fill(-1))

function f(i,j){
    if(i == j ) return 0

    if(dp[i][j] !== -1) return dp[i][j]
    let mini = Infinity

    for(let k = i ; k<j ; k++ ){
        let steps = nums[i-1]*nums[k]*nums[j] + f(i,k) 
        + f(k+1,j)

        if(steps< mini) mini = steps
    }

    dp[i][j] = mini
    return mini
}

// console.log(f(1,n-1))



function tabulation(){
    const dp = new Array(n).fill().map(()=> new Array(n).fill(0))

    for(let i = 1 ; i<n ; i++)dp[i][i] = 0

    for(let i = n-1 ; i>= 1 ; i--){
        // j will always be greater than i
        for(let j = i+1 ; j<n ; j++){
            let mini = Infinity
            for(let k = i ; k<j ; k++ ){
                let steps = nums[i-1]*nums[k]*nums[j] + dp[i][k] 
                + dp[k+1][j]
        
                if(steps< mini) mini = steps
            }

            dp[i][j] = mini
        }
    }

    return dp[1][n-1]

}

console.log(
    tabulation()
)