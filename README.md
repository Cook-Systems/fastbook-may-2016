fastbook-may-2016
=================

FastTrack'D Group Assignment  
April/May 2016  
Memphis, TN

Assignment to create a quick and dirty facebook clone. Exercises group development and project planning skills. Especially fun for the teachers, who get to be the evil dungeon masters they've always wanted to be.

Reference Material
------------------

### git
- CodeSchool: [Try Git in the Browser](https://try.github.io)  
  15 minute interactive course that's great for newcomers to git. Teaches mostly commandline git and some GitHub-specific concepts.
- Atlassian: [Git Workflows and Tutorials](https://www.atlassian.com/git/tutorials/comparing-workflows/)  
  Learn about and compare different git workflows.

#### git flow
- nvie (Vincent Driessen): [A Successful Git Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)  
  This article first laid out the principles of git flow. Long and conceptual.
- Atlassian: [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)  
  Another explanation of the principles of git flow. Shorter, and more practical.
- Daniel Kummer: [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)  
  Great for visual learners. Lays out the concepts of git flow in a graphical and intuitive fashion.
- nvie (Vincent Driessen): [gitflow on GitHub](https://github.com/nvie/gitflow)  
  Commandline git extensions supporting git flow.

### angular
- angular.js: [Angular Developer Guide](https://docs.angularjs.org/guide)  
  A guided tour of Angular's major features, aimed at new developers.
- angular.js: [Angular API Documentation](https://docs.angularjs.org/api)  
  Full API documentation for Angular.
- johnpapa: [Angular 1 Styleguide](https://material.angularjs.org/latest/)  
  Thorough, specific, well-reasoned, and widely adopted styleguide for Angular 1 in pre-ES2015 (read: older JavaScript) environments. Angular-team-approved.

#### angular-material
- [Angular Material](https://material.angularjs.org/latest/)  
  Homepage for the angular-material component library, with lots of demos (with code examples!) and documentation. Be sure to select the version of the library you are including in the project!
- Google: [Material Design Specification](https://www.google.com/design/spec/material-design/)  
  The ui-design specification (manifesto?) Google uses to design web and mobile applications. Angular Material is a so-called reference implementation of this specification.

Version 0.1.0 (Day one)
-----------------------

### Technologies

#### Text Editors and IDEs
- Eclipse
- Atom

#### Version Control
- git (VCS)
- Git Kraken (git GUI)

#### Backend
- Java (primary language)
- Maven (build tool & dependency management)
- Wildfly (application server)
- MySQL (persistence store)
- Hibernate (ORM framework)
- Spring Framework (IoC container)
- Spring MVC (for RESTful webservices)

#### Frontend
- JavaScript (primary language)
- Angular.js (ui framework)
  - angular-ui-router (routing framework)
  - angular-material (component library)
    - angular-animate (animation)
    - angular-aria (accessibility)
    - angular-messages (messages / client-side validation)
    - Roboto Font Family
    - Material Icons

Roadmap
-------

### Version 0.1.0 (Day One)

#### Stories
User stories are used to describe functionality in a way that focuses on the actions a User can take at any given point and the outcomes expected by the User for those actions.
##### a USER
  - CAN register
    - IN ORDER TO be able to log in
  - CAN login
    - IF the USER has registered
    - AND the USER is not already logged in
    - IN ORDER TO
      - search for other users (and themselves)
      - view other user's profiles (and their own)
      - send friend requests to other users
      - review pending requests
  - CAN search for other users (and themselves)
    - IF the USER is logged in
    - by full or partial name
    - IN ORDER TO
      - view a list of search results
      - select a user's profile from the list of results to view
  - CAN view other user's profiles (and their own)
    - IF the USER is logged in
    - IN ORDER TO
      - view the selected user's profile information
      - view the selected user's list of friends
      - send the selected user a friend request
  - CAN send a friend request to a target user
    - IF the USER is logged in
    - AND the target user is not the same as the USER
    - AND the target user is not already a friend of the USER
    - AND neither user has a pending friend request from the other
  - CAN review pending friend requests from other users
    - IF the USER is logged in
    - IN ORDER TO
      - accept or decline any number of pending friend requests from other users
  - CAN log out
    - IF the USER is logged in

#### Screen Aliases

##### Home Page
  - DISPLAY
    - IF the browser url does not match any other screens
    - OR immediately after logging in or out
  - IF logged in
    - show the LOGGED IN USER's User Profile
  - IF logged out
    - show User Login

#### Screen Fragments
##### App Bar
  - Found on every screen
  - IF logged in
    - DISPLAY DATA
      - Full Name of LOGGED IN USER
    - ACTIONS
      - Search Users
        - DISABLED if search INPUT field is empty
      - Go to LOGGED IN USER's User Profile
      - View Pending Friend Requests
      - Logout
  - IF logged out
    - ACTIONS
      - Go to User Login
      - Go to User Registration

#### Screens
##### User Registration
  - ACTIONS
    - Submit
      - DISABLED if INPUT requirements are not met
    - Reset
      - DISABLED if all INPUT fields are empty or uninitialized
      - clears INPUT fields / sets defaults
  - INPUT DATA
    - Profile Data
      - First Name
        - required
        - at least one character
      - Last Name
        - required
        - at least one character
      - Birth Date
        - required
        - must be in the past
    - Login Credentials
      - Email Address
        - required
        - unique
        - must contain `@` character
        - at least three characters (ex. `x@y`)
      - Password
        - required
        - at least one character
        - obscured (dots, not characters)
        - hashed before storage in database

##### User Login
  - ACTIONS
    - Login
      - DISABLED if INPUT requirements are not met
    - Reset
      - DISABLED if all INPUT fields are empty or uninitialized
      - clears INPUT fields
  - INPUT DATA
    - Email Address
      - required
    - Password
      - required
      - obscured

##### User Search Result List
  - ACTIONS
    - Go to User's Profile
      - one for each search result in the DISPLAY DATA
  - DISPLAY DATA
    - List of Users whose full names match the search criteria

##### User Profile
  - DISPLAY DATA
    - Full Name (first name and last name)
    - Birthday (day and month)
    - Age (years)
    - Friend List (each with a link to the friend's profile)
  - ACTIONS
    - Send Friend Request
      - DISABLED if the LOGGED IN USER and the TARGET USER already have a pending friend request between each other
      - DISABLED if the LOGGED IN USER and the TARGET USER are already friends

##### Pending Friend Request List
  - DISPLAY DATA
    - List of Users who have sent the LOGGED IN USER a friend request
  - ACTIONS
    - Accept
      - one for each pending request in the DISPLAY DATA
    - Reject
      - one for each pending request in the DISPLAY DATA
