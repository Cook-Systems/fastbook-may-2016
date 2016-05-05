package com.cooksys.fastbook.dao.impl;

import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cooksys.fastbook.controllers.GroupController;
import com.cooksys.fastbook.controllers.UserController;
import com.cooksys.fastbook.dao.PostDao;
import com.cooksys.fastbook.models.Group;
import com.cooksys.fastbook.models.Post;
import com.cooksys.fastbook.models.User;

@Repository
@Transactional
public class PostDaoImpl implements PostDao {
	@Autowired
	private SessionFactory sessionFactory;

	@Autowired
	UserController userController;
	@Autowired
	GroupController groupController;

	private Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> index() {
		Session session = getSession();
		return session.createQuery("from Post").list();
	}

	@Override
	public List<Post> getPostsForUser(Integer userId) {
		Session session = sessionFactory.getCurrentSession();

		@SuppressWarnings("unchecked")
		List<Post> results = session
				.createQuery(
						"from Post p inner join p.users u where u.id = :userId order by p.id desc")
				.setInteger("userId", userId).list();

		return results;

	}

	@Override
	public List<Post> getPostsForGroup(Integer groupId) {
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
		Session session = sessionFactory.getCurrentSession();

		User userWall = new User();
		userWall = userController.getUser(userId);

		Set<User> users = post.getUsers();
		users.add(userWall);
		post.setUsers(users);

		session.save(post);

		return post;
	}

	@Override
	public Post addPostToGroup(Integer groupId, Post post) {
		Session session = sessionFactory.getCurrentSession();

		Group groupWall = new Group();
		groupWall = groupController.getGroup(groupId);

		Set<Group> groups = post.getGroups();
		groups.add(groupWall);
		post.setGroups(groups);

		session.save(post);

		return post;
	}

}
