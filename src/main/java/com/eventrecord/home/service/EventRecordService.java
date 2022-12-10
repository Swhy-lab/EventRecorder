package com.eventrecord.home.service;

import java.util.List;

import org.apache.ibatis.annotations.Update;

import com.eventrecord.home.domain.EventRecord;
import com.eventrecord.home.utils.FunctionStore.PageParameter;
import com.eventrecord.home.utils.FunctionStore.SearchParameter;

public interface EventRecordService {
	public void createTables() throws Exception;
	public void updateTables() throws Exception;
	public void addExampleEventRecord() throws Exception;
	public PageParameter<EventRecord> getEventRecordPages(SearchParameter searchParameter) throws Exception;
}
