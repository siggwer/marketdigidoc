//Load more
$(function () {
    var page = 1;

    $("#load-more").on("click", function () {
        page++;

        $.ajax({
            url: "/document/document",
            data: {
                page: page
            },
            success: function (html) {
                $("#documents").append(html);
            }
        });
    })
})