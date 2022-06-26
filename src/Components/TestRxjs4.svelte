<svelte:options tag="test-rxjs4" />

<script>
    import {
        Subject,
        map,
        takeLast,
        Observable,
        from,
        scan,
        take,
        throttleTime,
    } from "rxjs";
    const s = new Subject();

    s.pipe(throttleTime(500)).subscribe((x) => {
        dx = x;
    });

    let dx = 0;
    let m = (e) => {
        s.next(e.clientX);
    };
</script>

<div class="d" on:mousemove={m}>{dx}</div>

<style scoped>
    .d {
        width: 500px;
        height: 300px;
        border-style: solid;
        border-width: 1px;
        background-color: pink;
    }
</style>
