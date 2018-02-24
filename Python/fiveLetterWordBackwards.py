cad = "Today is a goood day" # -> yadoT is a good day"


def funcion(str):
  arreglo = []
  i = 0
  cadena = ""

  arreglo = str.split()
  for x in arreglo:
    if len(x) >= 5:
      for letra in reversed(x):
        arreglo[i] += letra
      i += 1
  
  for x in arreglo:
    cadena += (x+" ")
    
  return cadena
  
a = funcion(cad)

print(a)