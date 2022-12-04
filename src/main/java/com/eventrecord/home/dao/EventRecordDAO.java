package com.eventrecord.home.dao;

import java.util.List;

import org.apache.ibatis.annotations.Update;

import com.eventrecord.home.domain.EventRecord;
import com.eventrecord.home.domain.SearchParameter;

public interface EventRecordDAO {
	public void createEventRecordTable();
	public List<EventRecord> getRecordList(SearchParameter searchParam);
	public int getRecordListCount(SearchParameter searchParam);
	public void addEventRecord(EventRecord eventRecord);
	public EventRecord getRecord(SearchParameter searchParam);
}
