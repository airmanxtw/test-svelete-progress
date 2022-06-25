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
        switchMap,
        retry,
        catchError,
        delay,
    } from "rxjs";

    import { ajax } from "rxjs/ajax";

    let urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3",
        "https://jsonplaceholder.typicode.com/posts/4",
        "https://jsonplaceholder.typicode.com/posts/5",
    ];

    //依序請求(concatMap)，等待兩秒，一個請求處理完成了(無論失敗或成功)，才處理下個請求
    from(urls)
        .pipe(
            concatMap((url) =>
                ajax.getJSON(url).pipe(
                    delay(2000),
                    catchError((err) => of(null))
                )
            )
        )
        .subscribe({
            next: (json) => console.log(json),
            error: (err) => console.log(`err`),
        });

    // 同時發出請求(mergeMap);
    from(urls)
        .pipe(
            mergeMap((url) =>
                ajax.getJSON(url).pipe(catchError((err) => of(null)))
            )
        )
        .subscribe({
            next: (json) => console.log(json),
            error: (err) => console.log(`err`),
        });
</script>
