<svelte:options tag="test-rxjs4" />

<script>
    import { Subject, map, takeLast } from "rxjs";
    const subject = new Subject();

    let t = 0;
    let cc = () => {
        t++;
        subject.next(t);
    };
    let dd = () => {
        subject.subscribe((x) => console.log(x));
    };

    //subject.next(1);
</script>

<div>{t}</div>
<input type="button" on:click={cc} value="add" />
<input type="button" on:click={dd} value="add2" />
