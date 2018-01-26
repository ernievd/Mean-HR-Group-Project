hrApp.controller('ReportsController', [ '$http', function($http) {
	const self = this;

	self.getAverageSalary = function(){
		$http.get('/reports')
			.then (function (response) {
				console.log('Received report average salary data response -', response);
				self.employeeData = response.data;
			})
			.catch (function (response) {
				console.log('Received report average salary error on get request')
			})
	}
	self.getEmployeeCount = function() {
		$http.get('reports/count')
			.then (function (response) {
				console.log('received employee count', response.data.count);
				self.count = response.data.count;
			})
			.catch (function (response) {
				console.log('error in employee count');
			});
	}
	self.getEmployeeCount();

	// self.getAverageSalary = function(){
	// 	$http.get('/reports/average')
	// 		.then (function (response) {
	// 			console.log('Received report average salary data response -', response);
	// 			self.employeeAverageSalary = response.data;
	// 		})
	// 		.catch (function (response) {
	// 			console.log('Received report average salary error on get request')
	// 		})
	// }




}]);
