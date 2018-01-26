myApp.controller('AddController', ['$http', function($http) {
    const self = this;


self.addEmployee = function(employee) {
    $http.post('/employees', employee)
        .then(function(response) {
            console.log('post response', response);
            self.getEmployees();
        })
        .catch(function (response) {
            console.log('error on post', response);
        });
}