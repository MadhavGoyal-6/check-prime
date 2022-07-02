#include <iostream>
using namespace std;

bool checkPrime(int num)
{
    int range = num;
    for (int i = 2; i < range; i++)
    {
        if (num % i == 0)
        {
            return false;
        }
        range /= i;
    }
    return true;
}

int main()
{
    cout << checkPrime(7) << endl;
    cout << checkPrime(9) << endl;
    cout << checkPrime(67280421310721) << endl;
}