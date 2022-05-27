let sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
}

let ajaxCall = async (appid) => {
    let sleepTime = Math.floor(Math.random() * 4000);
    await sleep(sleepTime);
    let random = Math.floor(Math.random() * 3) + 1;
    if (random > 1) {
        return appid;
    } else {
        throw appid;
    }
};

export { sleep, ajaxCall };
