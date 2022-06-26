<svelte:options tag="test-rxjs4" />

<script>
    import { Subject, map, takeLast } from "rxjs";
    const subject = new Subject();

    subject.subscribe((x) => console.log(x));

    let t = 0;
    let cc = () => {
        t++;
        subject.next(t);
    };
    //subject.next(1);
</script>

<div>{t}</div>
<input type="button" on:click={cc} value="add" />
