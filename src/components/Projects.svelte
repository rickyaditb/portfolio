<script>
    import { fly } from "svelte/transition";
    import { inview } from "svelte-inview";

    import Data from "../data.json";
    import Configuration from "../configuration.json";
    import Translation from "../translation.json";

    export let lang;
    export let dark;

    let isInView;
    let isInViewStack = [];
    let isEven = (e, i) => {
        let result = i % 2;
        return result === 0 ? true : false;
    };

    let darkBgColor;
    $: darkBgColor = dark ? "white" : "black";
    let darkTextColor;
    $: darkTextColor = dark ? "text-black" : "text-white";
    let darkIconColor;
    $: darkIconColor = dark ? "black" : "white";
</script>

<section id="project">
    <div
        use:inview={Configuration["animation"].options}
        on:enter={() => {
            isInView = true;
        }}
        class={isInView ? "opacity-100" : "opacity-0"}
    >
        {#key [lang, isInView]}
            <h1
                in:fly={Configuration["animation"]["in-fly"]}
                class="font-bold text-4xl"
            >
                {Translation[lang]["project"]}
            </h1>
        {/key}
    </div>

    {#each Data.projects as project, index}
        <div
            use:inview={Configuration["animation"].options}
            on:enter={() => {
                isInViewStack[index] = true;
            }}
            class={`${
                isInViewStack[index]
                    ? "opacity-100"
                    : "-translate-y-6 opacity-0"
            } transition duration-2000 `}
        >
            {#key isInViewStack[index]}
                <article class={`grid lg:grid-cols-2 mt-4 gap-10 items-center`}>
                    {#if isEven(Data.projects, index)}
                        <div
                            class="group bg-green-500 rounded h-64 hidden lg:block text-black text-center"
                        >
                            <div
                                class="bg-black/50 group-hover:opacity-100 h-full opacity-0 transition duration-500 ease-out flex flex-col items-center justify-center gap-3 rounded"
                            >
                                <a
                                    href="http://rickyaditb.my.id"
                                    class="w-52 bg-secondary px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href="http://www.github.com"
                                    class="w-52 bg-secondary px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </div>
                    {/if}
                    <div>
                        <p class="text-2xl lg:text-3xl font-bold">
                            {project.name}
                        </p>
                        <div
                            class="my-4 bg-white rounded h-64 block lg:hidden"
                        />
                        <p class="mt-2 text-justify">{project.description}</p>
                        <div class="flex gap-3">
                            {#each Data.projects[index].stacks as stack}
                                <button
                                    style={`background-color: ${
                                        stack.iconColor === "white"
                                            ? darkBgColor
                                            : stack.iconColor
                                    };`}
                                    class={`${
                                        stack.textColor === "white"
                                            ? "text-white"
                                            : darkTextColor
                                    } font-bold rounded px-3 py-2 mt-3 flex gap-2 items-center`}
                                >
                                    <img
                                        height="20"
                                        width="20"
                                        src={`https://cdn.simpleicons.org/${
                                            stack.name
                                        }/${
                                            stack.textColor === "black"
                                                ? darkIconColor
                                                : stack.textColor
                                        }`}
                                        alt=""
                                    />
                                    <span>{stack.name}</span>
                                </button>
                            {/each}
                        </div>
                    </div>
                    {#if isEven(Data.projects, index) === false}
                        <div
                            class="group bg-blue-500 rounded h-64 hidden lg:block text-black text-center"
                        >
                            <div
                                class="bg-black/50 group-hover:opacity-100 h-full opacity-0 transition duration-500 ease-out flex flex-col items-center justify-center gap-3 rounded"
                            >
                                <a
                                    href="http://rickyaditb.my.id"
                                    class="w-52 bg-secondary px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href="http://www.github.com"
                                    class="w-52 bg-secondary px-3 py-2 font-bold text-white rounded text-2xl flex items-center justify-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </div>
                    {/if}
                </article>
            {/key}
        </div>
    {/each}
    {#key lang}
        <div
            in:fly={{ y: -20 }}
            class="flex justify-center items-center gap-1 cursor-pointer mt-6"
        >
            <span>{Translation[lang]["view-more"]}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
    {/key}
</section>
