import { Component, createMemo, createSignal, For } from "solid-js";
import { DictionaryEntry, IdxToLit, WORD_TYPES, WordType, idFromEntry } from "../lib/words";
import Listen from "../components/Listen";
import entries from "../assets/dict.json";

const EntryCompact: Component<{ entry: DictionaryEntry }> = (props) => {
  const { literal, ipa, wordType, syllables, definitions } = props.entry;
  return (
    <a class="w-full sm:w-auto" href={`entry/${idFromEntry(props.entry)}`}>
      <div class={`border rounded-box w-full p-2 ${getWTClass(wordType)}`}>
        <div class="grid grid-cols-3 sm:flex sm:flex-row sm:justify-start items-baseline sm:space-x-3 *:whitespace-nowrap">
          <h2 class="text-base sm:text-xl text-neutral">{literal}</h2>
          <p class="text-xs text-neutral-600 sm:text-base">{IdxToLit(literal, syllables)}</p>
          <p class="text-xs text-neutral-600 sm:text-base place-self-end sm:place-self-auto">/{ipa}/ <Listen sound={`word/${literal}`} /></p>
          <p class="text-xs text-neutral-600 sm:text-base font-lumaha">{literal}</p>
          <p class="text-xs text-neutral-600 sm:text-base col-span-2 sm:grow text-right">{wordType}</p>
        </div>
        <label class="label">Definitions</label>
        <ol class="list">
          <For each={definitions}>{(d, i) => <li class="list-row p-2"><span class="tabular-nums">{i()+1}.</span>{d}</li>}</For>
        </ol>
      </div>
    </a>
  );
}

const Lexicon: Component = () => {
  let [query, setQuery] = createSignal("");
  let [wordTypeFilter, setWordTypeFilter] = createSignal("All" as ("All" | WordType));

  function any<T>(iter: T[], pred: (_:T)=>boolean) {
    let a = false;
    for (let i = 0; i < iter.length; i++) {
      if (pred(iter[i])) { 
        a = true;
        break;
      }
    }
    return a;
  }
  let filtered = createMemo(() => {
    return entries.filter((e) =>
      e.literal.includes(query()) ||
      any(e.definitions, d => d.includes(query())) ||
      any(e.flexations, f => f.includes(query()))
    ).filter((e) => 
      wordTypeFilter() === "All" || e.wordType === wordTypeFilter()
    ).toSorted((a, b) => a.literal.localeCompare(b.literal))
  });

  return (
    <div class="flex flex-col justify-start">
      <div class="flex flex-row items-center">
        <label class="input w-full sm:w-max m-1">
          <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search..." value={query()} onInput={e=>setQuery(e.target.value)} />
        </label>
        <select
          class="select"
          onInput={(e) => setWordTypeFilter(e.target.value as ("All" | WordType))}
        >
          <option>All</option>
          <For each={WORD_TYPES}>{(e) => <option>{e}</option>}</For>
        </select>
      </div>
      <div class="flex flex-wrap *:m-1">
        <For each={filtered()}>{e => <EntryCompact entry={e as DictionaryEntry} />}</For>
      </div>
    </div>
  );
}

export function getWTClass(wordType: WordType): string {
  switch (wordType) {
    case "Noun":
      return "bg-red-100 border-red-200";
    case "Verb":
      return "bg-blue-100 border-blue-200";
    case "Adjective":
      return "bg-green-100 border-green-200";
    case "Adverb":
      return "bg-yellow-100 border-yellow-200";
    case "Conjunction":
    case "Operator":
    case "Preposition":
      return "bg-orange-100 border-orange-200";
    case "Pronoun":
      return "bg-purple-100 border-purple-200";
    case "Affix":
      return "bg-pink-100 border-pink-200";
    case "Exclamation":
    case "Onomatopoeia":
      return "bg-teal-100 border-teal-200";
  }
}

export default Lexicon;