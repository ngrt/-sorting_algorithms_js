function selectionSort(array) {
	for (i = 0 ; i < array.length-1 ; i++) {
		var min = i;
		for (j = i+1 ; j < array.length ; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		switcher(array, i, min);
	}
	return array
}

function switcher(array, x, y) {
	var temp = array[x];
	array[x] = array[y];
	array[y] = temp;
}

function bubbleSort(array) {
	var swapped;
	do {
		swapped = false;
		for (i = 0 ; i < array.length - 1 ; i++) {
			if (array[i] > array[i+1]) {
				switcher(array, i, i+1);
				swapped = true;
			}
		} 
	} while (swapped)
	return array;
}

function insertionSort(array) {

	for (i = 1 ; i < array.length ; i++) {
		var value = array[i];
		var hole = i;

		while (hole > 0 && array[i-1] > value) {
			array[hole] = array[hole-1];
			hole--;
		}	
		array[hole] = value;
	}

	return array;
}

function mergeSort(array) {
	if (array.length < 2) {
		return
	}

	mid = array.length / 2;

	left = array.slice(0, mid);
	right = array.slice(mid+1, array.length);

	mergeSort(left);
	mergeSort(right);

	return merge(left, right);
}

function merge(left, right) {

	result = [];

	while (right.length && left.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) {
		result.push(left.shift());
	}

	while (right.length) {
		result.push(right.shift());
	}

	return result;
}

function quickSort(array, start, end) {

	if (start < end) {
	  	var index = partition(array, start, end);
		quickSort(array, start, index);
		quickSort(array, index+1, end);
	}

	return array;
}

function partition(array, start, end) {
	var pivot = array[end];
	var index = start; 

	for (i=0 ; i < array.length ; i++) {
		if (array[i] <= pivot) {
			switcher(array, i, index);
			index++;
		}
	}
	switcher(array, index, end);
	
	return index;
}

funciton quickSort(array, start, end) {

}

function partition(array, start, end) {
	
}

var array = [3, 5, 1, 0, 3, 8, 9];

console.log(quickSort(array, 0, array.length-1));