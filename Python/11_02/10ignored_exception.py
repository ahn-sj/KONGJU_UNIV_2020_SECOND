my_list = [1,2,3]
# 0~2 ok 그 외 except
try:
    print("첨자를 입력하세요 : ")
    index = int(input())
    print("my_list[{0}]: {1}".format(index, my_list[index]))

#만약 Exception 예외가 존재할 경우 2) 3)의 예외처리구문은 실행할 기회를 얻지 못함
#except Exception as err:
    #print("예외가 발생했습니다. {0}".format(err))

except ZeroDivisionError as err:
    print("2) 0으로 나눌 수 없습니다. ({0})".format(err))

except IndexError as err:
    print("3) 잘못된 첨자입니다. ({0})".format(err))

    
