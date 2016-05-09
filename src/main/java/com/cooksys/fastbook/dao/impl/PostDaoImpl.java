package com.cooksys.fastbook.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cooksys.fastbook.dao.PostDao;
import com.cooksys.fastbook.models.Post;
import com.cooksys.fastbook.models.PostWithLikeData;

@Repository
@Transactional
public class PostDaoImpl implements PostDao 
{
	@Autowired
	private SessionFactory sessionFactory;
	
	private Session getSession()
	{
		return sessionFactory.getCurrentSession();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> index()
	{
		Session session = getSession();
		return session
				.createQuery("from Post")
				.list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<PostWithLikeData> getPostsForUser(Integer userId, Integer loggedInId) {
		Session session = sessionFactory.getCurrentSession();
		
		String hql = "select p from User u inner join u.posts p where u.id = :userId";
		
		hql = "select new com.cooksys.fastbook.models.PostWithLikeData(p, count(p.id), "
				+ "CASE l.user.id WHEN :loggedInId THEN true "
				+ "ELSE false END) "
				+ "from User u "
				+ "inner join u.posts p "
				+ "left join p.likes l "
				+ "where u.id = :userId "
				+ "group by p.id "
				+ "order by p.timestamp desc";

		return session
				.createQuery(hql)
				.setParameter("userId", userId)
				.setParameter("loggedInId", loggedInId)
				.list();
	}

	@Override
	public List<Post> getPostsForGroup(Integer groupId, Integer loggedInId) {
		Session session = sessionFactory.getCurrentSession();

		@SuppressWarnings("unchecked")
		List<Post> results = session
				.createQuery(
						"from Post p inner join p.groups g where g.id = :groupId order by p.id desc")
				.setInteger("groupId", groupId).list();

		return results;
	}

	@Override
	public Post addPostToUser(Integer userId, Post post) {
//		Session session = sessionFactory.getCurrentSession();
//
//		User userWall = new User();
//		userWall = userController.getUser(userId);
//
//		Set<User> users = post.getUsers();
//		users.add(userWall);
//		post.setUsers(users);
//
//		session.save(post);
		
		return post;
	}

	@Override
	public Post add(Post post)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Post addPostToGroup(Integer groupId, Post post)
	{
		// TODO Auto-generated method stub
		return null;
	}

}
