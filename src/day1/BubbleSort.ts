export default function bubble_sort(arr: number[]): void {
    for (let r = 0; r < arr.length; r++) {
        for (let i = 0; i < arr.length - r - 1; i++) {
            const curr = arr[i];
            const next = arr[i + 1];
            if (curr > next) {
                arr[i] = next;
                arr[i + 1] = curr;
            }
        }
    }
}
