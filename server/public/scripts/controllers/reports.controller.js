hrApp.controller('ReportsController', [ '$http', function($http) {
	const self = this;


	self.getEmployeeList = function() {
		$http.get('reports/list')
			.then (function (response) {
				console.log('received employee count', response.data.count);
				self.count = response.data.count;
			})
			.catch (function (response) {
				console.log('error in employee count');
			});
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


self.getAverageSalary = function(){
	$http.get('/reports')
		.then (function (response) {
			console.log('Received report average salary data response -', response);
			self.employeeData = response.data;
			let totalSalary = 0;
			self.maxSalary = self.employeeData[0].salary
			self.lowestSalary = self.employeeData[0].salary;

			//Calculate the average salary
			for (i=0; i < self.employeeData.length; i++){
				totalSalary = totalSalary + self.employeeData[i].salary;
				//Create if to get lowest salary
				if (self.employeeData[i].salary < self.lowestSalary){
					self.lowestSalary = self.employeeData[i].salary
				}
				//Create if to get max salary
				if (self.employeeData[i].salary > self.lowestSalary){
					self.maxSalary = self.employeeData[i].salary
				}

			}



			self.salaryAverage = Number(totalSalary) / Number(self.employeeData.length);

		})
		.catch (function (response) {
			console.log('Received report average salary error on get request')
		})
}


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
