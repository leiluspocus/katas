/**
 * Find the maximum profit from buying and selling stock
 * Kata by LeetCode
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
 * @param prices The prices of the stock for each day
 * @returns The maximum profit
 */
const bestTimeToBuyAndSellStock = (prices: number[]): number => {
    let maxProfit = 0;
    for ( let i=0; i<prices.length; i++) {
        if (prices[i+1] > prices[i]) {
            maxProfit += prices[i+1] - prices[i];
        } 
    }
    return maxProfit;
}

console.log(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4])); // 7
console.log(bestTimeToBuyAndSellStock([1, 2, 3, 4, 5])); // 4
console.log(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1])); // 0