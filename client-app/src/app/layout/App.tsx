import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react'
import { NavBar } from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../stores/activityStore'

const App = () => {
  const activityStore = useContext(ActivityStore)

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]); // second parameter [] this stop constant call, if [] does not change useEfffect doe snot called again

  if (activityStore.loadingInitial) {
    return <LoadingComponent content={"Loading Activities"} />

  }

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
