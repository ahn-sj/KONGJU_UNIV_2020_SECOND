with open("greetings_utf8.txt", 'r', encoding = "ascii", errors = "ignore") as file:
# 인코딩방식을 ascii로 지정하면 한글이나 일본어는 인식하지 못함

# output
# ?
#
# Hello.

    lines = file.readlines()
    line = ''
    for line in lines:
        print(line, end = '')
