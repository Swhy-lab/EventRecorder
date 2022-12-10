$(function(){
	getRecordList();
});
function makeTableItem(er_id, createDate, ip, type, content){
	const $item = `
			<li class="item">
                <div class="li-first-info">
	                    <span>${er_id}</span>
	                    <span>${ip}</span>
	                    <span>${type}</span>
						<span>${createDate}</span>
        		</div>
                <div>
                    <p class='content'>${content}</p>
                </div>
        	</li>
	`;
	return $item;
}

function getRecordList(){
	searchParam = {
		name:'name'
	}
	getRecordListData(searchParam, function(data){
		items = [];
		if(data.count < 1){
			return;
		}
		for(item of data.list){
			items.push(makeTableItem(item.er_id, item.createDate, item.ip, item.type, item.content));	
		}
		$("#item-box").html(items);
	});
}

function getRecordListData(searchParam, callback){
	$.blockUI({message : "<input type='button' value='모달닫기' onclick='javascript:$.unblock();' />"});
	$.ajax({
		url:'/EventRecorder/rest/get-record-data-list',
		type:'POST',
		data: JSON.stringify(searchParam),
		contentType:'application/json; charset=utf-8',
		success:function(data){
			callback(data);
		}, error:function(e){
			alert(e.responseJSON.msg);
		}, complete:function(){
			$.unblockUI();
		}
	});
}