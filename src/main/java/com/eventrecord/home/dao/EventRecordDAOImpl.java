package com.eventrecord.home.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.eventrecord.home.domain.EventRecord;
import com.eventrecord.home.domain.SearchParameter;

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

	@Override
	public List<EventRecord> getRecordList(SearchParameter searchParam) {
		// TODO Auto-generated method stub
		String methodName = Namespace + "." + new Object(){}.getClass().getEnclosingMethod().getName();
		return sqlSession.selectList(methodName, searchParam);
	}

	@Override
	public int getRecordListCount(SearchParameter searchParam) {
		// TODO Auto-generated method stub
		String methodName = Namespace + "." + new Object(){}.getClass().getEnclosingMethod().getName();
		return sqlSession.selectOne(methodName, searchParam);
	}

	@Override
	public void addEventRecord(EventRecord eventRecord) {
		// TODO Auto-generated method stub
		String methodName = Namespace + "." + new Object(){}.getClass().getEnclosingMethod().getName();
		sqlSession.insert(methodName, eventRecord);
	}

	@Override
	public EventRecord getRecord(SearchParameter searchParam) {
		// TODO Auto-generated method stub
		String methodName = Namespace + "." + new Object(){}.getClass().getEnclosingMethod().getName();
		return sqlSession.selectOne(methodName, searchParam);
	}
	
	
}
