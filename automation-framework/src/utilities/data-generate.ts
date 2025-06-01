const faker = require('@faker-js/faker'); // CommonJS syntax for @faker-js/faker
const { format } = require('date-fns'); // CommonJS syntax for date-fns
export class DataGenerate {
    /**
     * select Randomly item from given list
     * @param array
     * @returns string
     */
    static selectRandomlyInList(array: any[]): string {
        const length = array.length;
        const index = this.getRandomInt(0, length - 1)
        return array[index];
    }

    /**
     * generate randomly the nunber in range
     * @param min
     * @param max
     * @returns
     */
    static getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generate Year from[20 year ago to current year]
     * @returns number
     */
    static generateYear(fromcurrentyear: number): number {
        const currentYear = new Date().getFullYear();
        const year = this.getRandomInt(currentYear + fromcurrentyear, currentYear);
        return year;
    }

    /**
     * Generate Amount
     * @returns number
     */
    static generateAmount(min: number, max: number): number {
        const amount = parseFloat(this.getRandomInt(min, max).toFixed(2));
        return amount;
    }

    /**
     * Generate Date
     * @param dateformat
     * @returns string
     */
    static generateDate(dateformat: string): string {
        const futuredate = faker.date.future();
        return format(futuredate, dateformat);
    }


}