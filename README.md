# Framer Smart Quotes Plugin

This plugin for Framer allows you to easily convert straight quotes into smart quotes (typographic quotes) within selected text layers. It helps improve the readability and visual appeal of your text content.

## Features

- Converts straight quotes (`"` and `'`) to smart quotes (`“”` and `‘’`) in selected text layers.
- Undo functionality for easy reversion of changes.
- Provides feedback through notifications about the status of conversions (e.g., no changes detected, errors).

## Usage

1. Select one or more text layers in your Framer canvas.
2. Click the "Convert Selection" button to convert straight quotes into smart quotes.
3. If no quotes are found or if the text layers are already using smart quotes, you will be notified accordingly.
4. If quotes are converted, you will see a notification with an option to "Undo" the changes.

## File Structure

- `App.tsx`: Main component that provides the UI and handles the logic for converting quotes.
- `hooks/useSelection.ts`: Custom hook to manage selection of nodes from the canvas.
- `utils/convertToSmartQuotes.ts`: Utility function to convert straight quotes to smart quotes.
- `utils/notifications.ts`: Utility functions to handle notifications for different actions.

## Development

To develop and extend the plugin, you can modify the code as needed:

- **Notifications**: The notification handling has been separated into `notifications.ts` for better modularity and reuse.
- **Hooks and Utilities**: The `useSelection` hook and `convertToSmartQuotes` utility function are modular to make the code easier to understand and maintain.

## Requirements

- Framer
- Node.js and npm (for development purposes)

## Contributing

Feel free to contribute to this project! You can submit issues or pull requests to help improve the plugin.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.