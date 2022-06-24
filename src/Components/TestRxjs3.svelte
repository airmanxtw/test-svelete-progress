<svelte:options tag="test-rxjs3" />

<script>
    import {
        merge,
        of,
        pairwise,
        reduce,
        map,
        tap,
        toArray,
        pipe,
        concatMap,
        interval,
        take,
        from,
        window,
        range,
        mergeMap,
        scan,
        zip,
    } from "rxjs";

    let a = from([10, 2]);
    let b = from(["a"]);

    zip(a, b)
        .pipe(
            map(([x, y]) => {
                return { x, y };
            })
        )
        .subscribe((x) => console.log(x));
</script>
