$(document).ready(function () {
  const NOWON_CLASSNAME = 'nowOn';

  /** 모달 핸들러 START */
  const sModHandler = {
    modOn: function (clicker, modalName) {
      $(clicker).on('click', function (e) {
        $(modalName).addClass(NOWON_CLASSNAME);
        e.preventDefault();
        $(`${modalName} .modal-bg`).on(
          'scroll touchmove mousewheel',
          function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        );
      });
    },
    modOff: function (clicker, modalName) {
      $(clicker).on('click', function (e) {
        $(modalName).removeClass(NOWON_CLASSNAME);
        e.preventDefault();
        $(`${modalName} .modal-bg`).off('scroll touchmove mousewheel');
        console.log('sss');
      });
    },
  };

  sModHandler.modOn('#timeSelector', '#modalTimeTable');
  sModHandler.modOff('.btn--modal-cls button', '.modal__container');
  sModHandler.modOff('.btn--modal-goback button', '.modal__container');
  // sModHandler.modOff('.btn--modal-cls button', '#modalTimeTable');
  // sModHandler.modOff('.btn--modal-goback button', '#modalTimeTable');
  /** 모달 핸들러 END */
});
