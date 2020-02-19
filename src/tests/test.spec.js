const assert = require('chai').assert;
const {printFizzBuzzAsync} = require('../engine');
const {WITH_ERRORS, PRESERVE_ORDER, SLOW_ENABLED} = require('../constants');
describe('Performance Test - Bonus Task', function() {
    it('should execute function in less than 1000 milliseconds', async () => {
        let wordCount = 100;
        let time = process.hrtime();
        await printFizzBuzzAsync(wordCount, WITH_ERRORS, PRESERVE_ORDER, SLOW_ENABLED);
        const timeDiff = process.hrtime(time);
        let elapsedTime = (timeDiff[0] * 1e9 + timeDiff[1])/1000000;
        assert.isBelow(elapsedTime, 1000);
    });
});