class Sorter {
  constructor() {
    this.arr = [];
	this.compareFunction = (a,b) => a - b;
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
	
	indices.forEach( ind => {
      newArr.push(this.arr[ind]);
      delete this.arr[ind]
    })
	
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
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;