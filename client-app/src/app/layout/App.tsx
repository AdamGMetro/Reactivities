import { useEffect} from 'react'
import {  Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';


function App() {
  const { activityStore } = useStore(); 

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])//dependacies for useEffect empty array executes once and only once with the empty deps array([])

  


  if (activityStore.loadingInitial) return <LoadingComponent content='Hey, chill bro!' />
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard/>
      </Container>

    </>

  )
}

export default observer(App);
