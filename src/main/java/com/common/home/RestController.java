package com.common.home;

import java.text.DateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.common.home.dao.CommonDAO;
import com.eventrecord.home.dao.EventRecordDAO;
import com.eventrecord.home.domain.EventRecord;
import com.eventrecord.home.service.EventRecordService;
import com.eventrecord.home.utils.Obj2Json;
import com.eventrecord.home.utils.FunctionStore.PageParameter;
import com.eventrecord.home.utils.FunctionStore.SearchParameter;



/**
 * Handles requests for the application home page.
 */
@Controller
@ResponseBody
@RequestMapping(value="/EventRecorder/rest",  produces = "application/json; charset=UTF-8")
public class RestController {
	
	private static final Logger logger = LoggerFactory.getLogger(RestController.class);

	@Autowired
	private EventRecordService eventRecordService;
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@ResponseBody
	@RequestMapping(value = "/add-test-data", method = RequestMethod.POST)
	public String addTesetData(HttpServletResponse response) throws Exception {
		Map<String, String> res = new HashMap<String, String>();
		try {			
			eventRecordService.addExampleEventRecord();
			res.put("msg", "success");
		}catch(Exception e) {
			res.put("msg", "failed");
			response.setStatus(HttpStatus.SC_FORBIDDEN);
			e.printStackTrace();
		}
		return Obj2Json.toJSONString(res);
	}
	@ResponseBody
	@RequestMapping(value = "/get-record-data-list", method = RequestMethod.POST)
	public String getRecordDataList(HttpServletResponse response) throws Exception {
		Map<String, String> res = new HashMap<String, String>();
		PageParameter<EventRecord> page = null;
		try {			
			
			SearchParameter searchParameter = new SearchParameter();			
			page = eventRecordService.getEventRecordPages(searchParameter);
			
			
		}catch(Exception e) {
			res.put("msg", "failed");
			logger.error("/get-record-data-list : "+e.getMessage());
			response.setStatus(HttpStatus.SC_FORBIDDEN);
			e.printStackTrace();
			return Obj2Json.toJSONString(res);
		}
		return Obj2Json.toJSONString(page);
	}
	
}
