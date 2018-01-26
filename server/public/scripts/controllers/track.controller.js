hrApp.controller('TrackController', ['$http', function($http){
    console.log('Track Controller added');
    
    self = this;
    self.employees = [];

    self.getEmployee = function(){
        $http.get('/track')
        .then(function(response){
            console.log('Get response', response);
            self.employees = response.data;
        })
        .catch(function(response){
            console.log('error on get', response); 
        });

    }
    self.getEmployee();
}]);