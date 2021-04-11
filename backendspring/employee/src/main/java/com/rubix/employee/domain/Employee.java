package com.rubix.employee.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employees" ,schema = "public" )
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long employeeId;
	private String name;
    private String contactNumber;
    private String email;
    private String location;
	 
    public Employee() {

	}
    
	public Employee(long employeeId, String name, String contactNumber, String email, String location) {
		super();
		this.employeeId = employeeId;
		this.name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.location = location;
	}

	public long getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
}  
  
