print("문제4. 리스트(List)")

import random

def random_list():
    print("4-1) ")
    list = []
    for i in range(0, 100):        
        list.append(random.randint(1,11))
    print(list)
    print()
    return list

def count_list():
    print("4-2) ")
    count = []
    for i in range(1,11):
        count.append(list.count(i))

    for i in range(0,10):
        print("{0} : {1}번 ".format(i+1,count[i]))
    print("초기화 되었습니다.\n")    
    return count

def odd_even_list():
    print("4-3) ")
    odd_cnt = 0
    even_cnt = 0
    
    for i in range(0,100):
        if(list[i] % 2 == 1):
            odd_cnt+=1
        elif(list[i] % 2 == 0):
            even_cnt+=1
            
    print("크기가 100인 리스트 list[]내에 홀수와 짝수의 "
          + "개수는 {0} | {1} 입니다.".format(odd_cnt, even_cnt))
    print()

def find_index_list(list_arg, value_arg):
    print("4-4) ")
    for i in range(0, 100):
        if(list[i] == value_arg):
            print("{0} : {1} ".format(value_arg ,list_arg.index(value_arg, i)))
    print("에 위치함.")
    
    
list = random_list()
count = count_list()
oe = odd_even_list()
fi = find_index_list(list, 5)


    

