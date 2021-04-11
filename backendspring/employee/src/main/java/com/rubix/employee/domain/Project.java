package com.rubix.employee.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="projectmanagement" ,schema = "public" )
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long projectId;
	private String clientName;
    private String projectName;
    private String projectType;
    private String projectDescription;
    private String projectManager;
    private String startDate;
    private String endDate;
	
    public Project() {
		
	}

	public Project(long projectId, String clientName, String projectName, String projectType,
			String projectDescription, String projectManager, String startDate, String endDate) {
		super();
		this.projectId = projectId;
		this.clientName = clientName;
		this.projectName = projectName;
		this.projectType = projectType;
		this.projectDescription = projectDescription;
		this.projectManager = projectManager;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public long getProjectId() {
		return projectId;
	}

	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectType() {
		return projectType;
	}

	public void setProjectType(String projectType) {
		this.projectType = projectType;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}

	public String getProjectManager() {
		return projectManager;
	}

	public void setProjectManager(String projectManager) {
		this.projectManager = projectManager;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
    
    
    
    

}
