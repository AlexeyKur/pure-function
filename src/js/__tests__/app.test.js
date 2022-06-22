import colorHealth from '../app';

test('should return critical', () => {
  expect(colorHealth({ name: 'Лучник', health: 10 })).toBe('critical');
});

test('should return wounded', () => {
  expect(colorHealth({ name: 'Мечник', health: 49 })).toBe('wounded');
});

test('should return healthy', () => {
  expect(colorHealth({ name: 'Маг', health: 90 })).toBe('healthy');
});
