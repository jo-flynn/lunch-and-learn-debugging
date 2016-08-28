var doSomeDOMStuff = function (foo, bar) {
    var someContent = foo.html();

    bar.html(someContent);

    return bar;
};

var doSomeAjax = function () {
    $.get('http://jsonplaceholder.typicode.com/posts/1').then(function (response) {
        var container = $('#lorem');
        container.find('.title').text(response.title);
        container.find('.content').text(response.body);
    });
};

$(document).ready(function () {
    var foo = $('#foo');
    var bar = $('#bar');

    foo.text('testing');

    // Debug Statements
    console.log(foo);

    // Inline breakpoints
    // debugger;

    // Step through debugging
    bar = doSomeDOMStuff(foo, bar);

    // Network debugging
    doSomeAjax();
});

