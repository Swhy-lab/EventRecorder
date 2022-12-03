package com.eventrecord.home.service;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.eventrecord.home.dao.EventRecordDAO;

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
	

}
