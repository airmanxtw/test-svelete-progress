<svelte:options tag="my-progress" />

<script>
  import { ajaxCall } from "../Methods/api";
  import { writable, get } from "svelte/store";
  import "./ProgressBar.svelte";
  import "./ConsoleBoard.svelte";
  import { var1, add, var2 } from "../api/MyApi2";
  import "./TestVal.svelte";
  import "./TestRxjs.svelte";
  import "./TestRxjs2.svelte";
  import "./TestRxjs4.svelte";
  import "./TestVal2.svelte";

  // import { var1 } from "../api/MyApi2";

  import MyIcon from "./MyIcon.svelte";

  import MyButton from "./MyButton.svelte";
  import { get_store_value } from "svelte/internal";

  import { createEventDispatcher } from "svelte";
  import { get_current_component } from "svelte/internal";
  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();

  let go2 = () => {
    //svelteDispatch("go");
    component.dispatchEvent &&
      component.dispatchEvent(
        new CustomEvent("go", {
          detail: {
            data: "test",
            load(val) {
              countVal = val;
            },
          },
        })
      );
  };

  const count = writable(0);

  // 用于接收、订阅 count 值变动
  let countVal;

  // 订阅
  var1.subscribe((val) => {
    // 订阅 store-state
    countVal = val;
  });

  let worksCount = 50;
  let process = 0;
  let success = [];
  let errors = [];
  $: percent = ((process / worksCount) * 100).toFixed(2);
  $: state =
    process == 0 ? "待處理" : worksCount == process ? "已完成" : "處理中...";

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
  <!-- <test-rxjs></test-rxjs>
    <test-rxjs2></test-rxjs2> -->
  <test-rxjs4 />
  <span class="icon">
    <i class="mdi mdi-close" />
  </span>
  ***
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
  <button on:click={go2}>go2</button>

  <console-board {success} {errors} />
  <br />
  <span class="icon-text">
    <span class="icon is-large">
      <my-icon icon="turtle" color="pink" size="large" />
    </span>
    <span>turtle</span>
  </span>
  <br />
  <div class="adiv">
    <span class="icon-text">
      <span class="icon is-large">
        <my-icon icon="rabbit" color="pink" size="large" />
      </span>
      <span>rabbit</span>
    </span>
  </div>

  <br />
  <my-button />
  {countVal}-{get(var1)}-{$var1}-{$var2}
  <button on:click={add}>+</button>
  <test-val />
  <hr />
  <test-val2 />
</div>

<style lang="scss">
  /* @import "./build/bundle.css" */
  // @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

  // $color: red;
  // h2 {
  //     color: $color;
  // }
  .adiv {
    position: absolute;
    top: 60px;
    left: 50px;
    animation-name: example;
    animation-duration: 10s;
  }
  @keyframes example {
    from {
      left: 50px;
    }
    to {
      left: 500px;
    }
  }

  @import "bulma/sass/utilities/_all.sass";
  @import "bulma/sass/elements/button.sass";
  @import "bulma/sass/elements/progress.sass";
  @import "bulma/sass/elements/icon.sass";

  @import "//cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css";
</style>
