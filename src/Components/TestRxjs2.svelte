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
        fromEvent,
        throttleTime,
        merge,
    } from "rxjs";

    //fromEvent(document, "mousemove").subscribe((m) => console.log(m));

    merge(fromEvent(document, "mousemove"), fromEvent(document, "keydown"))
        .pipe(throttleTime(5000))
        .subscribe((x) => {
            console.log(x);
            //在這裡重新更新jwt token
        });
</script>

<button>click</button>
<input type="text" />
