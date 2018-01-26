hrApp.controller('ReportsController', [ '$http', function($http) {
	const self = this;


	self.getEmployeeList = function() {
		$http.get('reports/list')
			.then (function (response) {
				console.log('received employee list', response.data.employeesList);

				// let jobsList = response.data.employeesList;
				// self.jobsList = [];
				// for (let i = 0; i < jobsList; i++) {
				// 	if (i > 0) {
				// 		if (jobsList[i].title === jobsList[i-1].title) {
				// 		}
				// 	}
				// 	self.jobsList.push()
				// }

				self.employeeList = response.data.employeesList;
			})


			.catch (function (response) {
				console.log('error in employee list', response);
			});
	}
	self.getEmployeeList();


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



			salaryAverage = Number(totalSalary) / Number(self.employeeData.length);
			self.salaryAverage = salaryAverage.toFixed(2)

		})
		.catch (function (response) {
			console.log('Received report average salary error on get request')
		})
}
	self.getAverageSalary();


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
