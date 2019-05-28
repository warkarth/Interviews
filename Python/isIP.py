def isIP(cadena):
  ip = cadena.split(".")
  if len(ip) != 4:
    print("No ip")
  else:
    for x in ip:
      if (int(x) < 0 or int(x) > 255):
        print("No ip")
        return
      
    print("is IP")
  
#isIP("132.248.23.45")
#isIP("Hello world")
#isIP("123a123a123a123a")
#isIP("132.248.23.45.")
isIP("999.999.999.999")
#isIP("172.128.0.1/9")

