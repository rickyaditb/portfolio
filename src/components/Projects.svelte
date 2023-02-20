<script>
    import Data from "../data.json";
    import Translation from "../translation.json";
    import { fly } from 'svelte/transition';

    export let lang;   

    let isEven = (e, i) => {
        let result = i % 2
        return result === 0 ? true : false;
    };
</script>

<section>
    {#key lang}
    <h1 in:fly={{ y: -20 }} class="font-bold text-4xl">{Translation[lang]['project']}</h1>
    {/key}
    {#each Data.projects as project, index }
    <article class="grid lg:grid-cols-2 mt-4 gap-10 items-center">
        {#if isEven(Data.projects, index)}
        <div class="bg-white rounded h-64 hidden lg:block text-black">Image to be added</div>
        {/if}
        <div>
            <p class="text-2xl lg:text-3xl font-bold">{project.name}</p>
            <div class="my-4 bg-white rounded h-64 block lg:hidden"></div>
            <p class="mt-2 text-justify">{project.description}</p>
            <div class="flex gap-3">
                {#each Data.projects[index].stacks as stack }
                <button style={`background-color: ${stack.iconColor};`} class={`${stack.textColor === "white" ? "text-white" : "text-black"} font-bold rounded px-3 py-2 mt-3 flex gap-2 items-center`}>
                    <img height="20" width="20" src={`https://cdn.simpleicons.org/${stack.name}/${stack.textColor}`} alt=""/>
                    <span>{stack.name}</span>
                </button>
                {/each}
            </div>
        </div>
        {#if isEven(Data.projects, index) === false}
        <div class="bg-white rounded h-64 hidden lg:block text-black">Image to be added</div>
        {/if}
    </article>
    {/each}
    {#key lang}
    <div in:fly={{ y: -20 }} class="flex justify-center items-center gap-1 cursor-pointer mt-6">
        <span>{Translation[lang]['view-more']}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clip-rule="evenodd" />
        </svg>
    </div>
    {/key}
</section>