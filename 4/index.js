var server_echo;
var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
    .then((response) => response.json()) // can use response.json() only once
    .then((result) => {
        /*
        *  assuming fetch call is going to return echo property of type array and not string.
        *  server_echo has to be written in here as fetch is async call, In order to console element writting it here as it will get executed as promise is resolved
        */

        server_echo = result.echo
        server_echo.forEach(
            element => console.log(element)
        )
        alert(result);
    })
    .catch((error) => console.log('Request failed', error));
