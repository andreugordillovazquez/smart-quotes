import smartquotes from "smartquotes";

// Function to convert straight quotes in a text to smart quotes using smartquotes.js
export function convertToSmartQuotes(text: string): string {
    return smartquotes.string(text);
}