package com.eventrecord.home.domain;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import lombok.Data;

@Data
public class EventRecord {
	int er_id;
	Date createDate;
	String ip;
	String text;
	String content;
	String type;
	String stringDate;
	
	public void setDate(Date date) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
		createDate = date;
		stringDate = simpleDateFormat.format(date); 
	}	
}
