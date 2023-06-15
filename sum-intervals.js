/**
 * Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the 
 * interval lengths. Overlapping intervals should only be counted once.
 * @param {Array} intervals 
 */
function sumIntervals(intervals) {
    // Identify overlaps
    const combinedIntervals = combineOverlappingIntervals(intervals);

    // Calculate intervals
    const finalIntervals = combinedIntervals.map(interval => getIntervalSize(interval));

    // Add them together
    return finalIntervals.reduce((accum, interval) => accum + interval);
}

function combineOverlappingIntervals(intervals) {
    combinedIntervals = [];
    const processedIntervals = [];

    // TODO improve these nested loops somehow
    intervals.forEach(interval => {
        // identify any intervals it overlaps and pop them all into combined arr
        const overlappingIntervals = [interval];
        if (processedIntervals.includes(interval)) {
            return;
        }

        intervals.forEach(intervalComparison => {

            if (processedIntervals.includes(intervalComparison)) {
                return;
            }

            // are either element within the range of interval elements?
            const isOverlap = getIsOverlap(interval, intervalComparison);

            if (isOverlap) {
                overlappingIntervals.push(intervalComparison);
            }
        });

        processedIntervals.push(...overlappingIntervals);
        const combinedInterval = [getSmallest(overlappingIntervals), getLargest(overlappingIntervals)];
        combinedIntervals.push(combinedInterval);
    });

    return combinedIntervals;
}

function getIsOverlap(intervalA, intervalB) {
    return isWithinRange(intervalA, intervalB[0]) || isWithinRange(intervalA, intervalB[1]);
}

function isWithinRange(range, num) {
    return num >= range[0] && num <= range[1];
}

function getSmallest(intervals) {
    const intervalValues = [];
    intervals.map(interval => interval.map(intervalValue => intervalValues.push(intervalValue)));
    return Math.min(...intervalValues);
}

function getLargest(intervals) {
    const intervalValues = [];
    intervals.map(interval => interval.map(intervalValue => intervalValues.push(intervalValue)));
    return Math.max(...intervalValues);
}

function getIntervalSize(interval) {
    return interval[1] - interval[0];
}

// const example = sumIntervals([
//     [0, 20],
//     [-100000000, 10],
//     [30, 40]
// ]) // => 100000030

const example = sumIntervals([
    [1, 5],
    [1, 5]
]) // => 100000030

console.log('example:', example);