import java.util.Arrays;
import java.util.List;


class Solution {
    public int maxPathSum(List<Integer> arr1, List<Integer> arr2) {
        // code here
        int sum1 = 0;
        int sum2 = 0;
        
        int i1 = 0;
        int n1 = arr1.size();
        int i2 = 0;
        int n2 = arr2.size();
        
        while(i1<n1 && i2 < n2){
            if(arr1.get(i1) == arr2.get(i2)){
                int forwardSum = findSum(i1,i2,arr1,arr2);
                return Math.max(sum1,sum2) + forwardSum;
            }else if(arr1.get(i1)>arr2.get(i2)){
                i2++;
            }else{
                i1++;
            }
        }
        
        return Math.max(sum1,sum2);
    }
    
    public static int findSum(int i, int j , List<Integer> arr1, List<Integer> arr2){
        int sum1 = 0;
        
        for(int p = i ; p<arr1.size();p++){
            sum1 += arr1.get(p);
        }
        
        int sum2 = 0;
        
        for(int p = j ; p<arr2.size();p++){
            sum2 += arr2.get(p);
        }
        
        return Math.max(sum1,sum2);
    }

}


public class Main {
    public static void main(String[] args) {
        // Create sample lists
        List<Integer> arr1 = Arrays.asList(2, 3, 7, 10, 12);
        List<Integer> arr2 = Arrays.asList(1, 5, 7, 8);
        
        // Create an instance of the Solution class
        Solution solution = new Solution();
        
        // Call the maxPathSum method and get the result
        int result = solution.maxPathSum(arr1, arr2);
        
        // Print the result
        System.out.println("The maximum path sum is: " + result);
    }
}