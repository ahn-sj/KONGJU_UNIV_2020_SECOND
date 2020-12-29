print("문제5. 점수 총합 및 평균 구하는 프로그램")



def score_input_fun():
    stu_num = int(input("학생들의 수를 입력하세요 > "))
    print()

    total = 0
    aver = 0
    cnt = 0
    
    while(True):
        score = int(input("점수를 입력하세요. (0 ~ 100) > "))
        if(score < 1 or score > 100):
            print("점수가 0 ~ 100 사이가 아닌 다른 값을 입력하였습니다. 다시 입력해주세요.")
            continue
        cnt += 1
        total += score

        if(cnt == stu_num):
            break;
            
    aver = int(total/stu_num)

    while(True):
        num = int(input("(1) 합계 (2) 평균 (3) 종료 > "))

        if(num == 1):
            print("학생들 점수의 총합은 {0} 입니다.".format(total))
        if(num == 2):
            print("학생들 점수의 평균은 {0} 입니다.".format(aver))
        if(num == 3):
            print("프로그램을 종료 합니다.")
            break
        
score_input_fun()
