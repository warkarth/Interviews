def isPrimo(number):
	for x in range(2,number):
		if number % x == 0:
			return False
		
	return True

serieF = set()
def F(number):
	if number == 0:
		return 0
	if number == 1:
		return 1
	
	if isPrimo(number): serieF.add(number)

	return F(number-1) + F(number-2)

F(7)

for x in sorted(serieF):
	print(x)



