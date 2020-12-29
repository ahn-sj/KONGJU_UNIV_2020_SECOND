print("문제2. 구구단!")

def even():
    for i in range(2,10):
        if(i % 2 == 1):
            continue
        for j in range(1,10):
            print("{0} X {1} = {2}".format(i, j, i*j))
        print()

def odd():
    for i in range(2,10):
        if(i % 2 == 0):
            continue
        for j in range(1,10):
            print("{0} X {1} = {2}".format(i, j, i*j))
        print()        
                
def dan(dan_arg):
    for i in range(1,num_max + 1):
        for j in range(1,10):
            print("{0} X {1} = {2}".format(i, j, i*j))
        print()

def error():
    print("1~9사이의 숫자, \"짝수\", \"홀수\"가 아닌 입력값입니다.")
    print("다시 입력해주세요.")

    
while(True):
    num_max = 0
    str_max = 0
    
    max = input("단 수를 입력하세요.")

    if(max.isdigit() == True):
        num_max = int(max)
    else:
        str_max = str(max) 
   
    
    if(str_max == "짝수"):
        even()
    elif(str_max == "홀수"):
        odd()    
    elif(num_max < 10):
        dan(num_max)
    elif(num_max >= 10):
        error()
