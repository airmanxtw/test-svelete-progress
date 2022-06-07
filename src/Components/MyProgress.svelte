<svelte:options tag="my-progress" />

<script>
    import { ajaxCall } from "../Methods/api";
    import ProgressBar from "./ProgressBar.svelte";
    import ConsoleBoard from "./ConsoleBoard.svelte";

    import MyIcon from "./MyIcon.svelte";

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

<div class="container">
    <h2 class="is-size-3">
        工作{worksCount}件,已處理{process},未處理{worksCount - process}件
    </h2>
    <h3>
        {state}
    </h3>
    <!-- <progress-bar value={percent} /> -->
    <progress class="progress is-primary" value={process} max={worksCount}
        >{percent}%</progress
    >
    <button class="button" on:click={go}>開始執行</button>

    <console-board {success} {errors} />
    <br />
    <span class="icon-text">
        <span class="icon is-large">
            <my-icon icon="turtle" color="pink" size="large" />
        </span>
        <span>turtle</span>
    </span>
    <br />
    <span class="icon-text">
        <span class="icon is-large">
            <my-icon icon="rabbit" color="pink" size="large" />
        </span>
        <span>rabbit</span>
    </span>
    <br />
</div>

<style lang="scss">
    /* @import "./build/bundle.css" */
    // @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

    // $color: red;
    // h2 {
    //     color: $color;
    // }
    @import "bulma/sass/utilities/_all.sass";
    @import "bulma/sass/elements/button.sass";
    @import "bulma/sass/elements/progress.sass";
    @import "bulma/sass/elements/icon.sass";
</style>
