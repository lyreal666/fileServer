
function main(test) {
    setTimeout(() => {
        test()
    }, 1000)
}

(() => {
    function test() {
        console.log("test")
    }
    main(test);
})();
