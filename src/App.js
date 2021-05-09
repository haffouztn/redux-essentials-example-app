import React from 'react'
import {PostsList} from './features/posts/postsList'
import {AddPostForm} from './features/posts/addPostForm'
import {EditPostForm} from './features/posts/EditPostForm'
import {SinglePostPage} from './features/posts/singlePostPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
         <Route 
            exact 
            path="/posts/:postId"
            component={SinglePostPage}
          /> 
          <Route 
            exact 
            path="/posts/editPost/:postId"
            component={EditPostForm}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
