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
        pairwise,concatMap,of,delay
    } from "rxjs";
    let c = () => {
        let data = [2, 3, 1,2];

        // interval(1000)
        //     .pipe(
        //         takeWhile((t) => t < 4),                
        //         scan(r => from(r).pipe(
        //             pairwise()
        //         ),data)
        //     )
        //     .subscribe((x) => x.subscribe((y) => console.log(y)));

        interval(1000).pipe(
           scan((n,t)=>n-1,data.length),
           takeWhile((n) => n >= 1),   
                                      
        )
        .subscribe((x) => console.log(x));



    };
</script>

<button on:click={c}>click</button>
