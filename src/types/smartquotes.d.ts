declare module "smartquotes" {
    function smartquotes(text: string): string;
    namespace smartquotes {
        function string(text: string): string;
    }
    export = smartquotes;
} 