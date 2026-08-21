export interface DictionaryEntry {
    literal: string,
    syllables: number[],
    wordType: WordType,
    ipa: string,
    definitions: string[],
    examples: [string, string][],
    flexations: string[],
}

export const WORD_TYPES = <const> [
    "Noun",
    "Verb",
    "Adjective",
    "Adverb",
    "Conjunction",
    "Pronoun",
    "Exclamation",
    "Affix",
    "Onomatopoeia",
    "Operator",
    "Preposition"
];
export type WordType = typeof WORD_TYPES[number];

export function idFromEntry(entry: DictionaryEntry): string {
    return `${entry.literal.toLowerCase()}-${entry.wordType.toLowerCase()}`;
}

export function generateDictionaryEntry(literal: string, wordType: WordType): DictionaryEntry {
    let ipa = generateIPAFromLiteral(literal);
    let flexations = generateFlexations(literal, wordType);

    return {
        literal,
        wordType,
        syllables: [],
        ipa,
        definitions: [],
        examples: [],
        flexations
    };
}

function generateIPAFromLiteral(literal: string): string {
    if (literal === "") return "";
    let sounds: string[] = ["ˈ"]; // assume initial stress
    let ipaDict = new Map([
        ["r", "ʀ"],
        ["š", "ʃ"],
        ["ž", "ʒ"],
        ["ň", "ŋ"]
    ]);
    let longV = ["a", "e", "i", "o", "u", "ø", "y"];
    let shortV = ["a", "ɜ", "ɪ", "ɒ", "ʊ", "ɶ", "ʏ"];
    let lastWasV = false;
    let bound = false;
    let V = (c: string) => ["a", "e", "i", "o", "u", "ö", "ü"].indexOf(c);
    let makeDiphthong = (a: string, b: string) =>
        a == "a" ? (["e", "o", "u"].includes(b)) :
        a == "e" ? b == "i" :
        a == "ö" ? (["i", "ü"].includes(b)) :
        a == "o" ? (["i", "u"].includes(b)) :
        a == "ü" ? b == "i" :
        a == "u" ? (["a", "e", "o", "ö"].includes(b)) : false;

    for (let i = 0; i < literal.length; i++) {
        let c = literal[i]!;
        if (c == 'h' && i + 1 < literal.length && literal[i+1] == 'j') {
            sounds.push("ç");
            lastWasV = false;
            bound = false;
            i++;
            continue;
        }
        if (V(c) >= 0) {
            if (lastWasV) {
                if (makeDiphthong(literal[i-1], c) && !bound) {
                    sounds.push("͜");
                    bound = true;
                }
                else { 
                    sounds.push("ʔ");
                    bound = false;
                }
            }
            sounds.push(longV[V(c)]!)
            lastWasV = true;
        }
        else {
            if (ipaDict.has(c)) sounds.push(ipaDict.get(c)!);
            else sounds.push(c);
            lastWasV = false;
            bound = false;
        }
    }
    return sounds.join("");
}

export function IdxToLit(literal: string, s: number[]) {
    let out = "";
    let lastIndex = 0;
    s.forEach(index => {
        out += literal.substring(lastIndex, index) + "|";
        lastIndex = index;
    })
    out += literal.substring(lastIndex);
    return out;
};

export function LitToIdx(text: string) {
    let o = 0;
    let is: number[] = [];
    text.split("").forEach((c,i) => {
        if (c == '|') is.push(i - (o++));
    });
    return is;
};

function generateFlexations(literal: string, wordType: WordType): string[] {
    return wordType === "Noun" || wordType === "Pronoun" ? generateDeclensions(literal) :
        wordType === "Verb" ? generateConjugations(literal) :
        wordType === "Adjective" ? generateRaises(literal) : [];
}

function generateDeclensions(literal: string) {
    if (literal === "") return [];
    let isV = (c: string) => ["a", "e", "i", "o", "u", "ö", "ü"].includes(c);
    let ewv = isV(literal[literal.length - 1]);
    let ewi = literal[literal.length - 1] === "i";
    let stem = ewi ? literal.slice(0,-1) : literal;
    return [
        stem + (ewv ? ewi ? "i" : "" : "a") + "ň",
        literal,
        stem + "en",
        stem + "maň",
        stem + (ewv ? ewi ? "i" : "" : "ü") + "m",
        stem + "men",
        stem + (ewv ? ewi ? "i" : "" : "a") + "rň",
        stem + (ewv ? ewi ? "i" : "" : "a") + "rn",
        stem + "ren",
        stem + "šaň",
        stem + "ša",
        stem + "šaen",
        stem + (ewv ? ewi ? "i" : "" : "a") + "ňši",
        stem + "ši",
        stem + "enši"
    ];
}

function generateConjugations(literal: string) {
    if (literal.length <= 2) return [];
    let stem = literal.slice(0, -2);
    return [
        stem + "irei",
        stem + "imurei",
        stem + "iru",
        stem + "imuru",
        stem + "oiru",
        stem + "irae",
        stem + "imurae",
        stem + "in",
        stem + "imurin",
        stem + "oi",
        stem + "itei",
        stem + "imurtei",
        stem + "itum",
        stem + "imurtum",
        stem + "oitu",
        stem + "itae",
        stem + "imurtae"
    ];
}

function generateRaises(literal: string) {
    if (literal === "") return ["", "", "", ""];
    return [
        literal,
        literal + "gua",
        literal + "hia",
        literal + "ňa"
    ];
}