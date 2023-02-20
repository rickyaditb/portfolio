<script>
    import Data from "../data.json";
    import Translation from "../translation.json";
    import { fly } from 'svelte/transition';

    export let lang;    
</script>
<section>
    {#key lang}
    <h1 in:fly={{ y: -20 }} class="font-bold text-4xl">{Translation[lang].certification}</h1>
    {/key}
    <div class="px-5 mt-3 flex flex-col gap-2">
        {#each Data.certification as cert}
            <article class="flex gap-3 items-center hover:scale-102 transition cursor-pointer">
                <img src={`assets/img/cert/${cert.publisher}.png`} class="w-12 h-12" alt="">
                <div class="">
                    <p class="font-bold md:text-xl">{cert.title}</p>
                    <p class="-mt-1 text-lg">{cert.publisher}</p>
                </div>
            </article>
        {/each}
        {#key lang}
        <div in:fly={{ y: -20 }} class="flex justify-center items-center gap-1 cursor-pointer mt-3">
            <span>{Translation[lang]['view-more']}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
            </svg>                      
        </div>
        {/key}
    </div>
</section>