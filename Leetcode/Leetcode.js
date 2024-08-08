// class Solution {
//     isCycle(V, adj) {
//         let vis = new Array(V).fill(0)
//         for(let i = 0 ; i<V; i++){
//             if(!vis[i]){
//                 if(this.detect(i,adj,vis)) return true
//             }
//         }

//         return false;
//     }

//     detect(src,adj,vis){
//         vis[src] = 1

//         let queue = []
//         queue.push([src,-1])

//         while(queue.length>0){
//             let [node,parent] = queue.shift()
            
//             for(let adjacentNode of adj[node]){
//                 if(!vis[adjacentNode]){
//                     vis[adjacentNode] = 1
//                     queue.push([adjacentNode,node])
//                 }
//                 else if(parent !== adjacentNode){
//                     return true;
//                 }
//             }
//         }
//     }
// }

// let V = 4; // number of vertices
// let adj = new Array(V).fill(0).map(() => []);

// adj[0] = [];       
// adj[1] = [2];       
// adj[2] = [1, 3];    
// adj[3] = [2];  

// let sol = new Solution(V,adj)

// console.log(sol.isCycle(V,adj))



function a(){
    
    function b(){
        
        var x = 4;
    }

    console.log(x)
}

a()