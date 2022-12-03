package com.eventrecord.home.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class EventRecordDAOImpl implements EventRecordDAO{
	
	@Autowired
	private SqlSession sqlSession;	
	private static final String Namespace = "com.common.home.mapper.EventRecordMapper";
	
	@Override
	public void createEventRecordTable() {
		String methodName = Namespace + "." + new Object(){}.getClass().getEnclosingMethod().getName();
		sqlSession.update(methodName); 
	}

}
