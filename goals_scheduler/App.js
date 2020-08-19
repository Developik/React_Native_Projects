import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isAddMode, setIsAddMode] = useState(false);

  const incCounter = () => {
    setCounter(counter + 1);
  }

  const addGoalHandler = (goalTitle) => {
    incCounter();
    setCourseGoals(currentGoals => [...currentGoals,
    { id: counter.toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);

  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onCancel={cancelGoalAdditionHandler}
        onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }

});

// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
