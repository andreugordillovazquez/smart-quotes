import { useState, useEffect } from "react";
import { framer, CanvasNode } from "framer-plugin";

// Custom hook to manage the selection of nodes from the canvas
export function useSelection(): CanvasNode[] {
    const [selection, setSelection] = useState<CanvasNode[]>([]);

    useEffect(() => {
        // Subscribe to selection changes and update the selection state
        const unsubscribe = framer.subscribeToSelection(setSelection);
        return () => {
            // Cleanup function to unsubscribe when the component unmounts
            unsubscribe();
        };
    }, []);

    return selection;
}