package io.dtchain.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import io.dtchain.entity.EmpInfo;
import io.dtchain.service.MangageService;
import io.dtchain.utils.Result;

/**
 * 
 * 员工管理
 */
@Controller
@RequestMapping("/mangage")
public class MangageController {

	@Resource
	private MangageService mangageService;

	@RequestMapping("/login.io")
	@ResponseBody
	/**
	 * 登录校验
	 */
	public Result<Object> login(String adminName, String adminPassword, HttpServletResponse res) {
		Result<Object> result = mangageService.login(adminName, adminPassword, res);
		return result;
	}

	@RequestMapping("/addEmp.io")
	@ResponseBody
	/**
	 * 添加员工
	 */
	public Result<Object> addEmp(EmpInfo emp) {
		Result<Object> result = mangageService.addEmp(emp);
		return result;
	}

	// 查询员工信息
	@RequestMapping("/allSearch.io")
	@ResponseBody
	public Result<List<EmpInfo>> queryEmpInfo( String value, int page) {
		Result<List<EmpInfo>> result = mangageService.queryEmpInfo( value, page);
		return result;
	}

	// 删除员工信息
	@RequestMapping("/delEmpInfo.io")
	@ResponseBody
	public Result<Object> delEmpInfo(String empId) {
		Result<Object> result = mangageService.delEmpInfo(empId);
		return result;
	}

	// 更新员工信息
	@RequestMapping("/upEmpInfo.io")
	@ResponseBody
	public Result<Object> upEmpInfo(EmpInfo emp) {
		Result<Object> result = mangageService.upEmpInfo(emp);
		return result;
	}
}
