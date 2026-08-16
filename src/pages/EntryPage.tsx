import { Component } from "solid-js";
import { getEntry } from "../lib/io";
import Nothing from "./Nothing";

const EntryPage: Component<{id: string}> = ({ id }) => {
    const entry = getEntry(id);
    if (!entry) return <Nothing />;
    return (<>hi im an entry for the word {entry.literal} (<span class="font-lumaha">{entry.literal}</span>)</>);
}

export default EntryPage;