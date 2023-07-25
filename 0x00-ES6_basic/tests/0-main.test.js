const {taskFirst, getLast, taskNext }=require('../0-constants')

// Test for taskFirst()
test('taskFirst returns the correct value', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

// Test for getLast()
test('getLast returns the correct value', () => {
  expect(getLast()).toBe(' is okay');
});

// Test for taskNext()
test('taskNext returns the correct combination', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
