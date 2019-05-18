import React from "react";
import EventList from "./EventList";
import EventForm from "./EventForm";
import { StackNavigator } from "react-navigation";

// export default class App extends React.Component {
//   render() {
//     return <EventList />;
//   }
// }

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your Events"
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add an events"
    })
  }
});
