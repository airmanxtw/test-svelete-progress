<svelte:options tag="progress-bar" />

<script>
    export let value = 0;
    export let maxCount = 50;
    $: r = 100 / maxCount;
    $: completeStar = () => "=".repeat(value / r);
    $: uncompleteLine = () => "-".repeat((100 - value) / r);
</script>

<div>
    [<span class="success">{completeStar()}</span><span>{uncompleteLine()}</span
    >] {value}%
</div>

<style>
    .success {
        color: green;
    }
</style>
