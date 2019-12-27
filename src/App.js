import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Home from '@/pages/home/router';
// import Booklist from '@/pages/booklist';
import { createSwitchRoutes } from '@/utils/router';
import Loader from '@/components/AsyncComponent';
import '@/App.less';

const Booklist = Loader(() => import('@/pages/booklist'));

@withRouter
class App extends Component {
  render() {
    const routeConfig = [
      {
        path: this.props.match.path,
        component: Home,
        comProps: {
        },
        routeProps: { exact: true }
      },
      {
        path: this.props.match.path + 'chat',
        component: Home,
        comProps: {
        },
        routeProps: { exact: false }
      },
      {
        path: this.props.match.path + 'booklist',
        component: Booklist,
        comProps: {
          // onBackClick: this.onBackClick
        },
        // routeProps: { exact: false }
      }
    ];
    return (
      <div className="chat-App">
        <Header />
        <div id='chat-body'>
          {createSwitchRoutes(routeConfig)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
