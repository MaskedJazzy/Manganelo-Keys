(function() {
  let chapterID = window.location.href.match(/manga-(.{8})\/chapter-(.*)/)[2];
  let mangaID = window.location.href.match(/manga-(.{8})\/chapter-(.*)/)[1];

  function goToChapter(chapter) {
    let chapterURL = `https://chapmanganato.com/manga-${mangaID}/chapter-${chapter}`;
    window.location.href = chapterURL;
  }

  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
      goToChapter(parseInt(chapterID) - 1);
    } else if (event.code === 'ArrowRight') {
      goToChapter(parseInt(chapterID) + 1);
    }
  });
})();
