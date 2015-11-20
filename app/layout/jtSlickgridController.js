angular.module('jtSlickGridApp')
.controller('jtSlickGridCtrl', [ '$scope', 'data_services', 'logger_service', 
  function($scope, data_services, logger_service) {
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

function DummyLinkFormatter(row, cell, value, columnDef, dataContext) {
  return '<a href="#">' + value + '</a>';
}