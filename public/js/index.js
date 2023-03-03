$(document).ready(function () {
  const NOWON_CLASSNAME = 'nowOn';

  //
  /* space info page -> 시설 안내 */
  $('.info-sort__item .thumb__item').on('click', function () {
    const spaceId = $(this).attr('id');

    $('.info-sort__item .thumb__item').removeClass(NOWON_CLASSNAME);
    $(this).addClass(NOWON_CLASSNAME);

    $('.space-info__wrap')
      .attr('class', '')
      .addClass(`space-info__wrap ${spaceId}`);
  });

  //
  /* 예약하기 페이지 -> 공간 선택 */
  $('.space-btn__list .space-btn').on('click', function () {
    const spaceId = $(this).attr('id');

    $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);

    $('.space-info__wrap')
      .attr('class', '')
      .addClass(`space-info__wrap ${spaceId}`);
  });
});
