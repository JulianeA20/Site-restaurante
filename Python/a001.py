def imprimir_linhas(n):
    for i in range(1, n+1):
        for j in range(1, i+1):
            print(j, end=" ")
        print()

# Pedir ao usuário um número e chamar a função para imprimir as linhas
numero = int(input("Digite um número inteiro: "))
imprimir_linhas(numero)
