<svelte:options tag="test-rxjs3" />

<script>
    import { object_without_properties } from "svelte/internal";
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
    } from "rxjs";
    import {pick} from 'lodash-es';

    let a = { name: "airmanx", age: 18, weight: 50 };
    let b = { name: "ccsu", age: 20, sex: true };

    let c = Object.keys(a).reduce((obj, k) => {
        return { ...obj, ...{ [k]: b[k] } };
    }, {});

    //console.log(c);

    let d= pick({...a,...b},Object.keys(a));
    console.log(d);


</script>
