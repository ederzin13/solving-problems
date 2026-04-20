export default class SortingAlgs {
	private list: number[];
	private readonly LEN: number = 0;

	public constructor(list: number[]) {
		this.list = list;
		this.LEN = this.getList().length;
	}

	public getList(): number[] {
		return this.list;
	}

	public selectionSort() {
		let unsorted: number[] = this.getList();
		let sorted: number[] = [];
		let menor: number = 0;

		while (unsorted.length > 0) {
			for (let i: number = 0; i <= unsorted.length; i++) {
				menor = this.getMenor(unsorted);

				if (unsorted[i] === menor) {
					unsorted.splice(i, 1);
					sorted.push(menor);
				}
			}
		}

		return sorted;
	}

	//por que???
	public selectionSort2() {
		let list: number[] = this.getList();
		let min: number = list[0];
		let pos: number = 0;

		while (pos < list.length) {
			for (let i = pos; i <= list.length; i++) {
				if (list[i] < min) {
					min = list[i];
					list[i] = list[pos];
					list[pos] = min;
					pos = pos + 1;
				}
			}
		}

		return list;
	}

	private getMenor(list: number[]): number {
		let menor: number = list[0];

		for (let i: number = 0; i <= this.LEN; i++) {
			if (list[i] < menor) menor = list[i];
		}

		return menor;
	}
}
