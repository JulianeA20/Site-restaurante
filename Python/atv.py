ultimo = 1
penultimo = 1
cont = 0
n2 = int(input("Informe um número: "))
list = [0,1,1]
     
for proximo in range(list):
    proximo = ultimo + penultimo
    penultimo = ultimo
    ultimo = proximo
    cont += 1
    list.append(proximo)
    print(list)

    if n2 == True:
        print("Este número faz parte da sequência")
    else:
        print("Este número não faz parte da sequência")
    
    

