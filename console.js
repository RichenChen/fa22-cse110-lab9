class ZeroDivisorError extends Error {
    constructor(message) {
      super(message);
      this.name = "ZeroDivisorError";
    }
  }

window.onerror = () => {
    console.log("global error caught");
};


let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    if (operator == "/" && secondNum == 0) {
        throw new ZeroDivisorError("Dividing by zero!")
    }
    try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (err) {
        console.log("error occured - " + err);
    } finally {
        console.log("end of calculation");
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

let log = document.querySelector('#console_log');
log.addEventListener('click', function() {
    console.log("console log demo");
});
let error = document.querySelector('#console_error');
error.addEventListener('click', function() {
    console.error("console error demo");
});
let count = document.querySelector('#console_count');
count.addEventListener('click', function() {
    console.count("console count");
});
let warn = document.querySelector('#console_warn');
warn.addEventListener('click', function() {
    console.warn("console warn demo");
});
let assert = document.querySelector('#console_assert');
assert.addEventListener('click', function() {
    console.assert(false, "console assert - false");
});
let clear = document.querySelector('#console_clear');
clear.addEventListener('click', function() {
    console.clear();
});
let dir = document.querySelector('#console_dir');
dir.addEventListener('click', function() {
    console.dir(dir);
});
let dirxml = document.querySelector('#console_dirxml');
dirxml.addEventListener('click', function() {
    console.dirxml(dirxml);
});
let group_start = document.querySelector('#console_group_start');
group_start.addEventListener('click', function() {
    console.group("group");
});
let group_end = document.querySelector('#console_group_end');
group_end.addEventListener('click', function() {
    console.groupEnd("group");
});
let table = document.querySelector('#console_table');
table.addEventListener('click', function() {
    console.table(["element 0", "element 1", "element 2"]);
});
let start_timer = document.querySelector('#console_start_timer');
start_timer.addEventListener('click', function() {
    console.time("time");
});
let end_timer = document.querySelector('#console_end_timer');
end_timer.addEventListener('click', function() {
    console.timeEnd("time");
});
let trace = document.querySelector('#console_trace');
trace.addEventListener('click', function() {
    console.trace();
});
let trigger_a_global_error = document.querySelector('#console_trigger_a_global_error');
trigger_a_global_error.addEventListener('click', function() {
    throw new Error("err");
});
TrackJS.track("err");