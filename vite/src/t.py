# Пользовательский ввод и разделение строк на числа
input_str = input("Введите числа через пробел: ")
numbers = input_str.split()

# Преобразование строковых значений в целые числа
numbers = [int(num) for num in numbers]

# Вычисление суммы элементов списка
sum_of_numbers = sum(numbers)

# Вывод суммы
print("Сумма чисел:", sum_of_numbers)