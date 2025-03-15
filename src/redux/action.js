import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction('tasks/addTsk');

export const deleteTask = createAction('tasks/deleteTasks');

export const toggleCompleted = createAction('tasks/toggleCompleted');

export const setStatusFilter = createAction('filters/setStatusFilter')

