function setTimeoutCall(delayInMs) {
    let oldTime = new Date().getTime();
  console.log('before setTimeout', oldTime);
    setTimeout((oldTime) => {
        let newTime = new Date().getTime();
        console.log('inside setTimeout', newTime);
        console.log('delayInMs', delayInMs);
        console.log('diff', newTime - oldTime);
    }, delayInMs);
}

setTimeoutCall(2000);