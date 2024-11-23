// Function to convert straight quotes in a text to smart quotes
export function convertToSmartQuotes(text: string): string {
    return text
        // Replace opening straight double quotes with smart quotes
        .replace(/(\W|^)"(\w)/g, '$1“$2')
        // Replace closing straight double quotes with smart quotes
        .replace(/(\w)"(\W|$)/g, '$1”$2')
        // Replace opening straight single quotes with smart quotes
        .replace(/(\W|^)'(\w)/g, '$1‘$2')
        // Replace closing straight single quotes with smart quotes
        .replace(/(\w)'(\W|$)/g, '$1’$2')
        // Replace single quotes before decades (e.g., '90s) with smart quotes
        .replace(/(\s|^)'(\d\ds)/g, '$1‘$2');
}