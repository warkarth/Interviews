#isEqual(cad1: "abcd", cad2= "abcd") -> True

def isEqual(cad1,cad2):
	diccCad = {}

	for key in cad1:
		if key in diccCad:
			diccCad[key] += 1 
		else:
			diccCad[key] = 1

	for key in cad2:
		if key in diccCad:
			diccCad[key] -= 1
		else:
			return False

	for (key) in diccCad:
		if diccCad[key] != 0:
			return False

	return True

print(isEqual("pancho","panchos"))

