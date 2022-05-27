<svelte:options tag="console-board" />

<script>
    export let success = [];
    export let errors = [];
</script>

<div class="message">
    <div class="success">
        {#each success as s}
            {s}<br />
        {/each}
    </div>
    <div class="error">
        {#each errors as e}
            {e}<br />
        {/each}
    </div>
</div>

<style>
    .message {
        width: 100%;
    }
    .success {
        width: 200px;
        color: green;
        float: left;
    }
    .error {
        width: 200px;
        color: red;
        float: left;
    }
</style>
