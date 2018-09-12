import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropyTypes from 'prop-types';

import * as TodoActions from 'store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoContainer: {
    flexDirection: 'row',
  },
});

const TodoList = ({ todos, addTodo, removeTodo }) => {
  console.tron.log(todos);
  return (
    <View style={styles.container}>
      {todos.map(todo => (
        <View key={todo.id} style={styles.todoContainer}>
          <Text>{todo.text}</Text>
          <TouchableOpacity onPress={() => removeTodo(todo.id)}>
            <Text>Excluir</Text>
          </TouchableOpacity>

        </View>
      ))}
      <TouchableOpacity onPress={() => addTodo('nadaaa')}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

TodoList.propTypes = {
  todos: PropyTypes.arrayOf(PropyTypes.shape({
    id: PropyTypes.number,
    text: PropyTypes.string,
  })).isRequired,
  addTodo: PropyTypes.func.isRequired,
  removeTodo: PropyTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});


const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
