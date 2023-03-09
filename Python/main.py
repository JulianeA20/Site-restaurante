from calculadora import soma, subtracao, multiplicacao, divisao

def menu():
    print("Escolha a operação:")
    print("1 - Soma")
    print("2 - Subtração")
    print("3 - Multiplicação")
    print("4 - Divisão")

while True:
    menu()
    op = input()

    if op in ("1", "2", "3", "4"):
        a = float(input("Digite o primeiro número: "))
        b = float(input("Digite o segundo número: "))

        if op == "1":
            print(soma(a, b))
        elif op == "2":
            print(subtracao(a, b))
        elif op == "3":
            print(multiplicacao(a, b))
        elif op == "4":
            print(divisao(a, b))
    else:
        print("Operação inválida. Tente novamente.")
