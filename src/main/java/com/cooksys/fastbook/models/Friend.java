package com.cooksys.fastbook.models;

// Generated May 5, 2016 8:24:55 AM by Hibernate Tools 4.3.1

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Friend generated by hbm2java
 */
@Entity
@Table(name = "friend", catalog = "fastbook")
public class Friend implements java.io.Serializable {

	private FriendId id;
	private User userBySentId;
	private User userByReceivedId;
	private boolean status;

	public Friend()
	{
	}

	public Friend(FriendId id, User userBySentId, User userByReceivedId,
			boolean status)
	{
		this.id = id;
		this.userBySentId = userBySentId;
		this.userByReceivedId = userByReceivedId;
		this.status = status;
	}

	@EmbeddedId
	@AttributeOverrides({
			@AttributeOverride(name = "sentId", column = @Column(name = "sent_id", nullable = false)),
			@AttributeOverride(name = "receivedId", column = @Column(name = "received_id", nullable = false)) })
	public FriendId getId()
	{
		return this.id;
	}

	public void setId(FriendId id)
	{
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "sent_id", nullable = false, insertable = false, updatable = false)
	public User getUserBySentId()
	{
		return this.userBySentId;
	}

	public void setUserBySentId(User userBySentId)
	{
		this.userBySentId = userBySentId;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "received_id", nullable = false, insertable = false, updatable = false)
	public User getUserByReceivedId()
	{
		return this.userByReceivedId;
	}

	public void setUserByReceivedId(User userByReceivedId)
	{
		this.userByReceivedId = userByReceivedId;
	}

	@Column(name = "status", nullable = false)
	public boolean isStatus()
	{
		return this.status;
	}

	public void setStatus(boolean status)
	{
		this.status = status;
	}

}
