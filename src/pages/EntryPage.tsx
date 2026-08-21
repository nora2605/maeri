import { Component, createMemo, For, Loading, Show } from "solid-js";
import Nothing from "./Nothing";
import { entryCache } from "../App";
import { idFromEntry, IdxToLit } from "../lib/words";
import { getWTClass } from "./Lexicon";
import Listen from "../components/Listen";
import { dynamic } from "@solidjs/web";

const DeclensionTable: Component<{flexations: string[]}> = (props) => {
  return (
    <table class="table table-sm w-max">
      <thead><tr><th></th><th>Nemular</th><th>Singular</th><th>Plural</th></tr></thead>
      <tbody>
        <tr><th>Nominative</th>
          <td>{props.flexations[0]}</td>
          <td>{props.flexations[1]}</td>
          <td>{props.flexations[2]}</td>
        </tr>
        <tr><th>Accusative</th>
          <td>{props.flexations[3]}</td>
          <td>{props.flexations[4]}</td>
          <td>{props.flexations[5]}</td>
        </tr>
        <tr><th>Dative</th>
          <td>{props.flexations[6]}</td>
          <td>{props.flexations[7]}</td>
          <td>{props.flexations[8]}</td>
        </tr>
        <tr><th>Themative</th>
          <td>{props.flexations[9]}</td>
          <td>{props.flexations[10]}</td>
          <td>{props.flexations[11]}</td>
        </tr>
        <tr><th>Possessive</th>
          <td>{props.flexations[12]}</td>
          <td>{props.flexations[13]}</td>
          <td>{props.flexations[14]}</td>
        </tr>
      </tbody>
    </table>
  );
}

const ConjugationTable: Component<{flexations: string[]}> = (props) => {
  return (<table class="table table-sm w-max">
      <thead><tr><th></th><th>Indicative</th><th>Hypothetive</th><th>Imperative</th></tr></thead>
      <tbody>
        <tr><th>Post-Future</th>
          <td>{props.flexations[0]}</td>
          <td>{props.flexations[1]}</td>
          <td></td>
        </tr>
        <tr><th>Future</th>
          <td>{props.flexations[2]}</td>
          <td>{props.flexations[3]}</td>
          <td>{props.flexations[4]}</td>
        </tr>
        <tr><th>Pre-Future</th>
          <td>{props.flexations[5]}</td>
          <td>{props.flexations[6]}</td>
          <td></td>
        </tr>
        <tr><th>Present</th>
          <td>{props.flexations[7]}</td>
          <td>{props.flexations[8]}</td>
          <td>{props.flexations[9]}</td>
        </tr>
        <tr><th>Post-Past</th>
          <td>{props.flexations[10]}</td>
          <td>{props.flexations[11]}</td>
          <td></td>
        </tr>
        <tr><th>Past</th>
          <td>{props.flexations[12]}</td>
          <td>{props.flexations[13]}</td>
          <td>{props.flexations[14]}</td>
        </tr>
        <tr><th>Pre-Past</th>
          <td>{props.flexations[15]}</td>
          <td>{props.flexations[16]}</td>
          <td></td>
        </tr>
      </tbody>
    </table>);
};

const ComparisonTable: Component<{flexations: string[]}> = (props) => {
  return (<table class="table table-sm w-max">
      <tbody>
        <tr>
          <th>Positive</th>
          <td>{props.flexations[0]}</td>
        </tr>
        <tr>
          <th>Comparative</th>
          <td>{props.flexations[1]}</td>
        </tr>
        <tr>
          <th>Superlative</th>
          <td>{props.flexations[2]}</td>
        </tr>
        <tr>
          <th>Negative</th>
          <td>{props.flexations[3]}</td>
        </tr>
      </tbody>
    </table>);
};

const EntryPage: Component<{id: string}> = ({ id }) => {
  const entry = createMemo(() => entryCache().find(e=>idFromEntry(e)===decodeURI(id)));
  const Flexations = dynamic(() => entry() &&
    (entry()!.wordType === "Noun" || entry()!.wordType === "Pronoun" ? DeclensionTable :
    entry()!.wordType === "Verb" ? ConjugationTable :
    entry()!.wordType === "Adjective" ? ComparisonTable : (() => <></>))
  );
  return (<Loading>
    <Show when={entry()} fallback={<Nothing />}>
      <div class="flex flex-row justify-center">
        <div class={`border rounded-box w-full sm:w-2/3 p-2 ${getWTClass(entry()!.wordType)}`}>
          <div class="grid grid-cols-3 sm:flex sm:flex-row sm:justify-start items-baseline sm:space-x-3 *:whitespace-nowrap">
            <h2 class="text-base sm:text-xl text-neutral">{entry()!.literal}</h2>
            <p class="text-xs text-neutral-600 sm:text-base">{IdxToLit(entry()!.literal, entry()!.syllables)}</p>
            <p class="text-xs text-neutral-600 sm:text-base place-self-end sm:place-self-auto">/{entry()!.ipa}/ <Listen sound={`word/${entry()!.literal}`} /></p>
            <p class="text-xs text-neutral-600 sm:text-base font-lumaha">{entry()!.literal}</p>
            <p class="text-xs text-neutral-600 sm:text-base col-span-2 sm:grow text-right">{entry()!.wordType}</p>
          </div>
          <label class="label">Definitions</label>
          <ol class="list">
            <For each={entry()!.definitions}>{(d, i) => <li class="list-row p-2"><span class="tabular-nums">{i()+1}.</span>{d}</li>}</For>
          </ol>
          <Show when={entry()!.examples.length>0}>
            <label class="label">Examples</label>
            <table class="table w-max">
              <For each={entry()!.examples}>{(e) => <tr class="">
                <td class="text-base align-baseline">{e[0]}</td><td class="text-neutral-600 align-baseline">{e[1]}</td>
              </tr>}</For>
            </table>
          </Show>
          <Flexations flexations={entry()!.flexations} />
        </div>
      </div>
    </Show>
  </Loading>);
}

export default EntryPage;