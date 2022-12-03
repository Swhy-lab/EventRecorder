package com.eventrecord.home.domain;

import java.util.Date;

import lombok.Data;

@Data
public class EventRecord {
	int er_id;
	Date createdate;
	String ip;
	String text;
	String contents;
}
