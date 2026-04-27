export default class MegaSena {
	private bet: number[];
	private game: number[];

	public constructor(betNumberAmount: number) {
		this.bet = this.genBet(betNumberAmount);
		this.game = this.genBet();
	}

	public getBet(): number[] {
		return this.bet;
	}

	public getGame(): number[] {
		return this.game;
	}

	public hitNumber(): number {
		let bet: number[] = this.getBet();
		let game: number[] = this.getGame();

		for (let i: number = 0; i <= bet.length; i++) {}
	}

	//cria uma sequência de números ordenados para a aposta, sem repetições
	private genBet(max: number = 6): number[] {
		let game: number[] = [];
		let i: number = 0;

		while (i < max) {
			let num: number = Math.ceil(Math.random() * 60);

			if (!this.exists(num, game)) {
				game.push(num);
				i++;
			}
		}

		this.selectionSort(game);
		// this.bubbleSort(game);

		return game;
	}

	private exists(num: number, game: number[]): boolean {
		for (let i: number = game.length - 1; i >= 0; i--) {
			if (num === game[i]) {
				return true;
			}
		}

		return false;
	}

	private bubbleSort(arr: number[]): number[] {
		while (!this.isSorted(arr)) {
			for (let i: number = 0; i < arr.length; i++) {
				if (arr[i] > arr[i + 1]) {
					let aux: number = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = aux;
				}
			}
		}

		return arr;
	}

	private selectionSort(arr: number[]): number[] {
		let list: number[] = arr;

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

	private isSorted(arr: number[]): boolean {
		for (let i: number = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				return false;
			}
		}

		return true;
	}
}
