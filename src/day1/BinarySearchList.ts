export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let hi = haystack.length;

    while (low < hi) {
        let mid = Math.floor(low + (hi - low) / 2);
        const value = haystack[mid];
        if (value === needle) {
            return true;
        } else if (value < needle) {
            low = mid + 1;
        } else {
            hi = mid;
        }
    }
    return false;
}

// console.log(bs_list([1, 2, 3, 4, 5, 6, 7], 4));
