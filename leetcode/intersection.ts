/**
 * Intersection of Two Array (Kata Leetcode)
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
 */
function intersect(nums1: number[], nums2: number[]): number[] {
    const intersection = []
    const indicesIncluded: number[] = []
    for ( let i=0 ; i < nums1.length; i++) {
        for (let j=0; j < nums2.length; j++) {
            if ( nums1[i] === nums2[j] && !indicesIncluded.includes(j) ) {
                intersection.push(nums1[i])
                indicesIncluded.push(j)
                break;
            }
        }
    }
    return intersection
};

console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([1, 2, 2, 1], [2]))

console.log(intersect([4,9,5], [9,4,9,8,4]))