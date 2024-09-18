import java.util.*;

class Test {
    public static void main(String[] args) {
         
        String[] ops = {"5", "2", "C", "D", "+"};

        int index = 0;
        int n = ops.length;
        int sum = 0;
        List<Integer> ans = new ArrayList<>();

        while (index < n) {
            String ch = ops[index];
            if (ch == "C") {  // Use .equals() for string comparison
                ans.remove(ans.size() - 1);
            } else if (ch == "D") {  // Use .equals() for string comparison
                int lastEle = ans.get(ans.size() - 1);
                int doubleEle = lastEle * 2;
                ans.add(doubleEle);
            } else if (ch == "+") {  // Use .equals() for string comparison
                int lastEle = ans.get(ans.size() - 1);
                int secondLastEle = ans.get(ans.size() - 2);
                int sumEle = lastEle + secondLastEle;
                ans.add(sumEle);
            } else {
                ans.add(Integer.parseInt(ch));
            }

            index++;
        }

        index = 0;
        int size = ans.size();

        while (index < size) {
            sum += ans.get(index);
            index++;
        }

        System.out.println("sum: " + sum);
    }
}
