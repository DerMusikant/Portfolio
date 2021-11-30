import React, {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css'

import Layout from './components/layout/Layout'

const
Home = React.lazy(()=>import('./pages/Home')),
About = React.lazy(()=>import('./pages/About')),
FAQ = React.lazy(()=>import('./pages/FAQ')),
Contact = React.lazy(()=>import('./pages/Contact')),
NotFound = React.lazy(()=>import('./pages/NotFound'))

export default () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className='loading bg-red-main'>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/FAQ' component={FAQ} />
            <Route path='/contact' component={Contact} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  )
}
