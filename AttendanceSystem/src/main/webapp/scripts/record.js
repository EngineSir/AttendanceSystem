//检索信息
function searchInfo() {
	var name = $("#name").val();
	var dept = $("#dept").combobox("getText");

	// 需要转化日期格式且转换为Date对象
	var start = calecon($("#start").val().trim());
	;
	var end = calecon($("#end").val().trim());
	// 判断检索条件
	if ($("#start").val().trim() != "" && $("#end").val().trim() != ""
			&& end >= start) {
		// deleteDataGrid();
		queryCount();
	}
}
function createTable(name, dept, dates, workMorn, atNoon, workAfter, atNight) {
	$('#tt').datagrid('insertRow', {
		row : {
			name : name,
			dept : dept,
			cale : dates,
			Mwork : workMorn,
			Mduty : atNoon,
			Awork : workAfter,
			Eduty : atNight
		}
	});
}
function queryCount() {
	var count = 0;
	var name = $("#name").val();
	var dept = $("#dept").combobox("getText");

	// 需要转化日期格式且转换为Date对象
	var start = calecon($("#start").val().trim());
	;
	var end = calecon($("#end").val().trim());
	// 判断检索条件
	if ($("#start").val().trim() != "" && $("#end").val().trim() != ""
			&& end >= start) {

		$.ajax({
			url : path + "/record/queryCount.io",
			type : "post",
			dataType : "json",
			data : {
				"empName" : name,
				"empDept" : dept,
				"start" : start,
				"end" : end
			},
			async : false,
			success : function(result) {
				count = result.data;
			},
			error : function() {
				alert("查询总数出错");
			}
		});
	}
	layui.use([ 'laypage', 'layer' ], function() {

		var laypage = layui.laypage, layer = layui.layer;
		// 自定义排版
		laypage.render({
			elem : 'pagination',
			count : count,
			theme : '#FFB800',
			groups : 4,
			jump : function(obj, first) {
				var str = "第"
						+ ((obj.curr - 1) * 10 + 1)
						+ "条到第"
						+ (obj.curr * 10 > obj.count ? obj.count
								: obj.curr * 10) + "条，共" + (obj.count) + "条";
				$("#countRed").text(str);
				paging(name, dept, start, end, obj.curr);

			}
		});
	});

}

/*
 * 点击其他页数
 */
function paging(name, dept, start, end, currPage) {
	$.ajax({
		url : path + "/record/otherPage.io",
		type : "post",
		dataType : "json",
		data : {
			"empName" : name,
			"empDept" : dept,
			"start" : start,
			"end" : end,
			"page" : currPage
		},
		success : function(result) {
			deleteDataGrid();
			if (result.state == 1) {
				var data = result.data
				for (var i = 0; i < data.length; i++) {
					createTable(data[i].empName, data[i].dept, data[i].dates,
							data[i].workMorn, data[i].atNoon,
							data[i].workAfter, data[i].atNight);
				}

			} else {
				createTable("未查询到结果！");
			}
		},
		error : function() {
			alert("分页查询失败");
		}
	});
}

/*
 * 数据导出
 */
function dataImport() {
	var name = $("#name").val();
	var dept = $("#dept").combobox("getText");

	// 需要转化日期格式且转换为Date对象
	var start = calecon($("#start").val().trim());
	;
	var end = calecon($("#end").val().trim());
	// 判断检索条件
	if ($("#start").val().trim() != "" && $("#end").val().trim() != ""
			&& end >= start) {
		location.href = path + "/record/downloadExcel.io?name=" + name
				+ "&dept=" + dept + "&start=" + start + "&end=" + end;
	}
}