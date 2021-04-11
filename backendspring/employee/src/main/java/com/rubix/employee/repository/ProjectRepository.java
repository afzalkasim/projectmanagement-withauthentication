package com.rubix.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.rubix.employee.domain.Project;


@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{

	Project findByProjectId(long id);
}