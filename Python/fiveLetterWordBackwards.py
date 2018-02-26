cad = "Today is a goood day" # -> yadoT is a dooog day


def fiveWordBackard(cad):
  cadena = ""
  oracion = cad.split()
  i = 0

  for palabra in oracion:
    if len(palabra) >= 5:
      oracion[i] = ""
      for letra in reversed(palabra):
        oracion[i] += letra
    i += 1
  
  for x in oracion:
    cadena += (x+" ")
    
  return cadena
  

print(fiveWordBackard(cad))