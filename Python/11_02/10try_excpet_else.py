my_list = [1,2,3]
# 0~2 ok 그 외 except
try:
    print("첨자를 입력하세요 : ")
    index = int(input())
    print("my_list[{0}]: {1}".format(index, my_list[index]))
    
except Exception as err:
    print("예외가 발생했습니다. {0}".format(err))
    
else:
    # except절을 만나지 않았을 경우 실행하는 코드 블록
    print("리스트의 요소 출력에 성공했습니다.")
