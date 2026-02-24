#include<iostream>
using namespace std;

int main(){
int n;

cout<<"Enter the no. of elements : ";
cin>>n;

int arr[n];
cout<<"enter the "<<n<<" elements: \n";
for(int i=0;i<n;i++){
    cin>>arr[i];
}

int largest=arr[0];

for(int i=1 ; i<n;i++){
    if( arr[i]>largest){
      largest=arr[i];
    }
}
  cout<<"The largest element of the array is : "<<largest;
   return  0 ;

}