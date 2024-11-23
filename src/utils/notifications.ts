import { framer } from "framer-plugin";

// Function to show an info notification
export function notifyInfo(message: string) {
    framer.notify(message, {
        durationMs: 3000,
        variant: "info"
    });
}

// Function to show a success notification with an optional undo button
export function notifySuccess(message: string, handleUndo?: () => void) {
    framer.notify(message, {
        button: handleUndo ? { text: "Undo", onClick: handleUndo } : undefined,
        durationMs: 3000,
        variant: "success"
    });
}

// Function to show an error notification
export function notifyError(message: string) {
    framer.notify(message, {
        durationMs: 3000,
        variant: "error"
    });
}