Queue<Integer> queue = new LinkedList<>();
add(E e): Inserts the specified element into the queue. Throws an exception if the element cannot be added.
offer(E e): Inserts the specified element into the queue. Returns false if it cannot be added.
remove(): Retrieves and removes the head of the queue. Throws an exception if the queue is empty.
poll(): Retrieves and removes the head of the queue, or returns null if the queue is empty.
element(): Retrieves, but does not remove, the head of the queue. Throws an exception if the queue is empty.
peek(): Retrieves, but does not remove, the head of the queue, or returns null if the queue is empty.


Deque<Integer> q = new ArrayDeque<>();
q.poll();
q.peekLast()
q.pollLast()

PriorityQueue<Integer> pq = new PriorityQueue<>();
add(E e) / offer(E e): Adds the specified element to the queue.
peek(): Retrieves, but does not remove, the head of the queue, or returns null if the queue is empty.
poll(): Retrieves and removes the head of the queue, or returns null if the queue is empty.
remove(Object o): Removes a single instance of the specified element from the queue, if present.
size(): Returns the number of elements in the queue.