lines = ["we'll find a way we always have - interstellar \n",
         "I'll find you and I'll kill you - Taken\n",
         "I'll be back - Terminator 2 \n"]

with open("movie_quotes.txt", "w") as file:
    # writelines는 write메소드와 다르게 여러줄로 구성된 문자열을 한번에 처리
    for line in lines:
        file.writelines(line)
