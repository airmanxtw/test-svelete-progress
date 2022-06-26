<svelte:options tag="test-rxjs4" />

<script>
    import { Subject, map, takeLast, Observable, from, scan, take } from "rxjs";
    const s = new Subject();

    s.pipe(
        take(1),
        scan((t, n) => n + 1, 0)
    ).subscribe((x) => console.log(x));

    s.next(7);
    s.next(8);
    s.complete();
</script>
