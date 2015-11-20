angular.module('jtSlickGridApp', []);

angular.module('jtSlickGridApp')
  .controller('jtSlickGridCtrl', [ '$scope', 
    function($scope) {
      this.jtGridOptions = {
        options: {
          enableCellNavigation: true,
          enableColumnReorder: false,
          forceFitColumns: true,
          rowHeight: 35
        }, 

        columns: [
                  {id: "title", name: "Title", field: "title", width: 200, formatter: DummyLinkFormatter},
                  {id: "duration", name: "Duration", field: "duration", width: 100},
                  {id: "%", name: "% Complete", field: "percentComplete", width: 100},
                  {id: "start", name: "Start", field: "start", width: 150},
                  {id: "finish", name: "Finish", field: "finish", width: 150},
                  {id: "effort-driven", name: "Effort Driven", field: "effortDriven", width: 100}
                ],
        data: []
      }

      var data = [];
      for (var i = 0; i < 20; i++) {
        data[i] = {
          id: 'id_' + i, // needed for DataView
          title: "Task " + i,
          duration: "5 days",
          percentComplete: Math.round(Math.random() * 100),
          start: "01/01/2009",
          finish: "01/05/2009",
          effortDriven: (i % 5 == 0)
        };
      }
      this.jtGridOptions.data = data;
    } //controller function 
  ]);

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

  function DummyLinkFormatter(row, cell, value, columnDef, dataContext) {
    return '<a href="#">' + value + '</a>';
  }