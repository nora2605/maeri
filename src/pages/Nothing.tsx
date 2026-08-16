import { Component } from "solid-js";
import { Router } from "../router";

const Nothing: Component = () => {
  return (
    <div class="flex flex-col justify-center items-center w-full h-full">
      <h1 class="text-3xl mb-4">Nothing here</h1>
      <a href={Router.paths()} class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Back Home</a>
    </div>
  );
}

export default Nothing;