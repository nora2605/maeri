import { isDev } from '@solidjs/web';
import './App.css';
import { Router } from './router';

export default function App() {
  return (
    <Router>{(props) => (
      <div class="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle inline" />
        <div class="drawer-content">
          <nav class="navbar w-full bg-base-300">
            <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost drawer-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            </label>
            <div class="px-4">Maeri</div>
          </nav>
          <main class="p-4">
            {props.children}
          </main>
        </div>

        <div class="drawer-side is-drawer-close:overflow-visible">
          <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
          <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            <ul class="menu w-full grow">
              <li>
                <a href={Router.paths()} class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Lexicon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="my-1.5 inline-block size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                  <span class="is-drawer-close:hidden">Lexicon</span>
                </a>
              </li>
              <li>
                <a href={Router.paths.grammar} class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Grammar">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="my-1.5 inline-block size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
                  <span class="is-drawer-close:hidden">Grammar</span>
                </a>
              </li>
              <li>
                <a href={Router.paths.analyzer} class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Analyzer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="my-1.5 inline-block size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                  <span class="is-drawer-close:hidden">Analyzer</span>
                </a>
              </li>
              {
                isDev && <>
                <li>
                  <a href={Router.paths.create} class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Entry">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="my-1.5 inline-block size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    <span class="is-drawer-close:hidden whitespace-nowrap">Add Entry</span>
                  </a>
                </li>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    )}</Router>
  );
}
