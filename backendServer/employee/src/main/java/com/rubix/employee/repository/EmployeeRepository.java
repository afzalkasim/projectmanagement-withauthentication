package com.rubix.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rubix.employee.domain.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	Employee findByEmployeeId(long id);
	Employee findByEmail(String email);
	Employee findByEmailAndPassword(String email, String password);
}