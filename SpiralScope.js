/**
 * SpiralScope
 * ------------------------
 * A lightweight traversal engine that extracts two-dimensional
 * grid data in clockwise spiral order.
 *
 * Concept:
 * Useful for systems that need to process perimeter data first,
 * gradually moving toward the center, such as image scanning,
 * warehouse mapping, robotics, and GIS visualization.
 */

class SpiralScope {
    /**
     * Traverse a 2D grid in clockwise spiral order.
     *
     * @param {number[][]} grid
     * @returns {number[]}
     */
    static traverse(grid) {
        if (!grid.length || !grid[0].length) {
            return [];
        }

        const traversal = [];

        let topBoundary = 0;
        let bottomBoundary = grid.length - 1;
        let leftBoundary = 0;
        let rightBoundary = grid[0].length - 1;

        while (
            topBoundary <= bottomBoundary &&
            leftBoundary <= rightBoundary
        ) {

            // Traverse the current top edge
            for (let column = leftBoundary; column <= rightBoundary; column++) {
                traversal.push(grid[topBoundary][column]);
            }
            topBoundary++;

            // Traverse the current right edge
            for (let row = topBoundary; row <= bottomBoundary; row++) {
                traversal.push(grid[row][rightBoundary]);
            }
            rightBoundary--;

            // Traverse the current bottom edge
            if (topBoundary <= bottomBoundary) {
                for (let column = rightBoundary; column >= leftBoundary; column--) {
                    traversal.push(grid[bottomBoundary][column]);
                }
                bottomBoundary--;
            }

            // Traverse the current left edge
            if (leftBoundary <= rightBoundary) {
                for (let row = bottomBoundary; row >= topBoundary; row--) {
                    traversal.push(grid[row][leftBoundary]);
                }
                leftBoundary++;
            }
        }

        return traversal;
    }
}

/* ---------------- Example ---------------- */

const warehouseGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(SpiralScope.traverse(warehouseGrid));

// Output:
// [
//   1, 2, 3,
//   6, 9, 8,
//   7, 4, 5
// ]

module.exports = SpiralScope;
