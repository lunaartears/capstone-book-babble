- Book Babble:
# An app where you can make a profile and catalog all your books
    * each book will have a title, author, genre and if read (true or false) (required) an image, release date and book form (hardback, paperback, audio, digital ect..) (not required)
    * each book entry will display love like and dislike buttons and comment fields and reply buttons

# App will have a profile page where users can add thier books to a personal user library.

# App will have a public page where users can see other users names and profile pic (maybe)
    * each user will have a username, password, (required) memberSince, isAdmin and imgUrl (not required)

# Users will be able to click on a users name and view thier library, comment on thier entries and reply to comments

# Users libraries will have genre filter

- Folder.file relationship outline:
    # Backend:
            * server.js
            * .gitignore
            * .env
        - models
            * user.js
            * bookEntry.js
            * comment.js
            * reply.js
        - routes
            * authRouter.js
            * bookEntryRouter.js
            * commentRouter.js
            * replyRouter.js

    # Frontend
        # components
            - Profile.jsx
            - Public.jsx
                * Auth.jsx
                * AuthForm.jsx
                * Entry.jsx
                * EntryForm.jsx
                * EntryList.jsx
                * Comment
                * CommentForm
                * CommentList
                * Reply
                * Navbar
                * ProtectedRoute
