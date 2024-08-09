ArrayList<String> list = new ArrayList<>();



list.add("Apple");
list.add("Banana");
list.add(1, "Orange"); // Inserts "Orange" at index 1

ArrayList<String> newFruits = new ArrayList<>();
newFruits.add("Mango");
newFruits.add("Pineapple");
list.addAll(newFruits);

list.get(0); // Returns the first element "Apple"

// Modifying Elements

list.set(1, "Grapes"); // Replaces the element at index 1 with "Grapes"
// Removing Elements

list.remove(1); // Removes the element at index 1 ("Grapes")


list.remove("Banana"); // Removes the first occurrence of "Banana"

list.removeAll(newFruits); // Removes "Mango" and "Pineapple" from the list

list.clear(); // Removes all elements from the list
 
list.size() // size


boolean hasApple = list.contains("Apple"); // Returns true if "Apple" is in the list

int index = list.indexOf("Apple"); // Returns the index of "Apple"


int size = list.size(); // Returns the number of elements in the list
Convert ArrayList to an array:

String[] array = list.toArray(new String[0]);

boolean isEmpty = list.isEmpty(); // Returns true if the list is empty


Advantages of ArrayList
Dynamic resizing: The ArrayList automatically resizes itself when elements are added or removed.
Random access: Elements can be accessed in constant time, i.e., O(1) time complexity.
Easy to use: The ArrayList provides a simple API for list operations.

Disadvantages of ArrayList
Performance on insertion/deletion: Inserting or deleting elements, especially in the middle of the list, can be slow because it may involve shifting elements.
Memory usage: ArrayList may consume more memory than a regular array because it maintains extra capacity to allow for growth.

// converts res to 2d array
List<int[]> res = new ArrayList<>();
res.toArray(new int[res.size()][]);
