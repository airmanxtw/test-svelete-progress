<svelte:options tag="test-val" />

<script>
    import { var1 } from "../api/MyApi2";
    let val;
    var1.subscribe((v) => {
        val = v;
    });
</script>

{val}
