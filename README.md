# In this lecture a learn about react-redux

# What Is Redux?
 - Redux is a state management library that helps you better manage state in your applications.

# How to Create the Redux Store
 - To create a store, we need to import the createStore function like this:

 # Command to install redux toolkit
  - import { createStore } from '@reduxjs/toolkit';

# Redux Architecture
  - The components of Redux architecture are explained below.
    - STORE: A Store is a place where the entire state of your application lists. It manages the status of the application and has a dispatch(action) function. It is like a brain responsible for all moving parts in Redux.
    - ACTION: Action is sent or dispatched from the view which are payloads that can be read by Reducers. It is a pure object created to store the information of the user's event. It includes information such as type of action, time of occurrence, location of occurrence, its coordinates, and which state it aims to change.
    - REDUCER: Reducer read the payloads from the actions and then updates the store via the state accordingly. It is a pure function to return a new state from the initial state.