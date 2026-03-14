const DIAMOND_SIZE = 5;

function generateHollowDiamond(n) {
    let output = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            output += " ";
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            if (j === 1 || j === (2 * i - 1)) {
                output += "*";
            } else {
                output += " ";
            }
        }
        output += "\n";
    }

    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
            output += " ";
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            if (j === 1 || j === (2 * i - 1)) {
                output += "*";
            } else {
                output += " ";
            }
        }
        output += "\n";
    }

    process.stdout.write(output);
}

generateHollowDiamond(DIAMOND_SIZE);
