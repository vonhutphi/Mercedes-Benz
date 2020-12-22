showMore('btnShowMore-New', 'thumb-read-more');
showMore('btnShowMore-Popular', 'thumb-read-more-2');
showMore('btnShowMore-Video', 'thumb-read-more-3');

function showMore(idButton, classShowMore) {
    document.getElementById(idButton).addEventListener('click', function() {
        var list = document.getElementsByClassName(classShowMore);
        for (var i = 0; i < list.length; i++) {
            list[i].style.display = 'block';
        }
        document.getElementById(idButton).style.display = 'none';
    })
}