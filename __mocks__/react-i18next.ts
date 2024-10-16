import { jest } from '@jest/globals';

const useTranslation = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      add: 'Add',
      add_task: 'Add Task',
      cancel: 'Cancel',
      completed_tasks: 'completed tasks',
      confirm: 'Confirm',
      confirm_delete_completed_tasks: 'Confirm to delete all completed tasks',
      confirm_delete: 'Confirm to delete task:',
      delete: 'Delete',
      delete_all_completed_tasks: 'Delete all completed tasks',
      delete_task: 'Delete task',
      edit_task: 'Edit task',
      hint_for_creating_tasks: 'Hint for creating tasks',
      mark_as_favorite: 'Mark as favorite',
      no_tasks_message: 'No tasks available',
      something_went_wrong: 'Something went wrong',
      switch_language: 'Switch language',
      switch_to_dark_theme: 'Switch to dark theme',
      switch_to_light_theme: 'Switch to light theme',
      test_hint: 'Test hint',
      toggle_task_completion: 'Toggle task completion',
      try_again: 'Try Again',
      u_have: 'You have',
      what_needs_to_be_done: 'What needs to be done',
    };
    return translations[key] || key;
  },
});

const initReactI18next = {
  type: '3rdParty',
  init: jest.fn(),
};

export { useTranslation, initReactI18next };
