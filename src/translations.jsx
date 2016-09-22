import counterpart from 'counterpart';

counterpart.registerTranslations('en', {
  trans: {
    switch: 'Switch Locale',
    lang : {
      en: 'English',
      fr: 'French'
    }
  },
  head: {
    placeholder: 'What needs to be done?'
  },
  tools: {
    itemLeft: 'items left',
    all: 'All',
    active: 'Active',
    completed: 'Completed',
    clearCompleted: 'Clear completed'
  }
});

counterpart.registerTranslations('fr', {
  trans: {
    switch: 'Changer de langue',
    lang : {
      en: 'Anglais',
      fr: 'Français'
    }
  },
  head: {
    placeholder: 'Que faut il faire?'
  },
  tools: {
    itemLeft: 'tâches restantes',
    all: 'Toutes',
    active: 'Active',
    completed: 'Terminées',
    clearCompleted: 'Effacer les terminées'
  }
});