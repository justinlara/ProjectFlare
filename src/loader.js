
(function() 
{
    var resource = {};
    //var loading = [];
    var readyQueue = [];


    function load(url) 
    {
        if(resource[url]) 
        {
            return resource[url];
        }
        else 
        {
            var img = new Image();
            img.onload = function() 
            {
                resource[url] = img;
                
                if(isReady())
                 {
                    readyQueue.forEach(function(func) 
                                            { 
                                                func(); 
                                             });
                }
            };
            resource[url] = false;
            img.src = url;
        }
    }

    function get(url) 
    {

        return resource[url];
    }

    function isReady() 
    {
        var ready = true;
        for(var k in resource) 
        {
            if(resource.hasOwnProperty(k) &&
               !resource[k]) 
            {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) 
    {
        readyQueue.push(func);
    }

    window.loader = 
    { 
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();