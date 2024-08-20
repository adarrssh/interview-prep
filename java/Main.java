import java.util.PriorityQueue;
import java.util.Comparator;

class Interval {
    int start;
    int end;

    Interval(int start, int end) {
        this.start = start;
        this.end = end;
    }
}



class Main {
    public static void main(String[] args) {
         PriorityQueue<Interval> pq = new PriorityQueue<>(new Comparator<Interval>(){
            @Override
            public int compare(Interval a, Interval b){
                if(a.end != b.end){
                    return b.end-a.end;
                }else{
                    return b.start - a.start;
                }
            }
        });

        int[] start = {1,2,1};
        int[] end = {1,2,2};

        
        for(int i = 0 ; i<start.length ; i++){
            pq.add(new Interval(start[i], end[i]));
        }
        
        
        int currLastDate = 0;
        int count = 0;
        
        while(!pq.isEmpty()){
            System.out.println("count : "+ count);
            if(count == 0){
                currLastDate = pq.peek().end-1;
                pq.poll();
                count++;
                continue;
            }
            
            Interval curr = pq.peek();
            
            int ele_sd = curr.start;
            int ele_ed = curr.end;
            
            System.out.println("sd: "+ ele_sd + " ed: "+ ele_ed + " currLastDate: "+ currLastDate);
            
            if(currLastDate> ele_ed){
                
                currLastDate = ele_ed-1;
                count++;
                pq.poll();
                
            }else if(currLastDate >= ele_sd && currLastDate <=ele_ed){
                currLastDate--;
                count++;
                pq.poll();
            }else if(currLastDate < ele_sd){
                System.out.println("here");
                break;
            }
                
        }
        
        System.out.println("count: "+ count);
        return ;
        
        
    }
}