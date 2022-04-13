let power=100;
const punch=10;
do{
    power != 0?console.log(`player is alive with ${power} power`):'';
    power-=punch;
}
while(power>0);