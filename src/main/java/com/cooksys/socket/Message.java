package com.cooksys.socket;

public class Message {
	
	private String username;
	private String content;
	
	public String getSender() {
		return username;
	}
	public void setSender(String sender) {
		this.username = sender;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}

}
