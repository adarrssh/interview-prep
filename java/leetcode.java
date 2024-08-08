        // Arrays.sort(meetings, new Comparator<Meeting>() {
        //     @Override
        //     public int compare(Meeting m1, Meeting m2) {
        //         return m1.end - m2.end;
        //     }
        // });

        // Arrays.sort(arr, (a, b) -> b.profit - a.profit);
        // Arrays.sort(dictionary, Collections.reverseOrder());



class Solution
{
    //Function to find the maximum profit and the number of jobs done.
    int[] JobScheduling(Job arr[], int n)
    {
        Arrays.sort(arr, (a, b) -> b.profit - a.profit);
        int maxDeadline = 0;
        for (Job job : arr) {
            if (job.deadline > maxDeadline) {
                maxDeadline = job.deadline;
            }
        }
        int[] result = new int[maxDeadline + 1];
        Arrays.fill(result, -1);

        int countJobs = 0, maxProfit = 0;

        for (Job job : arr) {
            for (int j = job.deadline; j > 0; j--) {
                if (result[j] == -1) {
                    // Assign this job to the free slot
                    result[j] = job.id;
                    countJobs++;
                    maxProfit += job.profit;
                    break;
                }
            }
        }

        return new int[]{countJobs, maxProfit};
    }
}

                 return arr.toArray(new int[arr.size()][]);


// list -> size


class Pair {
    int countX;
    int countY;

    Pair(int countX, int countY) {
        this.countX = countX;
        this.countY = countY;
    }
}

class Solution {
    public int numberOfSubmatrices(char[][] grid) {
        int n = grid.length;
        int m = grid[0].length;

        Pair[][] pre = new Pair[n][m]; 

        for (int i = 0; i < n; i++) {
            if (grid[i][0] == 'X') {
                pre[i][0] = new Pair(1, 0);
            } else if (grid[i][0] == 'Y') {
                pre[i][0] = new Pair(0, 1);
            } else {
                pre[i][0] = new Pair(0, 0);
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 1; j < m; j++) {
                int countX = pre[i][j-1].countX;
                int countY = pre[i][j-1].countY;
                if (grid[i][j] == 'X') {
                    countX++;
                } else if (grid[i][j] == 'Y') {
                    countY++;
                }
                pre[i][j] = new Pair(countX, countY);
            }
        }

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < m; j++) {
                pre[i][j].countX += pre[i-1][j].countX;
                pre[i][j].countY += pre[i-1][j].countY;
            }
        }

        int ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (pre[i][j].countX > 0 && pre[i][j].countX == pre[i][j].countY) {
                    ans++;
                }
            }
        }

        return ans;
    }

}