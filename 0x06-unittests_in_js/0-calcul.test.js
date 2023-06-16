const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe("calculateNumber",()=>{
    it('rounding of a', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        assert.strictEqual(calculateNumber(1.7, 3.7), 6);
        assert.strictEqual(calculateNumber(1.8, 3.7), 6);
        assert.strictEqual(calculateNumber(1.9, 3.7), 6);
        assert.strictEqual(calculateNumber(1.9, 3.2), 5);
    }
    );

    it('rounding of b', () => {
        assert.strictEqual(calculateNumber(1.9, 3), 5);
        assert.strictEqual(calculateNumber(1.9, 3.2), 5);
        assert.strictEqual(calculateNumber(1.9, 3.5), 6);
        assert.strictEqual(calculateNumber(1.9, 3.7), 6);
        assert.strictEqual(calculateNumber(1.9, 3.8), 6);
        assert.strictEqual(calculateNumber(1.9, 3.9), 6);
        assert.strictEqual(calculateNumber(1.9, 3.9), 6);
    }
    );

    it('rounding of a and b', () => {
        assert.strictEqual(calculateNumber(1.2, 3.2), 4);
        assert.strictEqual(calculateNumber(1.5, 3.5), 5);
        assert.strictEqual(calculateNumber(1.7, 3.7), 6);
        assert.strictEqual(calculateNumber(1.8, 3.8), 6);
        assert.strictEqual(calculateNumber(1.9, 3.9), 6);
    }
    );

    it('rounding of a and b', () => {
        assert.strictEqual(calculateNumber(1.2, 3.2), 4);
        assert.strictEqual(calculateNumber(1.5, 3.5), 5);
        assert.strictEqual(calculateNumber(1.7, 3.7), 6);
        assert.strictEqual(calculateNumber(1.8, 3.8), 6);
        assert.strictEqual(calculateNumber(1.9, 3.9), 6);
    }
    );  

    