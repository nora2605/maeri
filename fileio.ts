import { DictionaryEntry, idFromEntry } from "./src/lib/words";

Bun.serve({
    port: 3001,
    async fetch(req) {
        if (req.method === "OPTIONS")
            return new Response("", { headers: {
                "Allow": "OPTIONS, PATCH",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS, PATCH",
                "Access-Control-Allow-Headers": "Content-Type"
            }, status: 200});
        let obj = await req.json() as DictionaryEntry;
        let dict = await Bun.file("src/assets/dict.json").json() as DictionaryEntry[];
        let ioe = dict.findIndex(e=>idFromEntry(e)===idFromEntry(obj));
        if (ioe >= 0) {
            dict.splice(ioe, 1);
        }
        dict.push(obj);
        await Bun.write("src/assets/dict.json", JSON.stringify(dict, undefined, 2));
        console.log(`Created/Edited Entry: ${obj.literal}`);
        return new Response("", { status: 200 });
    }
});