package com.rubix.employee.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.rubix.employee.domain.Employee;
import com.rubix.employee.service.EmployeeService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/getemployeelist")
    public List<Employee> getAllEmployees() {
        return employeeService.getEmployees();
    }

   @GetMapping("/getemployeebyid/{id}")
    public Employee getEmployeeById(@PathVariable(value="id") long id){
       return employeeService.getEmployeeById(id);
        
    }
    
    @PostMapping("/createemployee")
    public Employee createEmployee(@RequestBody Employee employee) {
    	 return employeeService.createEmployee(employee);
    }
    @PutMapping("/updateemployee/{id}")
    public String updateEmployee(@PathVariable(value = "id") long id,@RequestBody Employee employee){
    	
    	return employeeService.updateEmployee(id, employee);
    }
    @DeleteMapping("/deleteemployeebyid/{id}")
    public String deleteEmployee(@PathVariable(value="id") long id) {
    	return employeeService.deleteEmployee(id);
    }
    
    @PostMapping("/registeremployee")
    public Employee registerEmployee(@RequestBody Employee employee) throws Exception {
    	return employeeService.registerEmployee(employee);
    }
    @PostMapping("/employeelogin")
    public Employee loginEmployee(@RequestBody Employee employee) throws Exception {
    	return employeeService.loginEmployee(employee);
    }

   
}
