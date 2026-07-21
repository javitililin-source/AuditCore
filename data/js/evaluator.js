function evaluate(actual, expected, operator) {

    if (operator === "equals") {
        return actual === expected ? "PASS" : "FAIL";
    }

    if (operator === "notEquals") {
        return actual !== expected ? "PASS" : "FAIL";
    }

    if (operator === "greaterThan") {
        return actual > expected ? "PASS" : "FAIL";
    }

    if (operator === "lessThan") {
        return actual < expected ? "PASS" : "FAIL";
    }

    return "MANUAL";
}
