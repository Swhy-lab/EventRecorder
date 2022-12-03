<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

	        
<style>
.footer-style{
	width:100vw;
    color: snow;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: center;
    box-shadow: 1px -3px 23px 3px rgba(0, 0, 0, 0.5);
}
.footer-item{
	width:100%;
	display:flex;
	text-align:center;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-content: center;
	font-size: 3vh;
	align-items: stretch;
	cursor:pointer;
}
</style>       
        
        
	
	
<div id="footer" class="footer-style">

	<div class="footer-item" onclick="location.href='/EventRecorder'">
	Home
	</div>

	<div class="footer-item" onclick="$menu.start();">
	Menu
	</div>

</div>