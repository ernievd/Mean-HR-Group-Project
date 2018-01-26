hrApp.controller('AddController', ['$http', function ($http) {
    const self = this;

    self.newEmployee = {};
    self.employees = [];

    self.addEmployee = function (employee) {
        $http.post('/employees', employee)
            .then(function (response) {
                console.log('post response', response);
                self.newEmployee = {};
            })
            .catch(function (response) {
                console.log('error on post', response);
            });
    }
}]);