/*
 * El input seria algo asi
 * Node(value, next)
  const node4 = Node(13, null);
  const node3 = Node(12, node4);
  const node2 = Node(7, node3);
  const node1 = Node(3, node2);

  const node8 = Node(14, null);
  const node7 = Node(11, node8);
  const node6 = Node(9, node7);
  const node5 = Node(2, node6);

	* LinkedList(head)
  const linkedList1 = LinkedList(node1); -> input1
  const linkedList2 = LinkedList(node5); -> input2
*/

const LinkedList = head => {
  return { head };
};

const Node = (value, next) => {
  return { value, next };
};

// linkedList -> array
const getListValues = list => {
  const values = [];
  let nextValue = {};

  if (list.head) {
    nextValue = list.head;
    return getListValues(nextValue);
  }
  
  if (list.value) {
    values.push(list.value);
    if (list.next !== null) {
      nextValue = list.next;
      return [...values, ...getListValues(nextValue)];
    } else if (list.next === null) {
      return values;
    }
  } 
};

const createLinkedListFromArray = arrayOfValues => {
	const nodes = [];
  const lastElementIndex = arrayOfValues.length-1;
	for (let i = lastElementIndex; i >= 0; i--) {
		if (i === lastElementIndex) {
			nodes.push(Node(arrayOfValues[i], null));
    } else {
      nodes.push(Node(arrayOfValues[i], nodes[nodes.length-1]));
    }
  }
   const headNode = nodes[nodes.length-1];
   return LinkedList(headNode);
};

// test variables
const input1 = [3,7,12,13];
const input2 = [2,9,11,14];
const linkedList1 = createLinkedListFromArray(input1);
const linkedList2 = createLinkedListFromArray(input2);

// 2 linkedLists -> 1 sorted linkedList
const order2LinkedLists = (list1, list2) => {
  const list1Values = getListValues(list1);
  const list2Values = getListValues(list2);
  
  const values = [...list1Values, ...list2Values];
  
  const sortedValues = values.sort((prev, curr) => prev - curr);
  
  return createLinkedListFromArray(sortedValues);
}

// Try it out!!
console.log(JSON.stringify(order2LinkedLists(linkedList1, linkedList2)));
