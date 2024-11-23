import { framer, isTextNode } from "framer-plugin";
import { useMemo } from "react";
import "./App.css";
import { useSelection } from "./hooks/useSelection";
import { convertToSmartQuotes } from "./utils/convertToSmartQuotes";
import { notifyInfo, notifySuccess, notifyError } from "./utils/notifications";

// Show the plugin UI with specified position and dimensions
framer.showUI({
    position: "top right",
    width: 260,
    height: 155
});

export function App() {
    // Get the current selection of nodes from the canvas
    const selection = useSelection();
    // Filter the selection to only include text nodes
    const textLayers = useMemo(() => selection.filter(isTextNode), [selection]);
    // Determine whether to use singular or plural form for 'layer'
    const layer = textLayers.length === 1 ? "layer" : "layers";

        // Function to handle the conversion of quotes in selected text layers
        const handleConvertQuotes = async () => {
            try {
                // Store original text values and track changes
                let changesDetected = false;
                let noQuotesDetected = true;

                const originalTexts = await Promise.all(
                    textLayers.map((node) => node.getText().then((text) => ({ node, text })))
                );
        
                await Promise.all(
                    textLayers.map(async (node) => {
                        const text = await node.getText();
                        if (text !== null) {
                            const convertedText = convertToSmartQuotes(text);
                            if (convertedText !== text) {
                                changesDetected = true;
                                noQuotesDetected = false;
                                await node.setText(convertedText);
                            } else if (/['"“”‘’]/.test(text)) {
                                noQuotesDetected = false;
                            }
                        }
                    })
                );
        
                if (noQuotesDetected) {
                    const message =
                        textLayers.length === 1
                            ? "The selected layer does not have quotes."
                            : "The selected layers do not have quotes.";
                    notifyInfo(message);
                    return;
                }                
        
                if (!changesDetected) {
                    notifyInfo("All selected text layers already contain smart quotes.");
                    return;
                }
        
                const handleUndo = async () => {
                    await Promise.all(
                        originalTexts.map(({ node, text }) => {
                            if (text !== null) {
                                return node.setText(text);
                            }
                        })
                    );
                };
        
                notifySuccess(`Successfully converted quotes in ${textLayers.length} selected ${layer}.`, handleUndo);
            } catch (error) {
                console.error("Error setting text for nodes: ", error);
                notifyError("An error occurred while converting quotes. Please try again.");
            }
        };
        

    return (
        <main>
            <p>
                Select one or more text layers to convert straight quotes into smart quotes. Please note that formatted text and links will be removed.
            </p>
            {textLayers.length === 0 ? (
                // Message to show if no text layers are selected
                <p>Please select at least one text layer.</p>
            ) : (
                // Message to show the number of selected text layers
                <p>You have {textLayers.length} text {layer} selected.</p>
            )}
            <button 
                className="framer-button-primary" 
                onClick={handleConvertQuotes}
                disabled={textLayers.length === 0} // Disable button if no text layers are selected
            >
                Convert Selection
            </button>
        </main>
    );
}