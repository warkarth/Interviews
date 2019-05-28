# 8 - 11111111 .00000000.00000000.00000000 = 255.0.0.0
# 10 - 11111111.11 000000.00000000.00000000 = 255.192.0.0
# 17 - 11111111.11111111.1 0000000.00000000 = 255.255.128.0
# 25 - 11111111.11111111.11111111.1 0000000 = 255.255.255.128


def submask(cadena):
  mask = cadena.split(".")
  contadorip = {}
  cadenamascara32 = ""

  for x in mask:
    binario = bin(int(x)).replace("0b","")
    if binario == "0":
      cadenamascara32 += "00000000"
    cadenamascara32 += str(binario)
    
  contadorip['1'] = 0
  for key in cadenamascara32:
    if key in contadorip:
      contadorip[key] += 1
    else:
      contadorip[key] = 1

  return contadorip['1']

print(submask("255.192.0.0"))