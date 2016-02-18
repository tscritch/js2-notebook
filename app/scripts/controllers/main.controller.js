(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name js2NotebookApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the js2NotebookApp
   */
  angular.module('js2NotebookApp')
    .controller('MainCtrl', function () {
      var vm = this;

      vm.mems = [
        { 'title': 'mem1', 'note': 'Locavore put a bird on it helvetica, 90\'s church-key pitchfork skateboard PBR&B. Brunch XOXO vice, art party gochujang ugh lomo keytar.'},
        { 'title': 'mem2', 'note': 'Meditation skateboard single-origin coffee, paleo celiac chia keytar literally retro kale chips.'}
      ];
    });

}());
