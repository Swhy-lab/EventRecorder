package com.eventrecord.home.utils;

import java.util.Date;
import java.util.List;

import lombok.Data;
/**
 * @author Swhy-lab
 * @version v202212110141
 */
@Data
public  class FunctionStore {
	
	@Data
	public static class SearchParameter{
		int id;
		Date start_date;
		Date end_date;
	}
	
	@Data
	public static class PageParameter<T>{
		List<T> list;
		int count;
	}
}
