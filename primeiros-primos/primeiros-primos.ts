export default class FirstPrime {
    private n: number;

    public constructor(n: number) {
        this.n = n;
    }

    public getN(): number {
        return this.n;
    }

    public setN(n: number): void {
        this.n = n;
    }

    public atividade_avaliativa_1(n: number): number[] {
        let resultado: number[] = [];

        for (let i = 2; resultado.length < n; i++) {            
            console.log("i-" + i);

            let count: number = 0;

            for (let j = 1; j <= Math.sqrt(i); j++) {
                console.log("j-" + j);
                
                if (i % j === 0) count++;
            }
            if (count < 2) resultado.push(i);
        }

        return resultado;
    }
}
