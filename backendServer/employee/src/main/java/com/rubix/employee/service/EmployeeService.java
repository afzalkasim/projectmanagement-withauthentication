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
    	existingemployee.setFirstName(employee.getFirstName());
    	existingemployee.setLastName(employee.getLastName());
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
	
	public Employee fetchEmployeeByEmail(String email) {
		return employeeRepository.findByEmail(email);
	}
	
	public Employee fetchEmployeeByEmailAndPassword(String email, String password) {
		return employeeRepository.findByEmailAndPassword(email, password);
	}
	
	 public Employee registerEmployee(Employee employee) throws Exception {
		    String tempEmail= employee.getEmail();
		    if(tempEmail != null && !"".equals(tempEmail)) {
		    	Employee employeeObj = fetchEmployeeByEmail(tempEmail);
		    	if(employeeObj != null) {
		    		throw new Exception("employee with "+tempEmail+" is already exist ");
		    	}
		    }
	    	Employee employeeObj= null;
	    	employeeObj = employeeRepository.save(employee);
	    	return employeeObj;
	    }
	 
	 public Employee loginEmployee(Employee employee) throws Exception {
		 String tempEmail = employee.getEmail();
		 String tempPass = employee.getPassword();
		 Employee employeeObj = null;
		 if(tempEmail != null && tempPass != null) {
			employeeObj = fetchEmployeeByEmailAndPassword(tempEmail, tempPass); 
		 }
		 if(employeeObj == null) {
			 throw new Exception("Login failed");
		 }
		 return employeeObj;
	 }

}
