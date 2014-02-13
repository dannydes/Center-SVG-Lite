exports.main = function() {
    var pageMod = require("page-mod");
    var data = require("self").data;
    
    pageMod.PageMod({
        include: "*",
        contentStyleFile: [data.url("styles_center.css"),
                        data.url("styles_background.css")]
    });
};