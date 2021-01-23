
$('#submit').click(function(e) {
    e.preventDefault();
    var apiKey = 'JYmTqkVruZB7turWlXfQXOs6QxbdtLym';
    var searchQ = $('#searchQ').val();
    var numResults = $('#numResults').val().trim();
    var q = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQ}&api-key=${apiKey}`;
    console.log(q);
    $.ajax({
        url: q,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.response.docs;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var newDiv = $('<div>');
            var newHeader = $('<h3>');
            var newPara = $('<p>');
            var byline = $('<p>');
            var newAnch = $('<a>');
            newHeader.text(results[i].headline.main);
            newPara.text(results[i].abstract);
            byline.text(results[i].byline.original);
            newAnch.attr('href', results[i].web_url);
            newAnch.append(newHeader);
            newDiv.append(newAnch);
            newDiv.append(newPara);
            newDiv.append(byline);
            $('#results').prepend(newDiv);
        }
    })
})