hrApp.controller('TrackController', ['$http', function($http){
    console.log('Track Controller added');
    
    self = this;
    self.employees = [];

    self.getEmployees = function(){
        $http.get('/track')
        .then(function(response){
            console.log('Get response', response);
            self.employees = response.data;
            for (let i = 0; i < self.employees.length; i++) {
                self.employees[i].edit = true;
            } 
        })
        .catch(function(response){
            console.log('error on get', response); 
        });
    }

    self.editEmployee = function(employee){
        console.log('hey');
        employee.edit = false;
    }

    self.confirmEdit = function(employee){
        console.log('There');
        
    }

    self.getEmployees();
}]);