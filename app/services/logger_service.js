/* src="app/services/logger_service.js" */
angular.module('jtSlickGridApp')
  .factory('logger_service', [function() {
    function log(message, severity) {
      switch (severity) {
        case "LOG":
          console.log(message);
          break;

        case "INFO":
          console.info(message);
          break;

        case "WARN":
          console.warn(message);
          break;

        case "ERROR":
          console.error(message);
          break;

        default:
          console.log(message);
          break;
      }
    }

    return {
      log: log
    };
  }]);
