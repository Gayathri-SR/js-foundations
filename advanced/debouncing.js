//Basic implementation
function debounce(func, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this,args);
        },delay);
    };
}

function fetchResults(query) {
    console.log(query);
}

const debouncedSearch = debounce(fetchResults,500);
//simulate typing
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hello");
//only hello will be logged after 500ms