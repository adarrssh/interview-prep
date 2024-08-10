import java.util.*;

class Factorial {

   public int bitonic(List<Integer> arr) {
        // Your Code goes here.
        int ans = 0;
        int i = 0;
        int n = arr.size();
        
        if(n == 1) return n;
        
        if(n == 2) return n;
        
        while(i<n){
            if(i == 0 && arr.get(i) >= arr.get(i+1)){
                int rightDis = findRDis(i+1, arr);
                ans = Math.max(ans, rightDis + 1);
                i += rightDis;
            }
            
            else if(i == n-1 && arr.get(i) >= arr.get(i-1)){
                int leftDis = findLDis(i-1,arr);
                ans = Math.max(ans, leftDis + 1);
            }
            
            else if( i < n-1 && i>0 && arr.get(i)>= arr.get(i-1) && arr.get(i)>= arr.get(i+1)){
                int leftDis = findLDis(i-1,arr);
                int rightDis = findRDis(i+1,arr);
                
                ans = Math.max(ans, leftDis + rightDis + 1);
                i += rightDis;
            }
            
            
            i++;
        }
        
        return ans;
        
    }
    
    public int findRDis(int index, List<Integer> arr){
        int n = arr.size();
        
        int i = index;
        int ans = 0;
        
        while(i<n){
            if(arr.get(i)<=arr.get(i-1)) {ans++ ; i++;}
            else break;
        }
        
        return ans;
    }
    
    public int findLDis(int index, List<Integer> arr){

        int i = index;
        int ans = 0;
        
        while(i>=0){
            if(arr.get(i)<=arr.get(i+1)) {ans++ ; i--;}
            else break;
        }
        
        return ans;
    }

    public static void main(String[] args) {
        Factorial obj = new Factorial();
        List<Integer> arr = Arrays.asList(10 , 20 , 30 ,40);
        int result = obj.bitonic(arr);
        System.out.println("Length of the longest bitonic subsequence is: " + result);
    }


}

