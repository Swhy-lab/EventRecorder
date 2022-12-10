package com.eventrecord.home.dao;

import java.util.List;

import org.apache.ibatis.annotations.Update;

import com.eventrecord.home.domain.EventRecord;
import com.eventrecord.home.utils.FunctionStore.SearchParameter;


public interface EventRecordDAO {
	public void createEventRecordTable();
	public List<EventRecord> getEventRecordList(SearchParameter searchParam);
	public int getEventRecordListCount(SearchParameter searchParam);
	public void addEventRecord(EventRecord eventRecord);
	public EventRecord getRecord(SearchParameter searchParam);
}
