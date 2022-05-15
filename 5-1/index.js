$(function() {
    $.getJSON("http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=42cfc382-f2b8-4c3a-87ad-37249634f78e", function(data) {
    	console.log(data);
    });
});



// https://json2jsonp.com/?url=http://domain.com/some/json&callback=cbfunc
// http://data.taipei/opendata/datalist/datasetMeta?oid=6fa3ed67-e60e-44d9-a366-ce7008e322de

// http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=42cfc382-f2b8-4c3a-87ad-37249634f78e








