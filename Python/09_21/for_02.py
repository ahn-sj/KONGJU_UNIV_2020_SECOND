max = int(input("how many cycles do you want? > "))

for i in range(1,max+1):
    for j in range(i):
        print("*", end = "")
    print()
