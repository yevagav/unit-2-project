# Project 2: Travel Blog
 A CRUD app that is created for a user to be able to upload posts about past travels

 # Technologies Used
JavaScript, HTML, CSS, Node.js, JSX, Express, Mongo.DB, mongoose

# Getting Started
link to app:

# Resources 
<a href="https://trello.com/b/ZksmOoMR/unit-2-project" target="_blank">Trello</a>

# Design
![](images/screenshot-home.png)
![](images/show-page-app.png)
![](images/new-page.png)

# Restful Routes:
Action | URL | HTTP Verb | JSX view filename | mongoose method 
--- | --- | --- | --- |--- 
Index | /articles/ | GET | Index.jsx | Article.find() | Article.find()
Show | /articles/:id/ | READ | Show.jsx | Article.findOne or Article.findById | 
New | /articles/new | GET | New.jsx | none | 
Create | /articles/ | POST | none | Article.create(req.body) | 
Edit | /articles/:id/edit | GET | Edit.jsx | Article.findOne or Article.findById | 
Update | /articles/:id | PUT | none | Article.findByIdAndUpdate or Article.findOneAndUpdate | 
Destroy | /articles/:id | DELETE | none | Article.findByIdAndRemove or Article.findByIdAndDelete | 

# ERD:
![](images/erd.jpg)
# Wireframes
Index Page:
![](images/home-page-wire.png)
New Page:
![](images/new-blog-wire.png)
Edit Page:
![](images/edit-page-wire.png)
Show Page:
![](images/show-page-wire.png)

# Next Steps
### Future Improvements
- Create comment setion that other users can leave
- Links that redirect to booking sites
- Styling improvements for login/signup and show route

