import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

// component - component that will be rendered for a given (exact) path
// path - string that is equal to the path itself (from the current place in our application) - base of application (root) = /
// when url is at the base (i.e. just /) - we want to render the homepage
// exact - true by default - requires path to be exact before corresponding component/page is rendered

// e.g. if we had path='/' component={HomePage} and path = '/hats' component={HatsPage} - the HomePage would be rendered first and then the HatsPage would be rendered beneath it. By inserting the exact keyword before the path for the HomePage, we ONLY get (just) our HomePage if the path is EXACTLY equal to /.

// Switch - the moment that a route inside the Switch finds a match (in the path) it does not render anything else but that route
// Before (without the exact keyword) if we entered localhost:3000/hats it would match both / (for the homepage) and /hats (for the hats page) - i.e. both would be rendered
// With Switch we render / (our homepage) and nothing else (because our / route is matched before our /hats route)

// One of the things that React Router DOM does for us is that any component (e.g. HomePage) that gets rendered by our Routes is passed three arguments (props)
// But what are these props? History, Location and Match.
// Match - Four things we get from our match prop: isExact, params, path and url. Url is just the url up until the point where the first path match occurs. Path is just the pattern that the Route is looking to match. isExact - only returns true if there is a perfect match between the entered url and the path. 
// Params property - object of url parameters. Url/Route parameter - e.g. :topicId
// e.g. if we have a path of /topics/:topicId for a given Route it means that the Route is waiting to match anything up to /topics and then /:topicId can be a dynamically changing value. We want to be able to access the topicId value as a parameter.
// Why is this useful? Let's say we entered localhost:3000/topics/13 we would render our Topic Detail page but if we console log the props that are passed to our Topic Detail page component we notice that in the match prop, the params object has a topicId value of 13. We can use this value to render a personalised title for a given Topic Detail Page or we could maybe use it to fetch some relevant data!

// History prop - main thing is push. Two ways to navigate in React Router DOM between our pages. Up to now we've just been dynamically updating the url and getting to different pages but in reality the first one is the use of this Link component (special component that React Router DOM gives us - let's us dynamically pass in 'to' prop - specified string indicates where we want the link to take us to in our application)

// Link looks like a modified <a> link - takes you to specified page
// Only difference between this and an ordinary <a> link to our Topics page - React is a SPA (single page application) which means that it isn't actually redirecting you and rebuilding the entire application every time the url changes. We're really just hijacking the url's position to determine with JavaScript what part of the DOM to take off and what part of the DOM to replace - what component do we want to (re)mount?
// Not trying to re-render the entire application. An <a> link would force you to re-direct and re-render the entire application, whereas using the React Router DOM (RRD) Link - we're just borrowing the url to tell our application what to re-render.

// Other way to do this type of navigation is using the history prop. If instead of a link we wanted to use a button and in the onClick of our button we would pass it a function that gets called whenever it gets clicked and in this function we would specify:
// {() => props.history.push('/topics')}
// Gives us more dynamic access than a regular Link - can dynamically/functionally control when we want this to work.

// Location prop - tells us where we are currently in our application (pathname)
// Match prop - another useful thing - allows components to build out nested route structures. Nested routes - let's say for example that our topic list page renders out a bunch of links to a bunch of topic detail pages
// Could have (on our Topic List page):
// <Link to={`${props.match.url}/13`}>To Topic 13</Link>
// <Link to={`${props.match.url}/17`}>To Topic 17</Link>
// <Link to={`${props.match.url}/21`}>To Topic 21</Link>
// Doesn't matter where our Topics Page is located within our application - props.match.url will always be /topics for our Topics Page (assuming that the TopicsPage requires an exact match between the path and entered url of /topics in order to be rendered by the browser) and we can take advantage of this by creating dynamic links to various topic pages.

// Caveat of using location, history and match props (from Route) - we only get access to them from the first component that gets passed into our Route
// Even though Directory and MenuItem are children of our HomePage component - only our HomePage component gets access to these props (because HomePage is what is passed into Route)
// Possible soln: Pass props down into Directory and then into Menu Item - bad practice - prop tunnelling/drilling - tunnelling props through several intermediaries in order to get them to the required components - but intermediaries don't need the props themselves!
function App() {
  return (
    <div>
     <Header/>
     <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;

// We place our Header component outside of our Switch and Route components
// By doing this, our header is always present and rendered, despite whatever RRD (react-router-dom) Switch and Route components decide to render
