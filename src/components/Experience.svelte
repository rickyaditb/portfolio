<script>
    import { fly } from "svelte/transition";
    import { inview } from "svelte-inview";

    import Data from "../data.json";
    import Configuration from "../configuration.json";
    import Translation from "../translation.json";

    export let lang;
    export let dark;
    let isInView;
</script>

<section
    use:inview={Configuration["animation"].options}
    on:enter={() => {
        isInView = true;
    }}
    class={isInView ? "opacity-100" : "opacity-0"}
    id="experience"
>
{#key isInView}
    {#key lang}
    <h1 in:fly={Configuration['animation']['in-fly']} class="font-bold text-4xl">{Translation[lang].experience}</h1>
    {/key}
    <div in:fly={Configuration['animation']['in-fly']} class="flex gap-5 p-3 mt-2 items-center">
        <div class="z-40">
            <div
                class={`${dark ? "border-white" : "border-gray-800"} h-5 w-5 bg-secondary border-4 flex justify-center items-center rounded-full relative`}
            >
                <div class={`${dark ? "bg-white" : "bg-gray-800"} h-24 w-1 -z-10 relative`} />
            </div>
        </div>
        <img
            src="assets/img/experience-1.png"
            class="w-24 h-24 bg-red-300s"
            alt="logo"
        />
        <div>
            <h2 class="font-bold text-2xl">Bogor Religious Court</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate odio corporis ad esse quaerat animi, ea libero
                inventore expedita. Voluptatibus!
            </p>
        </div>
    </div>
    {/key}
</section>
