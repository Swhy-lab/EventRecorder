$(function(){
	
});

function getRecordList(){
	getRecordListData({}, function(data){
		alert(data);
	});
}

function getRecordListData(seachParam, callback){
	$.ajax({
		url:'/EventRecorder/rest/get-records',
		type:'POST',
		data: JSON.stringify(searchParam),
		contentType:'application/json; charset=utf-8',
		success:function(data){
			callback(data);
		}, error:function(e){
			alert(e.responseJSON.msg);
		}, complete:function(){
			
		}
	});
}