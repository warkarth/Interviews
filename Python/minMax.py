def miniMaxSum(arr):
    sumas = [0,0,0,0,0]
    for i in range(5):
        for x in range(5):
            if i == x:
                sumas[i] += 0
            else:
                sumas[i] += arr[x]
    mx = max(sumas)
    mi = min(sumas)
        
    print(mx,mi)

lista = [1,2,3,4,5]
miniMaxSum(lista)