
def isPalindromo(cadena):
	s = cadena.replace(" ","")
	return s[::-1] == s

print(isPalindromo("logra casillas alli sacar gol"))