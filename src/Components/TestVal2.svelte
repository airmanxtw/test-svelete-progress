<svelte:options tag="test-val2"/>
<script>
    import "./PublicMethods.svelte";
import {cou, add } from "./PublicMethods.svelte";
</script>

<button on:click={add}>click</button>

{cou}