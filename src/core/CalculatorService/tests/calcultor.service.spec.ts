import { CalculatorService } from "../calculator.service"

describe('CalculatorService', () => {
    let calculatorServie: CalculatorService;

    beforeEach(() => {
        calculatorServie = new CalculatorService();
    })

    test('initial setup', () => {
        expect(1).toEqual(1);
    })
})