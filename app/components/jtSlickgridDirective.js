  angular.module('jtSlickGridApp')
  .directive('jtSlickgrid', [function() {
    return {
      restrict: 'EA',
      scope: {
        jtGridOptions: '='
      },

      compile: compile
    };

    function compile(tElement, tAttrs) {
      console.log("Inside compile");
      return {
        post: link
      }
    }

    function link(scope, iElement, iAttrs) {
      var dataView = new Slick.Data.DataView();
      dataView.setItems(scope.jtGridOptions.data);
      
      var grid = new Slick.Grid(iElement, dataView, scope.jtGridOptions.columns, scope.jtGridOptions.options);
    }
}]);