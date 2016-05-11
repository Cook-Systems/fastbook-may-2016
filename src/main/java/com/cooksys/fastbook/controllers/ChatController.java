package com.cooksys.fastbook.controllers;

import java.io.IOException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import com.cooksys.fastbook.models.Message;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;

@ServerEndpoint("/chat")
public class ChatController {
	private static Set<Session> clients = new HashSet<>();

	private static Gson gson = new Gson();

	@OnOpen
	public void onOpen(Session session)
	{
		System.out.println("user connected");
		clients.add(session);
	}

	@OnMessage
	public static void recieveMessage(Session session, String message)
			throws JsonSyntaxException, IOException
	{
		System.out.println(message);

		Message recieved = gson.fromJson(message, Message.class);
		
		System.out.println("Iterating over clients");

		Iterator<Session> iterator = clients.iterator();
		while (iterator.hasNext())
		{
			System.out.println("Handling a client");
			Session client = iterator.next();
			if (client.isOpen())
			{
				String json = gson.toJson(recieved);

				client.getBasicRemote().sendText(json);
				
				System.out.println("Sent the client a message");
			} else
			{
				clients.remove(client);
				System.out.println("Closed a connection");
			}
		}
	}

	@OnClose
	public void onClose(CloseReason reason, Session session)
	{
		clients.remove(session);
	}
}
