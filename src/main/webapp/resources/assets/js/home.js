$(function(){
	//$blockScreen.initialize();
	$menu.set = {
			'Record Viewer':function(){
				location.href="/EventRecorder/views";
				$menu.close();
			},
			'Add Test Record':function(){
				$.ajax({
					url:'/EventRecorder/rest/add-test-data',
					type:'POST',
					success:function(){
						alert('성공');
					},error:function(data){
						alert(data.responseJSON.msg);
					},complete:function(){
						
					}
				});
				$menu.close();
			}
		};
});