hrApp.controller('AddController', ['$http', function ($http) {
    const self = this;

    self.newEmployee = {};
    self.employees = [];

    self.addEmployee = function (employee) {
        $http.post('/employees', employee)
            .then(function (response) {
                console.log('post response', response);
                self.getEmployees();
            })
            .catch(function (response) {
                console.log('error on post', response);
            });
    }

    self.getEmployees = function() {
        $http.get('/employees')
            .then(function (response) {
                // console.log('get response', response);
                self.games = response.data;
            })
            .catch(function (response) {
                console.log('error on get games', response);
            });
    }

    self.getEmployees();
}]);