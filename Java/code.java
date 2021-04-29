class Main
{
public static void main(String args[])
{
long ans = 0;
while(true)
{
if(ans%10000000 == 0)
{
System.out.println(ans+1);
}
++ans;
}
}
}