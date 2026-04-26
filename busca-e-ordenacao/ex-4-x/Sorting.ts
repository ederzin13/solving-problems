export default class Sorting {
	private list: number[];
	private readonly LEN: number;
	private readonly RANGE: number = 20;

	public constructor() {
		this.list = this.genList();
		this.LEN = this.list.length;
	}

	public getList(): number[] {
		return this.list;
	}

	public setList(list: number[]) {
		this.list = list;
	}

	private genList(): number[] {
		let list: number[] = [];

		for (let i: number = 0; i < 20; i++) {
			list.push(Math.ceil(Math.random() * this.RANGE));
		}

		return list;
	}

	public isAscending(list: number[]): boolean {
		let l: number[] = list;

		for (let i: number = 0; i <= this.LEN; i++) {
			if (l[i] > l[i + 1]) return false;
		}

		return true;
	}

	public betterBubble() {
		let list: number[] = this.getList();

		while (!this.isAscending(list)) {
			for (let i: number = 0; i <= this.LEN; i++) {
				if (list[i] > list[i + 1]) {
					let aux: number = list[i];
					list[i] = list[i + 1];
					list[i + 1] = aux;
				}
			}
		}

		this.setList(list);

		return list;
	}

	public shuffle(): void {
		let list: number[] = this.getList();
		let shuffled: number[] = [];

		for (let i: number = 0; i < this.LEN; i++) {
			let position: number = Math.ceil(Math.random() * list.length - 1);

			shuffled.push(list[position]);
			list.splice(position, 1);
		}

		this.setList(shuffled);
	}

	public gnomeSort(): number[] {
		let list: number[] = this.getList();

		for (let i: number = 0; i < this.LEN; i++) {
			if (i > 0) {
				if (list[i] < list[i - 1]) {
					let aux: number = list[i];
					list[i] = list[i - 1];
					list[i - 1] = aux;
					i = i - 2;
				}
			}
		}

		return list;
	}

	public recursiveSelection(
		pos: number = 0,
		i: number = 0,
		list: number[] = this.getList(),
		min: number = this.getMin(list, pos),
	): number[] 
	
	{
		if (pos === list.length) 
			return list;

		if (min === list[pos]) {
			let aux: number = list[i];
			list[i] = min;
			list[pos] = aux;

			return this.recursiveSelection(i + 1, i + 1, list);
		}

		return this.recursiveSelection(pos + 1, i, list);
	}	

	private getMin(list: number[], pos: number, aux: number = list[pos]): number {
		let min: number = aux;

		if (pos > list.length) 
			return min;

		if (list[pos] < min) {
			min = list[pos];
		}

		return this.getMin(list, pos + 1, min);
	}

	//exercício 9
	public findX(x: number): number {
		if (this.mayBePresent(x)) {
			let list: number[] = this.getList();

			switch (this.closest(x)) {
				case 0: {
					console.log("Extremidade esquerda");

					for (let i: number = 0; i <= this.LEN; i++) {
						if (list[i] === x)
							return i;
					}
				}

				case 1: {
					console.log("Extremidade direita");

					for (let i: number = list[this.LEN - 1]; i >= 0; i--) {
						if (list[i] === x)
							return i;
					}
				}
			}
		}

		return 0;
	}

	private mayBePresent(x: number): boolean {
		let list: number[] = this.getList();

		if (list[0] <= x && list[this.LEN - 1] >= x)
			return true;

		return false;
	}

	private closest(x: number): number {
		if (x > Math.ceil(this.RANGE / 2))
			return 1;

		return 0;
	}
}
