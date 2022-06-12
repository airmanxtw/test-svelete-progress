<script context="module">
    import { writable } from "svelte/store";

    export function useVar() {
        let var1 = writable(10);
        return { var1 };
    }
</script>
