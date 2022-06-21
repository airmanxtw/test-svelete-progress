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
        async,
        reduce,
        map
    } from "rxjs";
    let total2 = 0;

    // let data=[1,2,3,4,5,6,7,8,9,10];
    // console.log('start');
    // let t=0;
    // for(let i=0;i<data.length;i++)
    //     t=t+data[i];
    // console.log(t);
    // console.log('end');
        
    

    // let data=[1,2,3,4,5,6,7,8,9,10];
    // console.log('start');
    // console.log(data.reduce((t,n)=>t+n));
    // console.log('end');

    // let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // console.log("start");
    // let sum = async () => {
    //     return data.reduce((t, n) => t + n);
    // };
    // sum().then((t) => {
    //     console.log(t);
    // });
    // console.log("end");

    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("start");
    from(data).pipe(
        map(n => n*n),
        reduce((t,n)=>t+n),
        subscribeOn(asyncScheduler),
        toArray()
    ).subscribe(x=>{total2 = x.at(-1)});
    console.log('end');

    let add=()=>{
        data.push(11);
    }

</script>

<h1>{total2}</h1>
<button on:click={add}>add</button>
