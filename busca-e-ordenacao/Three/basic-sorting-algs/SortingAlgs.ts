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

	//contemplem
	public selectionSort2() {
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
}
