$(document).ready(function () {
    // Click event for Read More button
    $('.read-more-btn').on('click', function () {
        // Get the article ID from the data attribute
        var articleId = $(this).closest('.article-box').data('article-id');
        // Redirect to the actual article page (replace with your actual URL)
        window.location.href = 'article.php?id=' + articleId;
    });

    // Click event for like and dislike buttons
    $('.like, .dislike').on('click', function () {
        // Increment or decrement the respective count (replace with your logic)
        var count = parseInt($(this).next().text());
        $(this).next().text(count + 1);
    });
});