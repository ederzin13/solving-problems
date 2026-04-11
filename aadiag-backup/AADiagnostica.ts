export default class Diagnostica {
    public nextMultiple(a: number, b: number) {
        if (a > b) {
            return a;
        }

        let current = b + 1;

        while (current % a > 0) {
            current++;
        }

        return current;
    }

    public expirationDate(d: number, m: number, y: number): boolean {
        let day: number = 16;
        let month: number = 3;
        let year: number = 2026;

        if (y < year) return true;

        if (m < month) return true;

        if (d < day) return true;

        return false;
    }

    public primeNumber(n: number): boolean {
        let count: number = 0;

        for (let i: number = 1; i <= n; i++) {
            if (n % i === 0) count++;

            if (i < n && count >= 2) return false;
        }

        return true;
    }

    public validade(y: number, m: number, d: number): boolean {
        let hoje = 2026;
        let mes = 3;
        let dia = 18;

        let today = (hoje * 10000) + (mes * 100) + dia;
        let values = (y * 1000) + (m * 100) + d;
        //2026X1000+4x100+18 = 2.026.418
        //2026x1000+3x100+18 = 2.026.318
        //2026x1000+02x100+18 = 2.026.218
        //2025x1000+12x100+30 = 2.026.230

        if (today <= values) return false;

        return true;
    }

    // public validade(y: string, m: string, d: string) {
    //     let today: number = this.addWeight("2026", "3", "18");
    //     let values: number = this.addWeight(y, m, d);

    //     if (today < values) return false;

    //     return true;
    // }

    // public addWeight(y: string, m: string, d: string): number {
    //     let year: string = y + "1000";
    //     let month: string = m + "100";

    //     let result = this.toInt(year, month, d);

    //     return result;
    // }

    // private toInt(y: string, m: string, d: string): number {
    //     let year = parseInt(y);
    //     let month = parseInt(m);
    //     let day = parseInt(d);

    //     let result: number = year + month + day;

    //     return result;
    // }
}
