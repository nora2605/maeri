import JOHN from "johnjs";
import { DictionaryEntry, idFromEntry } from "./src/lib/words";

Bun.serve({
    port: 3001,
    async fetch(req) {
        let obj = await req.json() as DictionaryEntry;
        let dict = JOHN.parse(await Bun.file("public/dict.john").text()) as DictionaryEntry[];
        let ioe = dict.findIndex(e=>idFromEntry(e)===idFromEntry(obj));
        if (ioe >= 0) {
            dict.splice(ioe, 1);
        }
        dict.push(obj);
        await Bun.write("public/dict.john", JOHN.stringify(dict));
        return new Response("OK", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
});