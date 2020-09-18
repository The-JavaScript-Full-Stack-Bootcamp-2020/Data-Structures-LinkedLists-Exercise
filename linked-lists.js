//DATA STRUCTURES: LINKED LISTS//

/////////////////////////////////////////////////////////

class Item {
  next = null;
  value = null;
  constructor(value) {
    this.value = value;
  }
}


class LinkedList {
  #head = null;
  #tail = null;
  
  append = (value) => {
    const item = new Item(value);
    
    if (!this.#head) {
      this.#head = item;
      this.#tail = item;
      return;
    }
    
    this.#tail.next = item;
    this.#tail = item;
  }
  
  size = () => {
    let count = 1;
    let item = this.#head;
    
    if (!item) return 0;
    while (item = item.next) {
      count++;
    }
    
    return count;    
  }
  
  find = (value) => {
    let count = 1;
    let item = this.#head;
    
    if (!item) return null;
    while (item = item.next) {
      if (item.value === value) {
        return item;
      }
    }
    
    return null;
  }
  
  insert = (index, value) => {
    //check for out-of-bounds values
    if (index < 0 || index > this.size()) return;
    
    const node = new Item(value);
    let current = this.#head;
    let previous;

    if (index === 0) { //first position
      node.next = current;
      this.#head = node;
    } else {
      let i = 0;
      while (i++ < index) {
        previous = current;
        current = current.next;
      }
      
      node.next = current;
      previous.next = node;
    }
  }
}

//Another type of linked list is the double linked list. It contains a link to the previous element as well as the next.

////////////////////////////////////////////////////////

//Examples:

const list = new LinkedList();

list.size();
list.append(1);
list.append(2);
list.append(3);
list.size(); 





