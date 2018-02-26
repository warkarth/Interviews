#cuentaPalabras(cadena = "mango mango mango pera manzana uva uva") -> {'manzana': 1, 'pera': 1, 'mango': 3, 'uva': 2}
 
parrafo = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \n tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \n consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"

cad = "mango mango mango pera manzana uva uva"
 	
def cuentaPalabras(cadena):
	contador = {}
	palabras = cadena.split()

	for key in palabras:
		if key in contador:
			contador[key] += 1
		else:
			contador[key] = 1

	return contador

print(cuentaPalabras(cad)) 
