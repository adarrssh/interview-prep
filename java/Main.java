import java.util.Arrays;
import java.util.List;


class Node
    {
        int data;
        Node next;
        Node(int d) {data = d; next = null; }
    }


class Main {
    public static Node findUnion(Node head1, Node head2) {
        // Add your code here.
        Node curr1 = mergeSort(head1);
        Node curr2 = mergeSort(head2);
        
        Node tempNode = new Node(-1);
        
        Node temp = tempNode;
        int count = 0;
        
        while(curr1 != null && curr2 != null){
            
         
            if(curr1.data <curr2.data){
                
                if(tempNode.next == null){
                    temp.next = curr1;
                    temp = temp.next;
                    count++;
                }else if(temp.data != curr1.data){
                    temp.next = curr1;
                    temp = temp.next;
                    count++;
                }
            
                System.out.println("curr1 : "+curr1.data + " temp :" + temp.data + " count: "+ count);
                curr1 = curr1.next;
                temp.next = null;

            }else if(curr2.data < curr1.data){
                if(tempNode.next == null){
                    temp.next = curr2;
                    temp = temp.next;
                    count++;

                }else if(temp.data != curr2.data){
                    temp.next = curr2;
                    temp = temp.next;
                    count++;

                }
                
                System.out.println("curr2: "+curr2.data+ " temp :" + temp.data + " count: "+ count);
                curr2 = curr2.next;
                temp.next = null;


            }else{
                if(tempNode.next == null){
                    temp.next = curr1;
                    temp = temp.next;
                    count++;

                }else if(temp.data != curr1.data){
                    temp.next = curr1;
                    temp = temp.next;
                    count++;

                }
                
                System.out.println("equal : "+curr1.data + " temp :" + temp.data + " count: "+ count);

                curr1 = curr1.next;
                curr2 = curr2.next;
                temp.next = null;

            }

            Node curr = tempNode.next;

            
        }
        
        while(curr1 != null){
            if(tempNode.next == null){
                temp.next = curr1;
                temp = temp.next;
                count++;

            }else if(temp.data != curr1.data){
                temp.next = curr1;
                temp = temp.next;
                count++;

            }

            System.out.println("curr1 : "+curr1.data + " temp :" + temp.data + " count: "+ count);
         

            curr1 = curr1.next;
                            temp.next = null;

        }
        
        while(curr2 != null){
            if(tempNode.next == null){
                temp.next = curr2;
                temp = temp.next;
                count++;

            }else if(temp.data != curr2.data){
                temp.next = curr2;
                temp = temp.next;
                count++;

            }
            System.out.println("curr2: "+curr2.data+ " temp :" + temp.data + " count: "+ count);
         
            curr2 = curr2.next;
                            temp.next = null;

        }
        
        return tempNode.next;
    }
    
    static Node mergeSort(Node node){
        if(node == null || node.next == null) return node;
        
        Node mid = findMid(node);
        
        Node left = node;
        Node right = mid.next;
         mid.next = null;

        Node sortedleft = mergeSort(left);
        Node sortedRight = mergeSort(right);
        
        Node newHead = merge(sortedleft,sortedRight);
        return newHead;
    }
    
    static Node merge(Node left,Node right){
        Node tempNode = new Node(-1);
        Node temp = tempNode;
        
        while(left != null && right != null){
            if(left.data<=right.data){
                temp.next = left;
                left = left.next;
            }else{
                temp.next = right;
                right = right.next;
            }
            
            temp = temp.next;
        }
        
        if(left != null){
            temp.next = left;
        }
        
        if(right != null){
            temp.next = right;
        }
        
        return tempNode.next;
    }
    
    static Node findMid(Node head){
        Node slow = head;
        Node fast = head;
        
        while(slow != null && fast != null && fast.next != null && fast.next.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow;
    }

    public static void printNode(Node head){
        Node curr = head;
        while(curr != null){
            System.out.print(curr.data);
            curr = curr.next;
        }
    }

    public static void main(String[] args) {

    // 3 4 9 5 2 1 8 8 9 5 9
    // 2 5 9 9 6 4 2 6 9 3 5 3
        Node head1 = new Node(3);
        head1.next = new Node(4);
        head1.next.next = new Node(9);
        head1.next.next.next = new Node(5);
        head1.next.next.next.next = new Node(2);
        head1.next.next.next.next.next = new Node(1);
        head1.next.next.next.next.next.next = new Node(8);
        head1.next.next.next.next.next.next.next = new Node(9);
        head1.next.next.next.next.next.next.next.next = new Node(5);
        head1.next.next.next.next.next.next.next.next.next = new Node(9);

        Node head2 = new Node(2);
        head2.next = new Node(5);
        head2.next.next = new Node(9);
        head2.next.next.next = new Node(9);
        head2.next.next.next.next = new Node(6);
        head2.next.next.next.next.next = new Node(4);
        head2.next.next.next.next.next.next = new Node(2);
        head2.next.next.next.next.next.next.next = new Node(6);
        head2.next.next.next.next.next.next.next.next = new Node(9);
        head2.next.next.next.next.next.next.next.next.next = new Node(3);
        head2.next.next.next.next.next.next.next.next.next.next = new Node(5);
        head2.next.next.next.next.next.next.next.next.next.next.next = new Node(3);

        Node result = findUnion(head1, head2);

        while(result != null){
            System.out.print(result.data);
            result = result.next;
        }
        
    }
}