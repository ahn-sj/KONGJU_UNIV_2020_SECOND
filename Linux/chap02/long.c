/*
output
--------------
$./long
abcdefg
helloworld
hangul
seongjae
[CTRL+D]
helloworld
$
*/

#include <stdio.h>
#include <string.h>
#define MAXLINE 100

void copy(char from[], char to[]);
char line[MAXLINE];
char longest[MAXLINE];
/*input line between logest line print*/
int main()
{
    int len;
    int max;
    max = 0;

    while(fgets(line, MAXLINE, stdin) != NULL) {
	len = strlen(line);
	if(len > max) {
	    max = len;
	    copy(line, longest);
	}
    }
    if(max > 0)
	printf("%s", longest);

    return 0;
}

/* copy from -> to */

void copy(char from[], char to[])
{
    int i;
    i = 0;
    while((to[i] = from[i]) != '\0')
	++i;
}
