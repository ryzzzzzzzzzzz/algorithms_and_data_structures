export const labs = [
  { id: 1, title: 'Линейные алгоритмы', count: 12 },
  { id: 2, title: 'Ветвления', count: 10 },
  { id: 3, title: 'Циклы', count: 10 },
  { id: 4, title: 'Рекурсия', count: 9 },
  { id: 5, title: 'Одномерные массивы', count: 10 },
  { id: 6, title: 'Матрицы', count: 10 },
  { id: 7, title: 'Сортировка пузырьком', count: 1 },
  { id: 8, title: 'Сортировка вставками', count: 1 },
  { id: 9, title: 'Сортировка выбором', count: 1 },
  { id: 10, title: 'Бинарный поиск', count: 1 },
  { id: 11, title: 'Деревья', count: 1 },
  { id: 12, title: 'Очередь', count: 1 },
];

export function taskUrl(lab, task) {
  return new URL('./lr ' + lab + '/task-' + String(task).padStart(2, '0') + '.js', import.meta.url);
}
