angular.module('app.reportController', [])
  .controller('reportController', ['$scope', '$http',
    function ($scope, $http) {

      let userId = localStorage.getItem("user_id");
      $http.get('https://webapisecuredbb.azurewebsites.net/user/' + userId + '/documents')
        .then(function (success) {
          let documentsData = success.data;

          if (documentsData.length) {
            $scope.docItems = sortData(documentsData);
          }
        });
    }]);

function sortData(dataSet) {
  return dataSet.filter(document => document.requestors.length)
    .map(filteredDocument => {
      return filteredDocument.requestors.map(requestor => {
        return {
          documentName: filteredDocument.docName, documentType: filteredDocument.docType,
          requestorName: requestor.reqName, requestedDate: requestor.date,
          requestStatus: requestor.status
        }
      })
    }).reduce((acc, flatSet) => acc.concat(flatSet), []).sort(function (a, b) {
      return new Date(b.requestedDate) - new Date(a.requestedDate);
    });
}