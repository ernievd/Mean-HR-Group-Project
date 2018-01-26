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
        employee.edit = false;
    }

    self.confirmEdit = function(employee){
        $http.put(`/track/${employee._id}`, employee)
            .then(function(response){
                console.log('Put response', response);
                employee.edit = true;
                self.getEmployees();
            })
            .catch(function(response){
                console.log('error on put', response); 
            });   
    }

    self.deleteEmployee = function(employeeId){
        $http.delete(`/track/${employeeId}`)
            .then(function(response){
                console.log('Delete Success:', response); 
                self.getEmployees();
            })
            .catch(function(response){
                console.log('error on Delete', response); 
            });
    }

    self.getEmployees();
}]);