<svelte:options tag="my-progress" />
<script>
    import { ajaxCall } from "../Methods/api";
    import ProgressBar from "./ProgressBar.svelte";
    import ConsoleBoard from "./ConsoleBoard.svelte";
    let worksCount = 50;
    let process = 0;
    let success = [];
    let errors = [];
    $: percent = ((process / worksCount) * 100).toFixed(2);
    $: state =
        process == 0
            ? "待處理"
            : worksCount == process
            ? "已完成"
            : "處理中...";

    let go = () => {
        process = 0;
        let work = [];
        success = [];
        errors = [];
        for (let i = 0; i < worksCount; i++) {
            work.push(
                ajaxCall(i)
                    .then((res) => {
                        success.push(`已完成工作no:${res}`);
                        success = success;
                    })
                    .catch((err) => {
                        errors.push(`發生錯誤工作no:${err}`);
                        errors = errors;
                    })
                    .finally(() => {
                        process++;
                    })
            );
        }
        Promise.all(work).then(() => {
            console.log("工作已全部完成");
        });
    };
</script>

<div>
    <h2 class="bb">
        工作{worksCount}件,已處理{process},未處理{worksCount - process}件
    </h2>
    <h3>
        {state}
    </h3>
    <progress-bar value={percent} />
    <button on:click={go}>開始執行</button>
    <console-board {success} {errors} />
</div>

<style>
    @import "./build/bundle.css"
</style>


