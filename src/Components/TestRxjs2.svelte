<svelte:options tag="test-rxjs2" />

<script>
    import {
        range,
        from,
        share,
        interval,
        take,
        tap,
        timer,
        map,
        takeWhile,
        toArray,
        scan,
        reduce,
        max,
        pairwise,
        concatMap,
        of,
        delay,
        retry,
        Observable,
        Subject,
    } from "rxjs";

    let obs=from([1, 2, 3])
            .pipe(tap((c) => "start"))


    let c = () => {     
        obs.next(10);
        obs.subscribe((x) => console.log(x));
    };
</script>

<button on:click={c}>click</button>
