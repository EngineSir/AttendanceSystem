package io.dtchain.entity;

public class DeptInfo {
	private String id;
	private String deptName;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	@Override
	public String toString() {
		return "DeptInfo [id=" + id + ", deptName=" + deptName + "]";
	}
}
