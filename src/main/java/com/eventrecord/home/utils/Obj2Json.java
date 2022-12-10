package com.eventrecord.home.utils;

import java.lang.reflect.Modifier;
import java.lang.reflect.Type;
import java.text.SimpleDateFormat;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

/**
 * @author Swhy-lab
 * @version v202212110131
 */
public class Obj2Json {

	public static String toJSONString(Object object) {
		ObjectMapper mapper = new ObjectMapper();
		//필드에 null값 제거
		mapper.setVisibility(PropertyAccessor.FIELD, Visibility.ANY);
		//json에 null값 제거
		mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String json = null;		 
		try {
			//date 출력 형태
			mapper.setDateFormat(dateFormat);
			json = mapper.writeValueAsString(object);	
		}catch(Exception e) {
			e.printStackTrace();
			json = null;
		}
		return json;
	}

}
