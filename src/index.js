class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let newArr = [];
	
	Main:	
	for (let j = 0; j < indices.length; j++){
		for (let i = 0; i < this.arr.length; i++){
			if (i = indices[j]){
				newArr.push(this.arr[i]);
				delete this.arr[i];
				continue Main;
			}
		}
	}
	
	newArr.sort(this.compareFunction);
	
	Outer:
	for (let k = 0; k < newArr.length; k++){
		for (let l = 0; l < this.arr.length; l++){
			if (!this.arr[l]){
				this.arr[l] = newArr[k];
				continue Outer;
			}
		}
	}
	
  }

  setComparator(compareFunction) {
    this.compareFunction = (a,b) => a-b;
  }
}

module.exports = Sorter;