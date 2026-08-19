import { createRouter, defineRoute, defineRoutes } from "@solidjs/router";
import Lexicon from "./pages/Lexicon";
import Guide from "./pages/Guide";
import Analyzer from "./pages/Analyzer";
import EntryPage from "./pages/EntryPage";
import Nothing from "./pages/Nothing";
import CreateEntry from "./pages/dev/CreateEntry";
import { isDev } from "@solidjs/web";

const entryRoute = defineRoute({
    path: "/entry/:id",
    component: (props) => (<EntryPage id={props.params.id} />)
});

const devRoutes = [
    { path: "/create", component: CreateEntry }
];

export const routes = defineRoutes([
    { path: "/", component: Lexicon },
    { path: "/guide", component: Guide },
    { path: "/analyzer", component: Analyzer },
    entryRoute,
    { path: "*404", component: Nothing },
    ...(isDev ? devRoutes : [])
]);

export const Router = createRouter({
    routes
});