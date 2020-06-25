module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'test', name: 'test:     Adding missing tests' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    { value: 'refactor', name: 'refactor: Refactoring code' },
    { value: 'revert', name: 'revert:   Revert to a commit' },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  messages: {
    type: "Select the type of change that you're committing:",
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: false,
  allowBreakingChanges: [],
  skipQuestions: ['body', 'scope'],
  subjectLimit: 100,
};
