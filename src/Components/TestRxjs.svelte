<svelte:options tag="test-rxjs" />

<script>
    import {
        interval,
        range,
        from,
        scan,
        asyncScheduler,
        subscribeOn,
        toArray,        
        reduce,
        map,
        bufferCount,
        delay,
        of,
        concatMap,
    } from "rxjs";

    // 檔案切割範例,buffer 1024 byte,延遲1秒
    let upload = (e) => {
        const file = e.target.files[0];
        range(file.size)
            .pipe(
                bufferCount(1024),
                concatMap((m) => of(m).pipe(delay(1000)))
            )
            .subscribe((x) => {
                // slice用法 : slice(start,end),以0為起始,end為不包含
                const blob = file.slice(x.at(0), x.at(-1) + 1);
                console.log(blob);
                // ** 這裡就可以做傳送 **
            });
    };
</script>

<input type="file" on:change={upload} />
