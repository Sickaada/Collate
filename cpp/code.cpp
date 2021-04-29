#include<iostream>
using namespace std;

int main()
{
long long ans = 0;
while(true)
{
ans++;
if(ans%10000000 == 0)
cout << ans << endl;
}
return 0;
}