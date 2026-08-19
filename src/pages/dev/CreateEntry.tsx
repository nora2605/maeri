import { Component, createEffect, Repeat, For, SourceAccessor, Setter } from "solid-js";
import { DictionaryEntry, generateDictionaryEntry, idFromEntry, IdxToLit, LitToIdx, WORD_TYPES, type WordType } from "../../lib/words";
import { createSignal } from "solid-js";
import { getWTClass } from "../Lexicon";
import { dynamic } from "@solidjs/web";
import { entryCache } from "../../App";
import JOHN from "johnjs";

const TableInput: Component<{getter: SourceAccessor<string[]>, index: number}> = (props) => {
  return <input type="text" class="input input-sm" value={props.getter()[props.index]} onInput={e=>props.getter()[props.index]=e.target.value} />
}

const DeclensionTable: Component<{getter: SourceAccessor<string[]>}> = (props) => {
  return (
    <table class="table col-span-2 table-xs">
      <thead><tr><th></th><th>Nemular</th><th>Singular</th><th>Plural</th></tr></thead>
      <tbody>
        <tr><th>Nominative</th>
          <td><TableInput getter={props.getter} index={0} /></td>
          <td><TableInput getter={props.getter} index={1} /></td>
          <td><TableInput getter={props.getter} index={2} /></td>
        </tr>
        <tr><th>Accusative</th>
          <td><TableInput getter={props.getter} index={3} /></td>
          <td><TableInput getter={props.getter} index={4} /></td>
          <td><TableInput getter={props.getter} index={5} /></td>
        </tr>
        <tr><th>Dative</th>
          <td><TableInput getter={props.getter} index={6} /></td>
          <td><TableInput getter={props.getter} index={7} /></td>
          <td><TableInput getter={props.getter} index={8} /></td>
        </tr>
        <tr><th>Themative</th>
          <td><TableInput getter={props.getter} index={9} /></td>
          <td><TableInput getter={props.getter} index={10} /></td>
          <td><TableInput getter={props.getter} index={11} /></td>
        </tr>
        <tr><th>Possessive</th>
          <td><TableInput getter={props.getter} index={12} /></td>
          <td><TableInput getter={props.getter} index={13} /></td>
          <td><TableInput getter={props.getter} index={14} /></td>
        </tr>
      </tbody>
    </table>
  );
}

const ConjugationTable: Component<{getter: SourceAccessor<string[]>}> = (props) => {
  return (<table class="table col-span-2 table-xs">
      <thead><tr><th></th><th>Indicative</th><th>Hypothetive</th><th>Imperative</th></tr></thead>
      <tbody>
        <tr><th>Post-Future</th>
          <td><TableInput getter={props.getter} index={0} /></td>
          <td><TableInput getter={props.getter} index={1} /></td>
          <td></td>
        </tr>
        <tr><th>Future</th>
          <td><TableInput getter={props.getter} index={2} /></td>
          <td><TableInput getter={props.getter} index={3} /></td>
          <td><TableInput getter={props.getter} index={4} /></td>
        </tr>
        <tr><th>Pre-Future</th>
          <td><TableInput getter={props.getter} index={5} /></td>
          <td><TableInput getter={props.getter} index={6} /></td>
          <td></td>
        </tr>
        <tr><th>Present</th>
          <td><TableInput getter={props.getter} index={7} /></td>
          <td><TableInput getter={props.getter} index={8} /></td>
          <td><TableInput getter={props.getter} index={9} /></td>
        </tr>
        <tr><th>Post-Past</th>
          <td><TableInput getter={props.getter} index={10} /></td>
          <td><TableInput getter={props.getter} index={11} /></td>
          <td></td>
        </tr>
        <tr><th>Past</th>
          <td><TableInput getter={props.getter} index={12} /></td>
          <td><TableInput getter={props.getter} index={13} /></td>
          <td><TableInput getter={props.getter} index={14} /></td>
        </tr>
        <tr><th>Pre-Past</th>
          <td><TableInput getter={props.getter} index={15} /></td>
          <td><TableInput getter={props.getter} index={16} /></td>
          <td></td>
        </tr>
      </tbody>
    </table>);
};

const ComparisonTable: Component<{getter: SourceAccessor<string[]>}> = (props) => {
  return (<table class="table col-span-2 table-xs">
      <tbody>
        <tr>
          <th>Positive</th>
          <td><TableInput getter={props.getter} index={0} /></td>
        </tr>
        <tr>
          <th>Comparative</th>
          <td><TableInput getter={props.getter} index={1} /></td>
        </tr>
        <tr>
          <th>Superlative</th>
          <td><TableInput getter={props.getter} index={2} /></td>
        </tr>
        <tr>
          <th>Negative</th>
          <td><TableInput getter={props.getter} index={3} /></td>
        </tr>
      </tbody>
    </table>);
};

const CreateEntry: Component = () => {
  let [literal, setLiteral] = createSignal("");
  let [wordType, setWordType] = createSignal<WordType>("Noun");
  let [definitions, setDefinitions] = createSignal([""]);
  let [examples, setExamples] = createSignal([] as [string, string][]);
  let [flexations, setFlexations] = createSignal([] as string[]);
  let FlexationTable = dynamic(() => wordType() === "Noun" || wordType() === "Pronoun" ? DeclensionTable : wordType() === "Verb" ? ConjugationTable : wordType() === "Adjective" ? ComparisonTable : (() => <></>));

  let ipaInput!: HTMLInputElement;
  let syllableInput!: HTMLInputElement;

  createEffect(() => {
    let foundEntry = entryCache().find(e=>idFromEntry(e)===`${literal().toLowerCase()}-${wordType().toLowerCase()}`);
    return foundEntry ? {found: true, entry: foundEntry} : {found: false, entry: generateDictionaryEntry(literal(), wordType())};
  }, (e) => {
    let { found, entry } = e;
    ipaInput.value = entry.ipa;
    syllableInput.value = found ? IdxToLit(entry.literal, entry.syllables) : entry.literal;
    setFlexations(entry.flexations);
    if (found) {
      setDefinitions(entry.definitions);
      setExamples(entry.examples);
    }
    else {
      setDefinitions([""]);
      setExamples([]);
    }
  })

  const submitNewEntry = () => {
    let entry = {
      literal: literal(),
      wordType: wordType(),
      definitions: definitions(),
      syllables: LitToIdx(syllableInput.value),
      ipa: ipaInput.value,
      examples: examples(),
      flexations: flexations()
    } satisfies DictionaryEntry;
    let _=fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify(entry),
    })
  };

  return (
    <div class="w-full h-full flex flex-col justify-start items-center">
      <fieldset
        class={`fieldset rounded-box p-4 border ${getWTClass(wordType())}`}
      >
        <legend class="fieldset-legend">New Entry</legend>
        <div class="grid grid-cols-2 *:m-1">
          <div class="flex flex-col">
            <label class="label">Literal</label>
            <input type="text" class="input" placeholder="Literal" value={literal()} onInput={(e) => setLiteral(e.target.value)} />
          </div>
          <div class="flex flex-col">
            <label class="label">Word Type</label>
            <select
              class="select"
              onInput={(e) => setWordType(e.target.value as WordType)}
            >
              <For each={WORD_TYPES}>{(e) => <option>{e}</option>}</For>
            </select>
          </div>
          <div class="flex flex-col">
            <label class="label">IPA Transcription</label>
            <input type="text" class="input" ref={ipaInput} placeholder="IPA" />
          </div>
          <div class="flex flex-col">
            <label class="label">Syllables</label>
            <input type="text" class="input" ref={syllableInput} placeholder="Syllable Division" />
          </div>
          <div class="col-span-2 flex flex-col">
            <label class="label">Definitions</label>
            <Repeat count={definitions().length}>
              {(i) => (
                <input
                  type="text"
                  class="input w-full mb-1"
                  value={definitions()[i]}
                  onInput={(e) => (definitions()[i] = e.target.value)}
                  placeholder={`Definition ${i + 1}`}
                />
              )}
            </Repeat>
            <div class="flex flex-row justify-between">
              <button class="btn bg-white inline-block self-start" onClick={(e) => setDefinitions((v) => [...v, ""])} >
                Add
              </button>
              <button class="btn bg-white inline-block self-end" onClick={(e) => setDefinitions((v) => v.slice(0, -1))} >
                Remove
              </button>
            </div>
          </div>
          <div class="col-span-2 flex flex-col">
            <label class="label">Examples</label>
            <Repeat count={examples().length}>
              {(i) => (
                <div class="flex flex-row justify-between mb-1 space-x-2">
                  <input type="text" class="input w-full" value={examples()[i][0]} onInput={(e) => (examples()[i][0] = e.target.value)} placeholder={`Example ${i + 1}`} />
                  <input type="text" class="input w-full" value={examples()[i][1]} onInput={(e) => (examples()[i][1] = e.target.value)} placeholder={`Example Translation ${i + 1}`} />
                </div>
              )}
            </Repeat>
            <div class="flex flex-row justify-between">
              <button class="btn bg-white inline-block self-start" onClick={(e) => setExamples((v) => [...v, ["", ""]])} >
                Add
              </button>
              <button class="btn bg-white inline-block self-end" onClick={(e) => setExamples((v) => v.slice(0, -1))} >
                Remove
              </button>
            </div>
          </div>
          <FlexationTable getter={flexations} />
          <button class="btn btn-neutral" onClick={(e) => submitNewEntry()}>
            Add
          </button>
          <button
            class="btn btn-soft"
            onClick={(e) => {
              setLiteral("");
            }}
          >
            Clear
          </button>
        </div>
      </fieldset>
    </div>
  );
}

export default CreateEntry;