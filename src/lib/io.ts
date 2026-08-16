import { DictionaryEntry } from "./words";
import JOHN from "johnjs";

export function idFromEntry(entry: DictionaryEntry): string {
    return `${entry.literal.toLowerCase()}-${entry.wordType.toLowerCase()}`;
}

export function getEntry(id: string): DictionaryEntry | undefined {
    let store = localStorage.getItem("dictionary");
    if (store === null) {
        initializeStore();
        return undefined;
    }
    let dict = JOHN.parse(store) as DictionaryEntry[];
    return dict.find(e => id.toLowerCase() === idFromEntry(e));
}

export function allEntries(): DictionaryEntry[] {
    let store = localStorage.getItem("dictionary");
    if (store === null) {
        initializeStore();
        return [];
    }
    return JOHN.parse(store) as DictionaryEntry[];
}

export function writeEntry(entry: DictionaryEntry) {
    let store = localStorage.getItem("dictionary");
    if (store === null)
        initializeStore();
    let dict = JOHN.parse(store ?? "[]") as DictionaryEntry[];
    let oei = dict.findIndex(e => idFromEntry(entry) === idFromEntry(e));
    if (oei >= 0)
        dict[oei] = entry;
    else dict.push(entry);
    localStorage.setItem("dictionary", JOHN.stringify(dict));
}

export function removeEntry(id: string) {
    let store = localStorage.getItem("dictionary");
    if (store === null) {
        initializeStore();
        return;
    }
    let dict = JOHN.parse(store) as DictionaryEntry[];
    let oei = dict.findIndex(e => idFromEntry(e) === id.toLowerCase());
    dict.splice(oei, 1);
    localStorage.setItem("dictionary", JOHN.stringify(dict));
}

function initializeStore() {
    localStorage.setItem("dictionary", JOHN.stringify([]));
}