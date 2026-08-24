import { Component } from "solid-js";
import Listen from "../components/Listen";
import { Meta, Title } from "@solidjs/meta";

function CollapseH2(props: any) {
  return (<div class="collapse collapse-arrow">
    <input type="checkbox" checked />
    <h2 class="collapse-title m-0!">{props.title}</h2>
    <div class="collapse-content">
      {props.children}
    </div>
  </div>);
}
function CollapseH3(props: any) {
  return (<div class="collapse collapse-arrow">
    <input type="checkbox" checked />
    <h3 class="collapse-title m-0!">{props.title}</h3>
    <div class="collapse-content">
      {props.children}
    </div>
  </div>);
}

const Guide: Component = (props) => {
  let scriptImgModal!: HTMLDialogElement;

  return (
    <div class="flex flex-col items-center h-full">
      <Title>Maeri: Guide</Title>
      <Meta name="og:title" content="Maeri: Guide" />
      <Meta name="og:description" content="The official Getriš Conlang Documentation and Reference" />
      <article class="prose lg:prose-lg lg:min-w-3/4">
        <h1 class="text-center">
          The Getriš Language Reference Guide
        </h1>
        <CollapseH2 title="Introduction">
          <p>
            Getriš is the International language spoken on the planet Hešite (/ˈhɜʃitɜ/).
            In-universe it was made by 2 amateur conlangers commissioned by the INS (International Norming Society).
            Its script is from Northern Genezel, its vocabulary largely Volesian and the grammar mostly Dusköhn.
          </p>
          <p>
            Getriš is used in some projects such as <a href="https://nojufe.bandcamp.com/album/pedestrian-in-reinmyer">Pedestrian in Reinmyer (Album)</a> and <a href="https://modrinth.com/resourcepack/getrish">a Minecraft Translation</a>.
          </p>
          <p>
            Not in-universe the language has been slowly created and its vocabulary aggregated since 2020 by <a href="https://nojufe.de/" target="_blank">Nojufe</a>.
          </p>
          <p>
            This guide may assume familiarity with the <a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet" target="_blank">IPA</a>.
          </p>
          <h3>Legend</h3>
          <p>Colors represent word types:</p>
          <ul class="*:p-1 *:rounded-md">
            <li class="bg-red-100">Noun</li>
            <li class="bg-blue-100">Verb</li>
            <li class="bg-green-100">Adjective</li>
            <li class="bg-purple-100">Pronoun</li>
            <li class="bg-yellow-100">Adverb</li>
            <li class="bg-orange-100">Conjunction, Preposition or Operator</li>
            <li class="bg-pink-100">Affix</li>
            <li class="bg-teal-100">Exclamation, Interjection, Onomatopoeia</li>
          </ul>
        </CollapseH2>
        <CollapseH2 title="Basic Concepts">
          <CollapseH3 title="Orthography and Pronounciation">
            <p>
              In-universe, Getriš is written in the Lumaha Script. In this guide and dictionary, the Standard Romanization is used.
              Here is a table with every glyph, its romanization and pronounciation. Notice:
            </p>
            <ul>
              <li>Consonants are pronounced /Xaː/, /aˈXaː/ in the recordings.</li>
              <li>Vowels are pronounced in their long and short variants (allophones) in the recordings.</li>
            </ul>
            <div class="lg:max-h-150 w-full overflow-scroll flex flex-col items-center">
              <table class="table table-zebra lg:w-2/3 border border-base-300">
                <thead>
                  <tr><th></th><th>Lumaha</th><th>Romanized</th><th>IPA</th><th>Listen</th></tr>
                </thead>
                <tbody class="*:*:first-of-type:[td]:font-[LumahaSegment] text-nowrap">
                  <tr><th></th><td>p</td><td>p</td><td>/p/</td><td><Listen sound="p" /></td></tr>
                  <tr><th></th><td>b</td><td>b</td><td>/b/</td><td><Listen sound="b" /></td></tr>
                  <tr><th></th><td>t</td><td>t</td><td>/t/</td><td><Listen sound="t" /></td></tr>
                  <tr><th></th><td>d</td><td>d</td><td>/d/</td><td><Listen sound="d" /></td></tr>
                  <tr><th></th><td>k</td><td>k</td><td>/k/</td><td><Listen sound="k" /></td></tr>
                  <tr><th></th><td>g</td><td>g</td><td>/g/</td><td><Listen sound="g" /></td></tr>
                  <tr><th></th><td>f</td><td>f</td><td>/f/</td><td><Listen sound="f" /></td></tr>
                  <tr><th></th><td>v</td><td>v</td><td>/v/</td><td><Listen sound="v" /></td></tr>
                  <tr><th></th><td>s</td><td>s</td><td>/s/</td><td><Listen sound="s" /></td></tr>
                  <tr><th></th><td>z</td><td>z</td><td>/z/</td><td><Listen sound="z" /></td></tr>
                  <tr><th></th><td>š</td><td>š</td><td>/ʃ/</td><td><Listen sound="š" /></td></tr>
                  <tr><th></th><td>ž</td><td>ž</td><td>/ʒ/</td><td><Listen sound="ž" /></td></tr>
                  <tr><th></th><td>č</td><td>tš</td><td>/t͜ʃ/</td><td><Listen sound="tš" /></td></tr>
                  <tr><th></th><td>x</td><td>dž</td><td>/d͜ʒ/</td><td><Listen sound="dž" /></td></tr>
                  <tr><th></th><td>ç</td><td>hj</td><td>/ç/</td><td><Listen sound="hj" /></td></tr>
                  <tr><th></th><td>h</td><td>h</td><td>/h/</td><td><Listen sound="h" /></td></tr>
                  <tr><th></th><td>m</td><td>m</td><td>/m/</td><td><Listen sound="m" /></td></tr>
                  <tr><th></th><td>n</td><td>n</td><td>/n/</td><td><Listen sound="n" /></td></tr>
                  <tr><th></th><td>ň</td><td>ň</td><td>/ŋ/</td><td><Listen sound="ň" /></td></tr>
                  <tr><th></th><td>j</td><td>j</td><td>/j/</td><td><Listen sound="j" /></td></tr>
                  <tr><th></th><td>l</td><td>l</td><td>/l/</td><td><Listen sound="l" /></td></tr>
                  <tr><th></th><td>r</td><td>r</td><td>/ʀ/</td><td><Listen sound="r" /></td></tr>
                  <tr><th></th><td>a</td><td>a</td><td>/a/</td><td><Listen sound="a" /></td></tr>
                  <tr><th></th><td>e</td><td>e</td><td>/e~ɜ/</td><td><Listen sound="e" /></td></tr>
                  <tr><th></th><td>i</td><td>i</td><td>/i~ɪ/</td><td><Listen sound="i" /></td></tr>
                  <tr><th></th><td>o</td><td>o</td><td>/o~ɔ/</td><td><Listen sound="o" /></td></tr>
                  <tr><th></th><td>u</td><td>u</td><td>/u~ʊ/</td><td><Listen sound="u" /></td></tr>
                  <tr><th></th><td>ö</td><td>ö</td><td>/ø~œ/</td><td><Listen sound="ö" /></td></tr>
                  <tr><th></th><td>ü</td><td>ü</td><td>/y~ʏ/</td><td><Listen sound="ü" /></td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The Lumaha script, when handwritten, has the letters of each word directly touching.
              A space between words is therefore when the letters do not touch. The handwritten glyphs look approximately like this (click on the image for a larger preview):
            </p>
            <div class="flex flex-col items-center w-full">
              <button type="button" class="p-4 bg-base-300 max-w-80 xl:max-w-120 h-min btn" onClick={e=>{scriptImgModal.showModal(); e.preventDefault()}}>
                <img class="object-contain" src="/script.webp" />
              </button>
            </div>
            <dialog ref={scriptImgModal} class="modal">
              <div class="modal-box max-w-screen lg:max-w-2/3">
                <img class="object-contain" src="/script.webp" />
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <p>
              If you don't have access to š, ž, ň, ö and/or ü, you can use these <i>unambiguous</i> alternatives
              before resorting to crimes against humanity:
            </p>
            <ul>
              <li><b>š</b>: sch</li>
              <li><b>ž</b>: zh</li>
              <li><b>ň</b>: nq</li>
              <li><b>ö</b>: oy</li>
              <li><b>ü</b>: uy</li>
            </ul>
            <p>
              Getriš words are stressed usually on the first syllable.
              An exception to this is when there is a glottal stop (/ʔ/) at the start of the second syllable,
              in which case the second syllable is stressed instead.
            </p>
            <p>
              Glottal stops are inserted inbetween same vowels, and some vowel pairs that do not form diphthongs.
              For example, aa is pronounced /aʔa/.
              The following vowel combinations form diphthongs:
            </p>
            <ul>
              <li>ae (/a͜e/)</li>
              <li>ao (/a͜o/)</li>
              <li>au (/a͜u/)</li>
              <li>ei (/ɜ͜ɪ/)</li>
              <li>oi (/ɔ͜ɪ/)</li>
              <li>ou (/o͜u/)</li>
              <li>ua (/wa/)</li>
              <li>ue (/we/)</li>
              <li>uo (/wo/)</li>
              <li>uö (/wø/)</li>
              <li>uu (/wu/) (only immediately following k or g)</li>
              <li>öi (/œ͜ɪ/)</li>
              <li>öü (/œ͜ʏ/)</li>
              <li>üi (/ʏ͜ɪ/)</li>
            </ul>
            <p>
              If you have difficulty pronouncing a uvular trill (/ʀ/), you can substitute it for an alveolar flap (/ɾ/) or alveolar trill (/r/), or even a velar fricative (/x/).
            </p>
          </CollapseH3>
          <CollapseH3 title="Basic Syntax">
            <p>
              Basic sentences are formed in the order VSO (Verb-Subject-Object).
              <br/>
              Take the verb <span class="bg-blue-100">marin</span>: (to) read,
              <br/>
              the pronoun <span class="bg-purple-100">pi</span>: I
              <br/>
              and the noun <span class="bg-red-100">maeri</span>: book
            </p>
            <p>
              <span class="bg-blue-100">marin</span> <span class="bg-purple-100">pi</span> <span class="bg-red-100">maeri</span>
            </p>
            <p>
              This sentence can then be translated as: I read a book.
            </p>
            <p>
              Adjectives (and possessives) are placed in front of the term they are referring to:
              <br/>
              Take the adjective <span class="bg-green-100">luka</span>: good
              <br/>
              and the noun <span class="bg-red-100">maeri</span>: book
            </p>
            <p>
              <span class="bg-green-100">luka</span> <span class="bg-red-100">maeri</span>
            </p>
            <p>
              This term means: good book.
            </p>
            <p>
              If the subject is omitted, it can be inferred from context. Usually this is a personal pronoun (most commonly I), or referring to the last clause, in which case using the demonstrative pronoun <q>a</q> is more common.
            </p>
          </CollapseH3>
          <CollapseH3 title="Word Type: Noun">
            <p>
              Nouns (as well as pronouns) are optionally* declensed in Getriš.
              There are 5 cases in Getriš: Nominative, Accusative, Dative, Themative and Possessive;
              as well as 3 Numeri: Nemular, Singular and Plural.
            </p>
            <small>*nouns do not have to be declensed if there is a subject already and the verb only allows one set of object cases, where the order is unambiguous.</small>
            <p>
              Which cases should be used with which verbs is also stated in the lexicon,
              as there are exceptions. <q>(dat.: for)</q> in a definition means that a dative object should be translated as an object of the preposition <i>for</i>.
            </p>
            <p>
              Declension tables for each noun can be found in the lexicon as well, in general they follow this table:
            </p>
            <table>
              <thead>
                <tr><th></th><th>Nemular</th><th>Singular</th><th>Plural</th></tr>
              </thead>
              <tbody>
                <tr><th>Nominative</th><td>-(a)ň</td><td></td><td>-en</td></tr>
                <tr><th>Accusative</th><td>-maň</td><td>-(ü)m</td><td>-men</td></tr>
                <tr><th>Dative</th><td>-(a)rň</td><td>-(a)rn</td><td>-ren</td></tr>
                <tr><th>Themative</th><td>-šaň</td><td>-ša</td><td>-šaen</td></tr>
                <tr><th>Possessive</th><td>-(a)ňši</td><td>-ši</td><td>-enši</td></tr>
              </tbody>
            </table>
            <p>
              Vowels in parentheses are inserted if the stem doesn't end in a vowel. Nouns ending in -i omit it in most forms.
            </p>
            <h4>Nominative</h4>
            <p>
              The Nominative case is the case of nouns as they stand in the dictionary
              and is used for nouns that fulfill the role of the subject in a sentence.
              For example: in the sentence <q>I read a book</q>, <i>I</i> is the subject.
            </p>
            <h4>Accusative</h4>
            <p>
              The Accusative case is the case used for direct objects.
              For example: in the sentence <q>I read a book</q>, <i>a book</i> is the direct object.
            </p>
            <h4>Dative</h4>
            <p>
              The Dative case is the case used for indirect objects.
              For example: in the sentence <q>I give you a book</q>, <i>you</i> is the indirect object.
            </p>
            <h4>Themative</h4>
            <p>
              The Themative case is the case used for objects of the preposition <i>about</i>.
              For example: in the sentence <q>I talk about books</q>, <i>about books</i> can be translated with a themative case.
            </p>
            <p>
              This case can also be used as a stand-in for the concepts related to something, or adjectivically.
            </p>
            <h4>Possessive</h4>
            <p>
              The Possessive case is used to mark possession or affiliation.
              For example: in the sentence <q>I like my book</q>, <i>my</i> is in the possessive case.
            </p>
            <h4>Nemular</h4>
            <p>
              The Nemular Number fulfills the role of the quantifiers <i>no</i> and <i>none</i>.
              For example: in the sentence <q>I have no books</q>, <i>no books</i> can be translated as <i>book</i> in nemular number.
            </p>
            <h4>Singular</h4>
            <p>
              The Singular Number describes nouns of which there is up to a single one. In Getriš, as opposed to English,
              this includes numbers between 0 and 1.
            </p>
            <h4>Plural</h4>
            <p>
              The Plural Number is used for nouns of which there are multiple (more than 1).
            </p>
          </CollapseH3>
          <CollapseH3 title="Word Type: Pronoun">
            <p>
              There are a few types of pronoun in Getriš: Personal Pronouns, Demonstrative Pronouns and Indefinite Pronouns.
              They usually have the same declension space as nouns; indefnite pronouns do not have different numbers.
            </p>
            <p>
              The standard personal pronouns are <span class="bg-purple-100">pi</span>, <span class="bg-purple-100">ti</span> and <span class="bg-purple-100">hi</span>, for first, second and third person respectively, but there are more to choose from.
              Since Getriš isn't gendered, there are a few more third person pronouns like <span class="bg-purple-100">itou</span> or <span class="bg-purple-100">lili</span> to use, primarily in writing.
              Noun Affixes can also be used to differentiate further. There are also more first and second person pronouns, used in informal speech.
            </p>
            <p>
              The demonstrative pronouns are <span class="bg-purple-100">raei</span> (this) and <span class="bg-purple-100">džaei</span> (that).
              Their stems (<i>rae</i> and <i>džae</i>) can be used adjectivically to refer to nouns (<q>rae maeri</q> translates to <i>this book</i>). 
              <i>džaei</i> is much closer in meaning to the german <a href="https://en.wiktionary.org/wiki/jener">jener</a>
            </p>
            <p>
              The indefinite pronouns are <span class="bg-purple-100">luhie</span> (everything), 
              <span class="bg-purple-100">luhaň</span> (nothing), 
              <span class="bg-purple-100">mii</span> (something), 
              <span class="bg-purple-100">mi</span> (general <i>you</i>), 
              <span class="bg-purple-100">vi</span> (self), 
              <span class="bg-purple-100">šama</span> (both), 
              <span class="bg-purple-100">gama</span> (like <i>both</i> but for 3).
              <br/>
              Note that as opposed to English, an attribute regarding an indefinite pronoun will be placed in front: <q>something good</q> is translated as <span class="bg-green-100">luka</span> <span class="bg-purple-100">mii</span>.
            </p>
          </CollapseH3>
          <CollapseH3 title="Word Type: Verb">
            <p>
              Verbs are conjugated in Getriš. They have 3 moods: Indicative, Hypothetive (Subjunctive) and Imperative, as well as 7 tenses: Present, Past, Future, Pre-Past, Post-Past, Pre-Future and Post-Future.
              The Pre- and Post- tenses are mainly used in subclauses to signify a temporal relationship, e.g. <q>Before I read a book, I went outside.</q> would have <i>read</i> in Post-Past, and <i>went</i> in Past.
              The Indicative mood is for statements: <q>I read a book</q>, the subjunctive mood is for hypotheticals: <q>I would read a book</q> and the imperative mood is for commands: <q>Read a book!</q>. The general conjugation table is as follows:
            </p>
            <table>
              <thead>
                <tr><th></th><th>Indicative</th><th>Hypothetive</th><th>Imperative</th></tr>
              </thead>
              <tbody>
                <tr><th>Post-Future</th><td>-irei</td><td>-imurei</td><td></td></tr>
                <tr><th>Future</th><td>-iru</td><td>-imuru</td><td>-oiru</td></tr>
                <tr><th>Pre-Future</th><td>-irae</td><td>-imurae</td><td></td></tr>
                <tr><th>Present</th><td>-in</td><td>-imurin</td><td>-oi</td></tr>
                <tr><th>Post-Past</th><td>-itei</td><td>-imurtei</td><td></td></tr>
                <tr><th>Past</th><td>-itum</td><td>-imurtum</td><td>-oitum</td></tr>
                <tr><th>Pre-Past</th><td>-itae</td><td>-imurtae</td><td></td></tr>
              </tbody>
            </table>
            <p>
              The dictionary form of verbs is the present indicative.
            </p>
            <p>
              The imperative future conveys a certainty of the fulfillment of the command, e.g. <q>You will do this!</q>. The imperative past invokes regret.
            </p>
            <p>
              Verbs in Getriš can take a number of suffixes to alter their meaning; Most importantly <span class="bg-pink-100">ži</span>, the question suffix, and <span class="bg-pink-100">fe</span>, the passivity suffix. 
            </p>
          </CollapseH3>
          <CollapseH3 title="Word Type: Adjective">
            <p>
              Adjectives are modifier words that refer to nouns. They do not have agreement, but several degrees of comparison:
            </p>
            <table>
              <thead>
                <tr><th>Negative</th><th>Positive</th><th>Comparative</th><th>Superlative</th></tr>
              </thead>
              <tbody>
                <tr><td>-aňa</td><td>-a</td><td>-agua</td><td>-ahia</td></tr>
              </tbody>
            </table>
            <p>
              Their dictionary form is the positive. The negative is like adding <q>not</q> in front. 
              The comparative is used to relate 2 objects: <q>The book is better than the ball</q>. 
              The comparative construction in Getriš has the following syntax:
              <br/>
              <span class="bg-blue-100">mön</span> <span class="bg-red-100">maeri</span> <span class="bg-green-100">lukagua</span> <span class="bg-orange-100">va</span> <span class="bg-red-100">ebek</span>.
              <br/>
              Here, <span class="bg-orange-100">va</span> takes the function of <i>than</i>. In non-comparatives, it takes the function of <i>as</i> instead:
              <br/>
              <span class="bg-blue-100">mön</span> <span class="bg-red-100">maeri</span> <span class="bg-green-100">luka</span> <span class="bg-orange-100">va</span> <span class="bg-red-100">ebek</span>.
              <br/>
              would be translated as <q>The book is as good as the ball.</q>
              <br/>
            </p>
          </CollapseH3>
          <CollapseH3 title="Word Type: Adverb">
            <p>
              Adverbs are modifier words that can appear at any point in a clause, also in front of the verb.
              They add information and do not flex.
            </p>
            <p>
              Adverbs can be formed from adjectives using the conjunction <span class="bg-orange-100">ju</span> in front.
            </p>
          </CollapseH3>
          <CollapseH3 title="Basic Exclamations">
            <p>
              Words used in greetings, atomic phrases and boolean replies are classified as exclamations. They stand alone as a clause. These are the most important ones:
            </p>
            <ul>
              <li><span class="bg-teal-100">lei</span>: yes, yea</li>
              <li><span class="bg-teal-100">rin</span>: no, nay</li>
              <li><span class="bg-teal-100">hai</span>: yes (as response to negative)</li>
              <li><span class="bg-teal-100">taeho</span>: hello</li>
              <li><span class="bg-teal-100">rišo</span>: goodbye</li>
              <li><span class="bg-teal-100">ňan</span>: sorry</li>
            </ul>
          </CollapseH3>
          <CollapseH3 title="Questions">
            <p>
              In Getriš, question words are conjunctions. Conjunctions always analogously have both the meaning of <q>what</q> and <q>that</q>. When asking a single word question, the question suffix <span class="bg-pink-100">ži</span> is added to the conjunction. Otherwise the question suffix is placed after the verb (Syntax: Qw + VSO).
            </p>
            <p>
              The most common question words are:
            </p>
            <ul>
              <li><span class="bg-orange-100">konju</span>: Who/What (Nominative)</li>
              <li><span class="bg-orange-100">kon</span>: Whom/What (Accusative)</li>
              <li><span class="bg-orange-100">jegu</span>: Where (Local)</li>
              <li><span class="bg-orange-100">ju</span>: How (Modal)</li>
              <li><span class="bg-orange-100">žiku</span>: When (Temporal)</li>
              <li><span class="bg-orange-100">vahju</span>: Why (Causal)</li>
            </ul>
            <p>
              Colloquially, when not understanding something, there are alternative exclamations that can replace a grammatically correct question:
            </p>
            <ul>
              <li><span class="bg-teal-100">koi</span>: What? (informal)</li>
              <li><span class="bg-teal-100">hee</span>: What? (acoustic)</li>
              <li><span class="bg-teal-100">nui</span>: What? (semantic)</li>
            </ul>
          </CollapseH3>
          <CollapseH3 title="Word Types: Prepositions and Operators">
            <p>
              Prepositions are words that stand in front of a phrase that they refer to. Together with that phrase they form an adverbial phrase. <q>on</q>, <q>in</q> and <q>with</q> are common prepositions.
            </p>
            <p>
              Operators on the other hand stand inbetween 2 phrases and act as conjunctions, but do not form subclauses. <q>and</q>, <q>or</q> and <q>plus</q> are common operators.
            </p>
            <p>
              Opposed to german/(sometimes english?), noun phrases are not declensed after prepositions.
            </p>
          </CollapseH3>
          <CollapseH3 title="Numbers">
            <p>Getriš uses a dozenal number system (base 12). The 12 digits are</p>
            <ul>
              <li><span class="bg-green-100">rinva</span>: zero</li>
              <li><span class="bg-green-100">loiva</span>: one</li>
              <li><span class="bg-green-100">šiva</span>: two</li>
              <li><span class="bg-green-100">gaja</span>: three</li>
              <li><span class="bg-green-100">teira</span>: four</li>
              <li><span class="bg-green-100">prima</span>: five</li>
              <li><span class="bg-green-100">kala</span>: six</li>
              <li><span class="bg-green-100">žoula</span>: seven</li>
              <li><span class="bg-green-100">dama</span>: eight</li>
              <li><span class="bg-green-100">zula</span>: nine</li>
              <li><span class="bg-green-100">tensja</span>: ten</li>
              <li><span class="bg-green-100">parta</span>: eleven</li>
            </ul>
            <p>The number twelve is translated as <span class="bg-green-100">riefa</span>, after which numbers are formed concatenatively:</p>
            <ul>
              <li><span class="bg-green-100">riefloiva</span>: thirteen</li>
              <li><span class="bg-green-100">riefšiva</span>: fourteen</li>
              <li>...</li>
            </ul>
            <p>Until 24, which is translated as <span class="bg-green-100">šivöa</span>. The ö infix is equivalent to the -ty suffix in english. Leaving out the -a adjective ending and continuing concatenatively as before yields the next 120 numbers.</p>
            <ul>
              <li><span class="bg-green-100">šivöloiva</span>: twenty-five</li>
              <li>...</li>
            </ul>
            <p>144 is translated as <span class="bg-green-100">tarita</span>, 1728 as <span class="bg-green-100">garita</span>, 20736 as <span class="bg-green-100">parita</span> and 248832 as <span class="bg-green-100">tagarita</span></p>
            <p>To form numbers in this range take ever digit individually (1s are omitted): 123456 (base 12) is <span class="bg-green-100">tagaritšivparitgajgaritteirtaritprimökala</span></p>
            <p>The numbers 12^6 to 12^39 are, in 12^3 (3-digit group) distance, formed by taking the onset of the digit and appending the suffix <q>-uina</q>. 12^39 though is <span class="bg-green-100">rieina</span>, after which 12^42 is <span class="bg-green-100">riefluina</span>. No one wants to continue this pattern beyond its current definition.</p>
            <p>To give a final example, here is the number 123456789AB0: <span class="bg-green-100">taritšivögajšuina-teirtaritprimökalluina-žoultagaritdamparitzulgarit-tensjtaritpartöa</span> (hyphens for small screens)</p>
            <p>Usually these clusters don't only look bad, but are also hard to pronounce. So the adjective -a ending is free to be inserted anywhere.</p>
            <p>Numbers act as adjectives grammatically. If they should act as a noun (if referring to digits as a thing for example), replace the final a with i.</p>
            <p>To make the inverse of a number, use <span class="bg-pink-100">ur</span> as suffix instead of <span class="bg-pink-100">a</span></p>
            <p>To say rational numbers/fractions, say (numerator) (inverse of denominator)-en, e.g. <span class="bg-red-100">gaja primuren</span> is three fifths.</p>
            <p>To make the negative of a number, say rim (number), e.g. <span class="bg-green-100">rim zula</span> is -9</p>
            <p>To use a number as an ordinal instead of a cardinal, place it after the noun it refers to, e.g. <span class="bg-red-100">sepe</span> <span class="bg-green-100">prima</span> is <q>the fifth car</q> (Since this is technically ambiguous, in writing the numeral is underlined and in speech there is a pause after)</p>
            <p>SI-prefixes are replaced by unit suffixes instead; 10 kilograms would be syntatically replaced by 10 gram-kilos.</p>
            <table class="table-xs table">
              <thead>
                <tr><th>SI-Prefix</th><th>Unit Suffix</th><th>Exponent</th></tr>
              </thead>
              <tbody>
                <tr><td>yocto</td><td>areaea</td><td>-24</td></tr>
                <tr><td>zepto</td><td>araaea</td><td>-21</td></tr>
                <tr><td>atto</td><td>limina</td><td>-18</td></tr>
                <tr><td>femto</td><td>giga</td><td>-15</td></tr>
                <tr><td>pico</td><td>pjua</td><td>-12</td></tr>
                <tr><td>nano</td><td>tikea</td><td>-9</td></tr>
                <tr><td>micro</td><td>suria</td><td>-6</td></tr>
                <tr><td>milli</td><td>nija</td><td>-3</td></tr>
                <tr><td>centi</td><td>hana</td><td>-2</td></tr>
                <tr><td>deci</td><td>küka</td><td>-1</td></tr>
                <tr><td>deca</td><td>kümento</td><td>1</td></tr>
                <tr><td>hecto</td><td>pieno</td><td>2</td></tr>
                <tr><td>kilo</td><td>iso</td><td>3</td></tr>
                <tr><td>mega</td><td>jaiso</td><td>6</td></tr>
                <tr><td>giga</td><td>tiko</td><td>9</td></tr>
                <tr><td>tera</td><td>geo</td><td>12</td></tr>
                <tr><td>peta</td><td>eko</td><td>15</td></tr>
                <tr><td>exa</td><td>šoro</td><td>18</td></tr>
                <tr><td>zetta</td><td>orooio</td><td>21</td></tr>
                <tr><td>yotta</td><td>orioio</td><td>24</td></tr>
              </tbody>
            </table>
          </CollapseH3>
        </CollapseH2>
        <CollapseH2 title="Advanced Concepts">
          <CollapseH3 title="Adverbial Constructions and Subclauses">
            <h4>Adverbial Constructions</h4>
            <p>
              Adverbial constructions are composed of a conjunction or preposition and a noun phrase.
              In a sentence they take the role of an adverbial phrase.
              For example:
              <br/>
              <span class="bg-yellow-100">lüpal</span> <span class="bg-blue-100">hain</span> <span class="bg-purple-100">pen</span> <span class="bg-orange-100">jegu</span> <span class="bg-red-100">amsi</span>
              <br/>
              translates to <q>Again, we're at the bridge</q>. <i>at the bridge</i> is an adverbial construction of <i>locality</i>.
              In this sentence, <q>jegu amsi</q> would literally be translated as <i>where the bridge is</i>, but semantically <i>at</i> is more appropriate.
              All conjunctions can be translated with a primitive subclause like this but should be translated with an equivalent preposition in english.
            </p>
            <h4>Relative Clauses</h4>
            <p>
              A relative clause is a clause defining a noun phrase further by using a subclause. In Getriš, relative clauses are introduced using the conjunction <span class="bg-orange-100">nju</span>.
              For example:
              <br/>
              <span class="bg-red-100">maeri</span> <span class="bg-orange-100">nju</span> <span class="bg-blue-100">marin</span> <span class="bg-purple-100">pi</span>
              <br/>
              translates to <q>the book, that I read</q> or <q>the book, which I read</q>. A relative clause without a noun phrase it refers to is a subject clause (below).
            </p>
            <h4>Subject and Object Clauses</h4>
            <p>
              Subject clauses substitute the subject of a sentence with a subclause and Object clauses substitute the object. They're introduced by <span class="bg-orange-100">nju</span> and <span class="bg-orange-100">kon</span> respectively.
              For example:
              <br/>
              <span class="bg-blue-100">rugjin</span> <span class="bg-orange-100">nju</span> <span class="bg-blue-100">marin</span>
              <br/>
              Which can be translated as <q>who reads knows</q> but in english is probably more accurately said as <q>Those, who read, know</q>.
            </p>
            <p>
              An object sentence is common in indirect speech:
              <br/>
              <span class="bg-blue-100">heitum</span> <span class="bg-purple-100">hi</span> <span class="bg-orange-100">kon</span> <span class="bg-blue-100">marin</span> <span class="bg-purple-100">hi</span> <span class="bg-red-100">maerim</span>
              <br/>
              translates to <q>They said, that they read a book</q>. In english this is commonly shorted to <q>They said they read a book</q>.
            </p>
            <h4>Subclauses</h4>
            <p>
              Additionally to noun phrases, conjunctions can also attach to full clauses in which case they form subclauses. The different conjunctions then determine the relation the subclause has to the main clause (causal, local, temporal, etc.)
            </p>
            <div class="overflow-x-scroll w-full max-w-full">
              <table>
                <thead>
                  <tr><th>Conjunction</th><th>Type</th><th>Translation</th><th>Translation as Question Word</th></tr>
                </thead>
                <tbody>
                  <tr><td>ar</td><td>restrictive</td><td>but</td><td>What's the catch?, But...?</td></tr>
                  <tr><td>diru</td><td>themative</td><td>about, concerning, regarding</td><td>About what?</td></tr>
                  <tr><td>düžu</td><td>consecutive</td><td>so ... that</td><td>So that?</td></tr>
                  <tr><td>ju</td><td>modal</td><td>how</td><td>How?</td></tr>
                  <tr><td>janu</td><td>conditional</td><td>unless</td><td>Unless...?</td></tr>
                  <tr><td>jegu</td><td>local</td><td>where</td><td>Where?</td></tr>
                  <tr><td>kon</td><td>accusative</td><td>that, whether</td><td>Whom?, What?</td></tr>
                  <tr><td>mudu</td><td>conditional</td><td>if, when, whether</td><td>When?</td></tr>
                  <tr><td>nju</td><td>nominative</td><td>who, which</td><td>Who?, What?</td></tr>
                  <tr><td>rinšu</td><td>concessive</td><td>even though</td><td>Even though...?</td></tr>
                  <tr><td>rinu</td><td>adversative</td><td>while, instead of, although, however</td><td>However...?</td></tr>
                  <tr><td>sku</td><td>numerical</td><td>how much, how many</td><td>How much?, How many?</td></tr>
                  <tr><td>taeu</td><td>dative</td><td>for, to</td><td>To what?</td></tr>
                  <tr><td>vahju</td><td>causal</td><td>because, due to</td><td>Why?</td></tr>
                  <tr><td>vakju</td><td>causal-consecutive</td><td>therefore, so</td><td>Wherefore? (REFERENCEEEEE)</td></tr>
                  <tr><td>zahu</td><td>proportionalitive</td><td>the more ..., the more ...</td><td>(honestly no clue)</td></tr>
                  <tr><td>zatru</td><td>final</td><td>so that</td><td>With what objective?</td></tr>
                  <tr><td>žiku</td><td>temporal (instant)</td><td>when</td><td>When?, At what point (in time)?</td></tr>
                  <tr><td>žitu</td><td>temporal (period)</td><td>during</td><td>During which time?</td></tr>
                </tbody>
              </table>
            </div>
            <h4>Infinitive Constructions</h4>
            <p>
              The conjunction <span class="bg-orange-100">fu</span> together with a verb constitutes an infinitive construction. It substitutes an object, with the meaning of the action of the verb. It can also take adverbial specification.
              <br/>
              <span class="bg-blue-100">seruitum</span> <span class="bg-purple-100">pi</span> <span class="bg-orange-100">fu</span> <span class="bg-blue-100">akuin</span> <span class="bg-yellow-100">jehie</span>
              <br/>
              translates to <q>I forgot to clean everywhere</q>.
            </p>
            <h4>Appositions</h4>
            <p>
              Appositions are non-clause constructions that give more detail to a noun phrase, commonly used on names to add titles or a description.
              <q>Zel, the good person, reads a book</q>
              can be translated as
              <br/>
              <span class="bg-blue-100">marin</span> <span class="bg-red-100">zel</span>, <span class="bg-green-100">luka</span> <span class="bg-red-100">ske</span>, <span class="bg-red-100">maerim</span>.
              <br/>
              This is just a change of word order. Objects in the sentence must be excplicitly declensed.
            </p>
          </CollapseH3>
          <CollapseH3 title="Modal Verbs">
            <p>
              Modal verbs are auxiliary verbs that modify another verb. They take a clause as object without an infinitive construction. Common modal verbs are <q>can</q>, <q>may</q>, <q>might</q>, <q>must</q>, <q>shall</q>
            </p>
          </CollapseH3>
          <CollapseH3 title="Passive Voice">
          <p>
            The passive voice flips the subject and direct object's roles in the clause. To instead take the role of the indirect object, a direct object must be given or the preposition <span class="bg-orange-100">taeu</span> used on the subject. In Getriš the syntax stays the same, the passivity is indicated by the suffix <span class="bg-pink-100">fe</span> on the predicate.
            Compare:
            <br/>
            <span class="bg-verb-100">trugin</span> <span class="bg-purple-100">pi</span> <span class="bg-purple-100">tim</span>: <q>I expect you</q>
            <span class="bg-verb-100">truginfe</span> <span class="bg-purple-100">pi</span> <span class="bg-orange-100">šju</span> <span class="bg-purple-100">ti</span>: <q>I'm being expected by you</q>
          </p>
          <p>
            A few common phrases use the passive: <span class="bg-blue-100">nestrinfe</span>, lit. to be called, is the default way to say <q>My name is ...</q>, as in <q>I'm being called ...</q>.
            <br/>
            <span class="bg-blue-100">mudinfe</span>, lit. to be happened, is used in the question <q>How are you?</q>, as <q>What's being happened?</q>, because it implies that whomever you're asking is causing the events.
          </p>
          </CollapseH3>
          <CollapseH3 title="Participles">
            <p>
              Adjectives can be derived from verbs as participles.
              The suffix <span class="bg-pink-100">la</span> after the present tense conjugation makes a progressive participle:
              <br/>
              <span class="bg-green-100">marinla</span> <span class="bg-red-100">pi</span> - <q>the reading me</q>
              <br/>
              <span class="bg-green-100">marinfela</span> <span class="bg-red-100">maeri</span> - <q>The book being read</q>
            </p>
            <p>
              The suffix <span class="bg-pink-100">uma</span> is used to make the PPP (Passive Past Participle):
              <br/>
              <span class="bg-green-100">maruma</span> <span class="bg-red-100">maeri</span> - <q>The read book</q>
            </p>
            <p>
              The suffix <span class="bg-pink-100">ura</span> is used to make the future passive participle:
              <br/>
              <span class="bg-green-100">marura</span> <span class="bg-red-100">maeri</span> - <q>The book that will be read</q>
            </p>
          </CollapseH3>
          <CollapseH3 title="Mood Markers and Fillers">
            <p>
              There are certain modal particles such as <q>leu</q>, <q>pou</q>, <q>hau</q> that can indicate a mood and act as filler words in a sentence. They are considered informal but can convey information about which parts of the sentiment are expected, or expected to be known.
            </p>
          </CollapseH3>
          <CollapseH3 title="Rare Constructions">
            <h4>Lone adjective construction</h4>
            <p>A lone adjective, or noun with suffix -<span class="bg-pink-100">ha</span>, describes the state of the world, like in the sentence <q>It's raining</q>, translated as <span class="bg-green-100">rikobiha</span> (lit.: rain-existent)</p>
            <h4>Progressive, Imperfect and Perfect</h4>
          </CollapseH3>
          <CollapseH3 title="Occasionality and Specificity">
            <p>
              Occasionality modifiers such as <q>always</q>, <q>sometimes</q>, <q>occasionally</q>, as well as probability of an action are conveyed through verb suffixes.
              <br/>
              <span class="bg-blue-100">heinaňle</span> <span class="bg-purple-100">pi</span>
              <br/>
              means <q>I never speak.</q> While <i>aňle</i> can be used as an adverb as well, this form is more common.
            </p>
            <p>
              Since Getriš does not have words for the demonstrative pronouns starting with <q>any-</q>, or the word <q>any</q>, or determined or undetermined articles,
              this information is conveyed through context or the noun suffix <span class="bg-pink-100">sau</span>, which fulfills the role of <q>any</q>.
              Other specificity markers include <span class="bg-pink-100">mae</span> (some, some of, many), <span class="bg-pink-100">mi</span> (all of, each), <span class="bg-pink-100">uloi</span> (only, sole, single).
            </p>
          </CollapseH3>
          <CollapseH3 title="Direct and Indirect Speech, Enumerations">
            <p>
              Direct speech enclosed in quotes „...“ substitutes an object.
            </p>
            <p>
              Indirect speech can be conveyed roughly via a themative object, or more concretely with an object clause with <span class="bg-orange-100">kon</span>
            </p>
            <p>
              Enumerations in Getriš are separated by semicola (;) and substitute any part of speech with multiple. Since no parts of speech are in agreement, the rest of the clause is not affected by this.
              Affixes can be applied to the whole group with a hyphen and optionally enclosing parantheses.
              For clarity, in speech, a semicolon can be spoken as /ʏ/.
            </p>
          </CollapseH3>
          <CollapseH3 title="Morphology">
            <h4>Concatenative</h4>
            <p>
              When forming a single unit of meaning, words can be concatenated to form a new word. Typically a common ending is then stripped (adjective -a, noun -i, verb -in).
              Loose Concatenation refers to 2 nouns, with space inbetween, that do not form a grammatical unit but a semantical one. This is common with materials, colors and shapes. Only the last noun of a loose concatenation has to be declensed,
              the others are treated as adjectives, even without the suffix.
            </p>
            <h4>Adjectivization</h4>
            <p>
              Adjectives can be formed by adding the suffix -a to another word, typically nouns or verbs. The meaning of it depends but is typically equivalent to adding -y to the english translation.
            </p>
            <h4>Nominalization</h4>
            <p>
              Nominalization from adjectives refers to the quality as a concept, e.g. <span class="bg-green-100">da</span> (warm), <span class="bg-red-100">di</span> (warmth).
              It's formed by replacing the adjective ending -a with the noun ending -i.
            </p>
            <p>
              Nominalization from verbs can be achieved with different suffixes: <span class="bg-pink-100">-ai</span> refers to the actor, <span class="bg-pink-100">-ie</span> to the direct object, <span class="bg-pink-100">-spi</span> to the process.
              Sometimes, the stem or the stem with the noun ending -i or -o also has a meaning (usually -ation).
            </p>
            <h4>Verbalization</h4>
            <p>
              Verbalization with the ending -in on a noun or adjective is usually equivalent to adding -ing in the english translation.
              In the case of adjectives it refers to the process of adjusting something towards that quality, e.g. <span class="bg-green-100">da</span> (warm), <span class="bg-blue-100">dain</span> (to warm (up))
            </p>
          </CollapseH3>
          <CollapseH3 title="Colors">
            <p>
              Colors in Getriš are not treated as adjectives but nouns, which makes them deserve this extra section.
              To say something has a certain color, you can use the possessive of the color (like in japanese), or loosely concatenate it.
              Making the color an adjective loosens its meaning.
              For example:
              <br />
              <span class="bg-red-100">haoup</span> <span class="bg-red-100">ebek</span>: red ball
              <br />
              <span class="bg-red-100">haoupši</span> <span class="bg-red-100">ebek</span>: red ball
              <br />
              <span class="bg-green-100">haoupa</span> <span class="bg-red-100">ebek</span>: reddish ball
            </p>
          </CollapseH3>
          <CollapseH3 title="Date and Time">
            <p>Note in this section, that Getriš is not spoken on Earth. Their date and time system is a little different...</p>
            <p>The current time is told by saying (hour)-un (minute)-von (second)-sae, e.g. <span class="bg-yellow-100">rinva-un šivötensja-von dama-sae</span> is 00:34:08</p>
            <p>The current date is told by saying (year)-hek (month name) (day)-ek, e.g. <span class="bg-yellow-100">šivödama-hek gajfur zula-ek</span> is the 32.3.09</p>
          </CollapseH3>
          <CollapseH3 title="Reflexive Pronouns">
            <p>
              The reflexive suffix <span class="bg-pink-100">tu</span> is used on personal pronouns to mean <q>X ... Xself</q>
            </p>
            <p>
              For example: <span class="bg-blue-100">zaenin</span> <span class="bg-purple-100">pitu</span> - <q>I like myself</q>
            </p>
          </CollapseH3>
          <CollapseH3 title="Vocative">
            <p>
              The vocative is used to address people or a group of people. The suffix <span class="bg-pink-100">vo</span> can be used on nouns and names to mean <q>Dear ...</q> (e.g. <span class="bg-red-100">veleöhienvo</span> - <q>Dear passengers</q>)
            </p>
          </CollapseH3>
          <CollapseH3 title="Punctuation">
            <p>
              In Lumaha a comma is used to separate clauses, a semicolon to seperate items in enumerations and full stops/periods to separate sentences.
              Exclamation marks are used for informal sentences, insinuated shouting and orders, questions marks are used for formal sentences.
              Questions are not usually marked with more than the question suffix. The symbol for something unknown looks more like ᕠ.
              Direct speech is marked by just quotation marks „…“ and includes any punctuation according to normal rules.
              A typical example would be <q>heitum hi „marin pi maeri.“.</q>, note that there are 2 periods.
            </p>
          </CollapseH3>
        </CollapseH2>
        <CollapseH2 title="Phrases and Examples">
          <p>
            Here are some common english phrases and their translations, to give the reader an idea or 2 or 3 maybe even.
          </p>
          <table>
            <thead>
              <tr><th>English</th><th>Getriš</th><th>Listen</th></tr>
            </thead>
            <tbody>
              <tr><td>Hello!</td><td>taeho!</td><td><Listen sound="example/hello" /></td></tr>
              <tr><td>Good morning!</td><td>aja traim.</td><td><Listen sound="example/gm" /></td></tr>
              <tr><td>Good afternoon!</td><td>aja arufun.</td><td><Listen sound="example/gan" /></td></tr>
              <tr><td>Good evening!</td><td>aja iifun.</td><td><Listen sound="example/ge" /></td></tr>
              <tr><td>How are you?</td><td>ju mudinfeži.</td><td><Listen sound="example/hru" /></td></tr>
              <tr><td>I'm fine, thank you. And you?</td><td>mön pi eja, arjin. mönži ti.</td><td><Listen sound="example/fine" /></td></tr>
              <tr><td>Nice to meet you.</td><td>luva fu filahin.</td><td><Listen sound="example/ntmu" /></td></tr>
              <tr><td>What's your name?</td><td>kon nestrinfeži ti.</td><td><Listen sound="example/wyn" /></td></tr>
              <tr><td>My name is ...</td><td>nestrinfe ...</td><td><Listen sound="example/mni" /></td></tr>
              <tr><td>Where are you from?</td><td>jegu rivar mönži ti.</td><td><Listen sound="example/wyf" /></td></tr>
              <tr><td>I'm from ...</td><td>mön pi rivar ...</td><td><Listen sound="example/ifp" /></td></tr>
              <tr><td>How old are you?</td><td>sku mönži ti lata.</td><td><Listen sound="example/horu" /></td></tr>
              <tr><td>I'm ... years old.</td><td>mön pi ... heken lata.</td><td><Listen sound="example/imyo" /></td></tr>
              <tr><td>Long time no see.</td><td>vibiň žitu heska.</td><td><Listen sound="example/ltns" /></td></tr>
              <tr><td>See you later.</td><td>ašira abjagua.</td><td><Listen sound="example/syl" /></td></tr>
              <tr><td>Goodbye.</td><td>rišo.</td><td><Listen sound="example/bye" /></td></tr>
              <tr><td>Have a nice day.</td><td>varu aja ek.</td><td><Listen sound="example/hand" /></td></tr>
              <tr><td>Take care.</td><td>ivava.</td><td><Listen sound="example/tc" /></td></tr>
              <tr><td>I'm sorry.</td><td>ňan.</td><td><Listen sound="example/sorry" /></td></tr>
              <tr><td>Thank you.</td><td>arjin.</td><td><Listen sound="example/thanks" /></td></tr>
              <tr><td>You're welcome.</td><td>tofi.</td><td><Listen sound="example/please" /></td></tr>
              <tr><td>No problem.</td><td>döütiň.</td><td><Listen sound="example/np" /></td></tr>
              <tr><td>That's okay.</td><td>eja.</td><td><Listen sound="example/ok" /></td></tr>
              <tr><td>Please.</td><td>tofi.</td><td><Listen sound="example/please" /></td></tr>
              <tr><td>Can you help me?</td><td>manži ti ogotin pim.</td><td><Listen sound="example/cyhm" /></td></tr>
              <tr><td>I need your help.</td><td>hanin pi tši ogoti.</td><td><Listen sound="example/inyh" /></td></tr>
              <tr><td>I don't understand.</td><td>rin varugjin pi.</td><td><Listen sound="example/idu" /></td></tr>
              <tr><td>Could you repeat that, please?</td><td>tofi lüpodžoi.</td><td><Listen sound="example/cyrtp" /></td></tr>
              <tr><td>Can you speak more slowly?</td><td>tofi heoi iklagua.</td><td><Listen sound="example/cysms" /></td></tr>
              <tr><td>Do you speak English?</td><td>heinži ti iňlišüm.</td><td><Listen sound="example/dyse" /></td></tr>
              <tr><td>How do you say ... in Getriš?</td><td>ju heinži ... uanu getriš.</td><td><Listen sound="example/hdysig" /></td></tr>
              <tr><td>Sorry to interrupt, but ...</td><td>ňan semjirn ar, ...</td><td><Listen sound="example/stib" /></td></tr>
              <tr><td>May I ask a question?</td><td>meranži pi spin moilorim.</td><td><Listen sound="example/ciaaq" /></td></tr>
              <tr><td>Let me check.</td><td>karsoi pim verin.</td><td><Listen sound="example/lmc" /></td></tr>
              <tr><td>I'll get back to you.</td><td>faleaeru tirn.</td><td><Listen sound="example/igbty" /></td></tr>
              <tr><td>That's interesting.</td><td>rusza.</td><td><Listen sound="example/interesting" /></td></tr>
              <tr><td>Congratulations!</td><td>lukavaruvo.</td><td><Listen sound="example/congrats" /></td></tr>
              <tr><td>How was your day?</td><td>ju mötumži tši ek.</td><td><Listen sound="example/hwyd" /></td></tr>
              <tr><td>Do you want to hang out?</td><td>meginži ti filahin.</td><td><Listen sound="example/dywtho" /></td></tr>
              <tr><td>Let's grab a coffee.</td><td>tavoi pen kavim</td><td><Listen sound="example/lgac" /></td></tr>
              <tr><td>Can I buy you a drink?</td><td>meranži pi orpin tirn gomim.</td><td><Listen sound="example/cibyad" /></td></tr>
              <tr><td>What's new?</td><td>koi sjua</td><td><Listen sound="example/news" /></td></tr>
              <tr><td>How's your family?</td><td>ju mönži tši teibei.</td><td><Listen sound="example/hyf" /></td></tr>
              <tr><td>You're welcome to come.</td><td>meran ti gjihin.</td><td><Listen sound="example/ywtc" /></td></tr>
            </tbody>
          </table>
          <p>If you have more good example sentences please let me know!!!!</p>
        </CollapseH2>
      </article>
    </div>
  );
}

export default Guide;