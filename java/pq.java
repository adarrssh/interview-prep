// max heap
PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
// min heap
PriorityQueue<Integer> pq = new PriorityQueue<>();

 // Min-heap based on age
PriorityQueue<Person> minHeap = new PriorityQueue<>(Comparator.comparingInt(p -> p.age));
