export interface Guide {
    title: string;
    content: Array<string | {
        phrase: string;
        translation: string;
    }>;
}
