import { Component, createMemo } from "solid-js";
import Nothing from "./Nothing";
import { entryCache } from "../App";
import { idFromEntry } from "../lib/words";

const EntryPage: Component<{id: string}> = ({ id }) => {
    const entry = createMemo(() => entryCache().find(e=>idFromEntry(e)===id));
    if (!entry()) return <Nothing />;
    return (<>hi im an entry for the word {entry()!.literal} (<span class="font-lumaha">{entry()!.literal}</span>)</>);
}

export default EntryPage;