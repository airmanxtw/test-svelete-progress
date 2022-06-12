import { derived, writable } from "svelte/store";
let var1 = writable(50);
let add = () => {
    var1.update(c => c + 1);
}

// 類似計算屬性
let var2 = derived(var1, $var => $var % 2);


export { var1, add, var2 }
