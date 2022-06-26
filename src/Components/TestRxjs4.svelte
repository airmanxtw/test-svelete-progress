<svelte:options tag="test-rxjs4" />

<script>
    import { BehaviorSubject, map } from "rxjs";
    const subject = new BehaviorSubject(0);

    subject.pipe(map((v) => v + 1)).subscribe((x) => {
        console.log(x);
    });
    let t = 0;
    let cc = () => {};
    //subject.next(1);
</script>

<div>{t}</div>
<input type="button" on:click={cc} value="add" />
