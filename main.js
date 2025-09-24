document.addEventListener('DOMContentLoaded', function () {

  var markerText = document.querySelectorAll('.js-marker'); // 監視対象を選択
  var markerTextArr = Array.prototype.slice.call(markerText); // 監視対象をArrayに変換（IE対策）

  /* IntersectionObserverに渡すコールバック関数 */
  var cb = function (entries, observer) {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        /* 監視対象が画面内に入ったときのアクション */
        entry.target.classList.add('inview'); // 画面内に入った要素にinviewクラスを付与
        observer.unobserve(entry.target); // 1度発火した後監視を止める
      }

    });
  }

  /* IntersectionObserverに渡すコールバック関数 */
  var options = {
    rootMargin: "-50px 0px"
  }

  /* IntersectionObserver初期化 */
  var io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100; // Polyfillの設定

  markerTextArr.forEach(el => {
    io.observe(el);
    // 最初から画面内にある要素にも inview クラスを付与
    const rect = el.getBoundingClientRect();
    if (
      rect.top < window.innerHeight - 50 &&
      rect.bottom > 0
    ) {
      el.classList.add('inview');
      io.unobserve(el);
    }
  });

});
const liElement = document.querySelector('li');
function Tohref(liElement) {
  const hrefValue = liElement.getAttribute('data-href');
  // alert("test");
  window.location.href = hrefValue;
}