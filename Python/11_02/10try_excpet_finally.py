my_list = [1,2,3]
# 0~2 ok 그 외 except
try:
    print("첨자를 입력하세요 : ")
    index = int(input())
    print("my_list[{0}]: {1}".format(index, my_list[index]))
    
except Exception as err:
    print("예외가 발생했습니다. {0}".format(err))
    
finally:
    # 예외가 발생했든 안했든간에 무조건 실행
    print("어떤 일이 있어도 마무리합니다.")
