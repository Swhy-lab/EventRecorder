package com.eventrecord.home.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.eventrecord.home.dao.EventRecordDAO;
import com.eventrecord.home.domain.EventRecord;
import com.eventrecord.home.utils.Obj2Json;

@Service
public class EventRecordServiceImpl implements EventRecordService{

	@Autowired
	private EventRecordDAO eventRecordDao;
	
	@Override
	public void createTables() throws Exception {
		// TODO Auto-generated method stub
		eventRecordDao.createEventRecordTable();
	}

	@Override
	public void updateTables() throws Exception {
		// TODO Auto-generated method stub
		
	}
	@Transactional(isolation=Isolation.READ_COMMITTED)
	@Override
	public void addExampleEventRecord() throws Exception {
		// TODO Auto-generated method stub		
		Map<String, String> map = new HashMap<String, String>();
		map.put("msg", "test");		
		
		EventRecord eventRecord = new EventRecord();
		eventRecord.setIp("127.0.0.1");		
		eventRecord.setDate(new Date());
		eventRecord.setContent(Obj2Json.toJSONString(map));
		eventRecord.setType("TEST");
		eventRecordDao.addEventRecord(eventRecord);
	}
}
