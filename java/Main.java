import java.util.*;

public class Main {

    public static void main(String[] args) {
       Scanner sc= new Scanner(System.in);
    String a = sc.nextLine();
        int i=0;
        int count=0;

        for(int y=0; y< a.length();y++)
        {
         char v = a.charAt(y) ;
            int b = (int)v;
            int c= b+32;
             char d= (char)c;
             String out = Character.toString(d);
             System.out.print(out);
        }


    }
}