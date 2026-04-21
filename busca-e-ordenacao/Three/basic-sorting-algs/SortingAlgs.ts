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

	public selectionSort(): number[] {
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

	//contemplem
	public selectionSort2(): number[] {
		let list: number[] = this.getList();
		let sorted: number[] = [];
		const LEN: number = list.length;

		while (sorted.length < LEN) {
			let min: number = this.getMenor(list);
			let toSplice: number = this.getPosition(list, min);
			list.splice(toSplice, 1);
			sorted.push(min);
		}

		return sorted;
	}

	//obra prima
	public selectionSort3(): number[] {
		let list: number[] = this.getList();
		let j: number = 0;

		while (!this.isSorted(list)) {
			let min: number = list[j];

			for (let i: number = j; i <= list.length; i++) {
				if (list[i] < min) {
					min = list[i];
					list[i] = list[j];
					list[j] = min;
				}
			}

			j++;
		}

		return list;
	}

	public bubbleSort(): number[] {
		let list: number[] = this.getList();
		let j: number = list.length;

		while (j > 0) {
			for (let i: number = 0; i < j; i++) {
				if (list[i] > list[i + 1]) {
					let aux: number = list[i];
					list[i] = list[i + 1];
					list[i + 1] = aux;
				}
			}

			j--;
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

	private getPosition(list: number[], num: number): number {
		let position: number = 0;

		for (let i: number = 0; i <= list.length; i++) {
			if (list[i] === num) position = i;
		}

		return position;
	}

	public isSorted(list: number[]): boolean {
		for (let i: number = 0; i <= list.length; i++) {
			if (list[i] > list[i + 1]) return false;
		}

		return true;
	}
}
