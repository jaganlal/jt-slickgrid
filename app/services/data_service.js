/* src"app/services/data_service.js" */
angular.module('jtSlickGridApp')
  .factory('data_services', ['$http', '$q', '$log', '$timeout',
    function($http, $q, $log, $timeout) {
      var secretsUrl = "";

      var secrets = [{
          title: "google",
          pwd: "khuljasimsim"
        },

        {
          title: "yahoo",
          pwd: "khuljasimsim"
        },

        {
          title: "abc-bank",
          pwd: "khuljasimsim"
        }
      ];

      function delayTheResponse(data, delay) {
        var deferred = $q.defer();

        $timeout(function() {
          deferred.resolve(data);
        }, delay);

        return deferred.promise;
      }

      function getSecrets() {
        return delayTheResponse(secrets, 2000);
      }

      function getData(url) {
        var responseDummyData = null;
        return delayTheResponse(responseDummyData, 2000);
        /*
        return $http.get(url)
                .then(
                  function success(response) {
                    return response.data;
                  }, 
                  function error(e) {
                    return $q.reject("ERROR");
                  });
        */
      }

      function postData(url, data) {
        // var dummyData = null;
        // if(url === "login") {
        //   dummyData = {
        //     email: "a@a.com", 
        //     password: "aaaaa";
        //   }
        // }

        return delayTheResponse(data, 2000);
      }

      function getDataFromUrls(urls) {
        var deferred = $q.defer();
        var urlCalls = [];

        angular.forEach(urls, function(url) {
          urlCalls.push($http.get(url));
        });

        $q.all(urlCalls)
          .then(
            function success(response) {
              deferred.resolve(response);
            },
            function error(errors) {
              deferred.reject(errors);
            },
            function update(updates) {
              deferred.notify(updates);
            });

        return deferred.promise;
      }

      return {
        getSecrets: getSecrets,
        getData: getData,
        postData: postData,
        getDataFromUrls: getDataFromUrls
      };
    }
  ]);
