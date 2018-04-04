$('document').ready(function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzJb8ch1pg5vSCx8dAoTHEQwwn5SjfcGsWa7GpP4mb4-C20tq0G/exec?key=1-IviKDX4I6YIn91c9bCKNuz8CDZBbLq02fEz-5fjQcw'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        $('#submit').attr('disabled', 'disabled');

        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(function(response) {
                console.log('Success!');
                window.location.replace("../formSubmitted");
            })
            .catch(error => console.error('Error!', error.message))
    })

    $('.inc').click(function() {
        var el = $('#' + event.target.getAttribute("data-in"))
        el.val(parseInt(el.val()) + 1)
    })

    $('.dec').click(function() {
        var el = $('#' + event.target.getAttribute("data-in"))
        if (parseInt(el.val()) <= 0)
            return
        el.val(parseInt(el.val()) - 1)
    })
});

function success(e) {
    console.log("success");
}