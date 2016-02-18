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
    .controller('MemorandumController', function () {
      var vm = this;

      if(localStorage.memorandums) {
        vm.memorandums = JSON.parse(localStorage.memorandums);
      }
      else {
        vm.memorandums = [{ 'title': 'mem2', 'note': 'Locavore put a bird on it helvetica, 90\'s church-key pitchfork skateboard PBR&B. Brunch XOXO vice, art party gochujang ugh lomo keytar.'},
        { 'title': 'mem1', 'note': 'Meditation skateboard single-origin coffee, paleo celiac chia keytar literally retro kale chips.'}];
      }

      vm.addMemorandum = function() {
        vm.memorandums.unshift({'title': 'Title', 'note': 'add some notes here...'});
        console.log(vm.memorandums);
        vm.saveAll();
      };

      vm.deleteMemorandum = function(index) {
        console.log(index);
        vm.memorandums.splice(index, 1);
        console.log(vm.memorandums);
        vm.saveAll();
      };

      vm.saveAll = function() {
        localStorage.memorandums = JSON.stringify(vm.memorandums);
      };

    })
}());
