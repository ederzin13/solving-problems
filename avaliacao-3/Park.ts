//Eder Murilo de Morais
//Guilherme Patricio Silva

export default class Park {
    private queue: number[];

    public constructor(queue: number[]) {
        this.queue = queue;
    }

    public getQueue(): number[] {
        return this.queue;
    }

    public setQueue(queue: number[]): void {
        this.queue = queue;
    }

    public getSorted() {
        let queue: number[] = this.getQueue();
        let people: number[] = this.getPeople();

        people = this.selectionSort(people);

        let j: number = 0;

        for (let i: number = 0; i < queue.length; i++) {
            if (queue[i] === -1) {
                continue;
            }

            queue[i] = people[j]
            j++;
        }

        this.setQueue(queue);
        return queue;
    }

    public getPeople() {
        let queue: number[] = this.getQueue();
        let people: number[] = [];

        for (let i: number = 0; i < queue.length; i++) {
            if (queue[i] != -1) {
                people.push(queue[i]);
            }
      }

      return people;
    }


    public selectionSort(people: number[]): number[] {
        let list: number[] = people;
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

    public isSorted(list: number[]): boolean {
        for (let i: number = 0; i <= list.length; i++) {
            if (list[i] > list[i + 1]) 
                return false;
            }

        return true;
    }
}