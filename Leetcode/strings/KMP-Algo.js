const hayStack = "AAAXAAAX"
const needle = "ababafg#gfababa"
// LPS   = [0,1,2,3]

// const hayStack = 'AAAXAAAA'
// const needle = 'AAAA'
// const hayStack = 'asfasdfsodjfisjd'

// const needle = "aacecaaa#aaacecaa"

class KMP{

    constructor(hayStack,needle){
        this.hayStack = hayStack
        this.needle = needle
    }

    strStr(){
        if(this.needle === "") return 0
        let m = this.needle.length
        const lps = new Array(m).fill(0)

        let prevLPS = 0
        let i = 1 

        while( i< m){
            if(this.needle[i] === this.needle[prevLPS]){
                lps[i] = prevLPS + 1
                prevLPS++
                i++
            }else{
                // prevLps can not go beyoned 0 so move i
                if(prevLPS === 0){
                    lps[i] = 0
                    i++
                }else{
                    prevLPS = lps[prevLPS-1]
                }
            }
        }

        console.log(lps)

        i = 0
        let j = 0

        while(i<this.hayStack.length){
            if(this.hayStack[i] === this.needle[j]){
                i++
                j++
            }else{
                if(j===0){
                    i++
                }else{

                   j =  lps[j-1]

                }
            }

            if(j === m){
                return i - m
            }
        }

        return -1
    }
}

const sol = new KMP(hayStack,needle)

console.log(sol.strStr())

// Explanation with an Example
// Let’s break it down with a detailed example. Consider the following:

// Needle (pattern): ABABCAB
// Haystack (text): ABABDABACDABABCAB
// Understanding the LPS Array
// First, the algorithm builds an LPS (Longest Prefix which is also Suffix) array for the pattern ABABCAB. The LPS array helps in determining how many characters can be skipped when a mismatch occurs.

// For the pattern ABABCAB, the LPS array is:
//       A  B  A  B  C  A  B
// LPS: [0, 0, 1, 2, 0, 1, 2]
// Walkthrough with the Example
// Let’s say we are comparing the pattern ABABCAB with the text ABABDABACDABABCAB. At some point in the comparison, we reach:

// Text: ... ABABCAB...
// Pattern: ABABCAB
// Suppose during the comparison, we successfully match up to the first ABABC, but then encounter a mismatch at the next character:

// Text: ABABDABACDABABCAB
// Pattern: ABABCAB
// ↑ (mismatch here)
// Here, the algorithm finds that the current character in the text doesn’t match the next character in the pattern. Normally, you'd think of moving the pattern one step ahead in the text. But the KMP algorithm uses the information in the LPS array to skip unnecessary comparisons.

// Role of prevLPS = lps[prevLPS - 1]
// At this mismatch point, prevLPS (which is equal to the length of the last matched prefix) is 2 (matching AB). The LPS value lps[1] tells us that the substring AB also occurs at the beginning of the pattern.

// Instead of starting from the beginning, the algorithm moves the pattern ahead to this point:

// New Pattern Position: ABABCAB
// ↑
// This means we don’t have to re-check the first part of the string that was matched (AB). Instead, we directly move the pattern to the position indicated by lps[prevLPS - 1].
// Summary of the else Block
// When a mismatch occurs, instead of moving the pattern ahead by one character, the KMP algorithm uses the LPS array to skip some characters in the pattern. This skipping is controlled by prevLPS = lps[prevLPS - 1].
// It essentially "reuses" the matched prefix, saving unnecessary comparisons, and improving the efficiency of the algorithm.