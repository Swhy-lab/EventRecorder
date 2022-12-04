package com.eventrecord.home.service;

import org.apache.ibatis.annotations.Update;

public interface EventRecordService {
	public void createTables() throws Exception;
	public void updateTables() throws Exception;
	public void addExampleEventRecord() throws Exception;
}
