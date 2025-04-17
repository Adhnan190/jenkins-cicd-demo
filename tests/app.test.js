const { addNumbers } = require('../public/script.js');

// Using Jest for testing
describe('Addition Function', () => {
    test('properly adds two numbers', () => {
        expect(addNumbers(1, 2)).toBe(3);
        expect(addNumbers(5, 7)).toBe(12);
        expect(addNumbers(-1, 1)).toBe(0);
    });
});