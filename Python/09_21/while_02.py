cnt = 0

while True :
    str = input("loop? > ")
    if str== 'yes':
        print("loop!")
        cnt += 1
    elif str=='no' :
        print("no loop!\n")
        break
    else:
        print("\'yes\' \'no\' not input")

print("How to used to loop? > " ,cnt)
