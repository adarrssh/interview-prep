boolean exists = map.containsKey(K key);
boolean exists = map.containsValue(V value);
int size = map.size();
boolean isEmpty = map.isEmpty();
Map<Character, Integer> map = new HashMap<>();

map.get(K key);
map.put(K key, V value);

 map.getOrDefault(key, value)


// Iterate over keys
for (String key : map.keySet()) {
    System.out.println("Key: " + key);
}

// Iterate over values
for (Integer value : map.values()) {
    System.out.println("Value: " + value);
}

// Iterate over key-value pairs
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
}