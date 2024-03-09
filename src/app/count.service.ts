export class CountService {
    count = 0;
    constructor() { }
    increase() {
        this.count++;
    }
    decrease() {
        this.count--;
    }
}
