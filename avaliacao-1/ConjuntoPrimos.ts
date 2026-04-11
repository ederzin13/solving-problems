// Eder Murilo de Morais
// Guilherme Patrício

export default class ConfjuntoInteiro {
    private conjunto: number[];

    constructor(conj: number[]) {
        this.conjunto = conj;
    }

    public getConj(): number[] {
        return this.conjunto;
    }
    //30, 42, 70, 105
    //todos na lista precisam ser divisíveis apenas por 1
    // public saoCoprimos(): boolean {
    //     let list: number[] = this.getConj();

    //     let count: number = 0;

    //     for (let i = 1; count < list.length; i++) {
    //         //
    //         console.log('i = ' + i);
    //         for (let j = 0; (j + 1) <= Math.sqrt(list[j]); j++) {
    //             console.log('j = ' + j);

    //             if (list[j] % i === 0) count++;
    //         }
    //     }
    //     if (count <= list.length) return true;
    //     return false;
    // }

    public saoCoprimos() {
        let list: number[] = this.getConj();

        
        for (let i = 0; i <= list.length; i++) {
            console.log('i = ' + i);
            let condition = 0;
            
            for (let j = 0; j <= list[j]; j++) {
                console.log('j = ' + j)
                console.log('item = ' + list[i]);
                if (list[j] % i === 0) condition++;

                console.log('condition = ' + condition);

                if (condition > list.length) return false;
            }
        }

        return true;
    }
}