import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useEffect } from "react";



export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
      if(activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])//dependacies for useEffect empty array executes once and only once with the empty deps array([])

    
    if (activityStore.loadingInitial) return <LoadingComponent content='Hey, chill bro!' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
})