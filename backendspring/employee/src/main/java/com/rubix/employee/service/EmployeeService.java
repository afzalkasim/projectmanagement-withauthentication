package com.rubix.employee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;
import com.rubix.employee.domain.Employee;
import com.rubix.employee.repository.EmployeeRepository;


@Service
public class EmployeeService {
	
	@Autowired
	 private EmployeeRepository employeeRepository;
	
	public List<Employee> getEmployees() {
		return employeeRepository.findAll();
	}
	
	public Employee getEmployeeById(long id) {
		return employeeRepository.findByEmployeeId(id);
	}
	
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	public String updateEmployee(long id,Employee employee) {
		Employee existingemployee = employeeRepository.findByEmployeeId(id);
    	existingemployee.setName(employee.getName());
    	existingemployee.setContactNumber(employee.getContactNumber());
    	existingemployee.setEmail(employee.getEmail());
    	existingemployee.setLocation(employee.getLocation());
    	employeeRepository.save(existingemployee);
    	return "successfully updated";
	}
	
	public String deleteEmployee(long id) {
		employeeRepository.deleteById(id);
		return "successfully deleted";
	}

}
