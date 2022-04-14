import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import ProfileOrders from '../../components/profile-orders/profile-orders';
import ProfileForm from '../../components/profile-form/profile-form';
import ProfileSidebar from '../../components/profile-sidebar/profile-sidebar';

import '@ya.praktikum/react-developer-burger-ui-components';
import ppStyles from './profile-page.module.css';

const ProfilePage = () => (
  <main className={`${ppStyles.main} pt-30`}>
    <ProfileSidebar />
    <Switch>
      <Route exact path='/profile/orders'>
        <ProfileOrders />
      </Route>
      <Route exact path='/profile'>
        <ProfileForm />
      </Route>
      <Route path='*'>
        <Redirect to={{ pathname: '/404' }} />
      </Route>
    </Switch>
  </main>
);

export default ProfilePage;
